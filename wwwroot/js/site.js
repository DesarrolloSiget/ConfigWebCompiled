// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

$('a.sendPost').on('click', function (e) {
    const href = $(this).attr('href');
    const oTitle = $(this).attr('data-title');
    const oConfirm = $(this).attr('data-confirm');
    const oCancel = $(this).attr('data-cancel');
    swal({
        title: oTitle,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: oConfirm,
        showLoaderOnConfirm: true,
        cancelButtonText: oCancel,
        preConfirm: function () {
            return new Promise(function (resolve) {
                $.ajax({
                    url: href, type: 'POST',
                    dataType: 'html',
                }).done(function (response) {
                    resolve({ status: true, message: response })
                }).fail(function (xhr) {
                    resolve({ status: false, message: xhr.responseText })
                });
            });
        }
    }).then(function (result) {
        var data = result.value;
        if (typeof data === 'object') {
            if (data.status) {
                swal(data.message, '', 'success');
            } else {
                swal(data.message, '', 'error');
            }
        }
    });

    return false;
});