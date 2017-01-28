$(document).ready(function () {

    $('#form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
              required: true,
              email: true
            },
            phone: {
                required: true,
                phoneUS: true
            }
        },
        submitHandler: function (form) {
          alert('valid submission')
          var $form = $(form);
          $form.submit();
        }
    });

});
