$('form').on('submit', function (event) {
    var target = $(this);    
    var formData = new FormData();
    formData.append('file', $('#file')[0].files[0]);
    $.ajax({
        url: target.attr('action'), type: 'POST',
        data: formData,
        dataType: 'json',
        processData: false,  // tell jQuery not to process the data
        contentType: false,  // tell jQuery not to set contentType
    }).done(function (response) {
        toastr.success(response);
    }).fail(function (xhr) {
        toastr.error(xhr.responseText);
    }).always(function (xhr) {
        target.trigger('reset');
    });
    
    return false;
});

$("#file").fileinput({
    showUpload: false,
    dropZoneEnabled: false,
    maxFileCount: 1,
    showPreview: false,
    allowedFileExtensions: ["zip"]
});