
$('li a.group').on('click', function (event) {
    var group = $(this).attr('data-name');
    var accordion = $('#accordion');
    accordion.attr('data-group', group); 
    $('ul#menuGroup li').removeClass('active');
    $(this).closest('li').addClass('active');
    $.ajax({
        url: "/Params/Groups/"+ group +"/Files", type: 'GET',
        dataType: 'json',
    }).done(function (response) {
        accordion.html("");
        let count = 1;
        for (var i in response) {
            element = response[i];
            accordion.append($('#tpl-content-tab').html()
                .replace(/__head__/g, "head" + count)
                .replace(/__body__/g, "body" + count)
                .replace(/__title__/g, getFileName(element))
                .replace(/__path__/g, element)
            );
            count++;
        }
    }).fail(function (xhr) {
        alert(xhr.responseText);
    });

    return false;
});

$(document).on('show.bs.collapse', '#accordion', function (event) {
    const group = $(this).attr('data-group');
    const path  = $(event.target).attr('data-path');
    const tbody = $(event.target).find('tbody');
    $.ajax({
        url: "/Params/Group/" + group + "/File", type: 'POST',
        data: { "path": path },
        dataType: 'json',
    }).done(function (response) {
        tbody.html("");
        let count = 1;
        for (var i in response) {
            element = response[i];
            tbody.append($('#tpl-content-table').html()
                .replace(/__index__/g, count)
                .replace(/__id__/g, element.id)
                .replace(/__section__/g, element.section)
                .replace(/__key__/g, element.name)
                .replace(/__name__/g, element.visible_Name)
                .replace(/__value__/g, element.value)
                .replace(/__description__/g, element.description)
            );
            count++;
        }
        $('[data-toggle="popover"]').popover()
    }).fail(function (xhr) {
        alert(xhr.responseText);
    });
});

$(document).on('input', 'input[name="Value"]', function () {
    if (this.value !== $(this).attr('data-value')) {
        $(this).closest('.form-group').removeClass('has-success').addClass('has-error');
    } else {
        $(this).closest('.form-group').removeClass('has-error');
    }
});


$(document).on('click', 'button.submitForm', function () {
    var index = $(this).attr('data-index');
    $('form.formParam[data-index="' + index + '"]').trigger('submit');
});

$(document).on('submit', 'form.formParam', function (event) {
    var target = $(this);    
    var index = target.attr('data-index')
    $.ajax({
        url: target.attr('action'), type: 'POST',
        data: target.serialize(),
        dataType: 'json',
    }).done(function (response) {
        var input = $('input[data-index="'+ index +'"][name="Value"]');
        input.attr('data-value', response.value);
        input.closest('.form-group').removeClass('has-error').addClass('has-success');
    }).fail(function (xhr) {
        alert(xhr.responseText);
    });
    
    return false;
});

function getFileName(dir) {
    let i;
    for (i = dir.length; i > 0; i--) {
        if (dir[i - 1] == '\\') break;
    }
    return dir.substring(i);
}