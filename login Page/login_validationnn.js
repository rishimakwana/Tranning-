$(document).ready(function () {


    $("#loginform").validate({

        rules: {
            username: {
                required: true
            },
            password: {
                required: true,
                minlength: 5
            },
        },
        messages: {
            username: {
                required: '**Please enter username!'
            },
            password: {
                required: '**Please enter password!'
            },
        }
        
    })
 
})

