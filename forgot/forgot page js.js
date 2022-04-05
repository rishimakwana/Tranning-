$(document).ready(function () {
    $("#forgot").validate({

        rules: {
            userName: {
                minlength: 3,
                maxlength: 50,
                required: true,
            },
          
        },

        messages: {
            userName: {
                required: "**please Enter User Name",
            },
          
        },

    });
})