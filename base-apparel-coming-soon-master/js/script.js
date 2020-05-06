$(function () {
    $('#correo').on('blur', function () {
        if ($('#correo').val().indexOf('@') > -1 && $('#correo').val().indexOf('.') > -1) {
            $('.error').hide();
            $('.img-error').hide();

            console.log('Sí está');
        } else {
            $('.error').show();
            $('.img-error').show();

            console.log('no está');
        }

    });
});