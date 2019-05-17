$('li a.group').on('click', function (event) {
    var group = $(this).attr('data-name');
    var tbody = $('#table-fields tbody');
    $('.main-content').removeClass('hidden');
    $('ul#menuGroup li').removeClass('active');
    $(this).closest('li').addClass('active');
    $.ajax({
        url: "/Params/Group/" + group, type: 'GET',
        dataType: 'json',
    }).done(function (response) {
        tbody.html("");
        if (response.length > 0) {
            let count = 0;
            for (var i in response) {
                count++;
                element = response[i];
                tbody.append($('#tpl-content-table').html()
                    .replace(/__index__/g, count)
                    .replace(/__id__/g, element.id)
                    .replace(/__name__/g, element.visible_Name)
                    .replace(/__value__/g, element.value)
                    .replace(/__description__/g, element.description)
                );
            }
            $('[data-toggle="popover"]').popover()
        } else {
            tbody.append("<tr><td colspan='5' align='center'> Empty Result! </td></tr>")
        }
    }).fail(function (xhr) {
        alert(xhr.responseText);
    });

    return false;
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

$('#applyChanges').on('click', function (event) {
    var $btn = $(this).button('loading');
    const uri = "/Params/ApplyChange";
    $.ajax({
        url: uri, type: 'POST',
        data: {},
        dataType: 'json',
    }).done(function (response) {
        if (response.code == 0) {
            alert("Comand No Work!")
        } else {
            if (response.stdout.length > 0) {
                alert(response.stdout);
            }
            if (response.stderr.length > 0) {
                alert(response.stderr)
            }
        }
    }).fail(function (xhr) {
        alert(xhr.responseText);
    }).always(function() {
        $btn.button('reset')
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