

$(document).ready(function () {
    $("#signupform").validate({

        rules: {
            fname: {
                required: true,
                minlength: 3,
                maxlength: 50,
            },
            lname: {
                required: true,
                minlength: 3,
                maxlength: 50,
            },
            mobilenumber: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },

            email: {
                required: true,
            },

            username: {
                minlength: 3,
                maxlength: 50,
                required: true,
            },
           
            password1: {
                required: true,
                minlength: 5,
            },
            password2: {
                required: true,
                equalTo: "#password1"
            }
        },
        messages: {
            fname: {
                required: "**Please enter Your First name",
                minlength: "**Name should be at least 3 Characters",
            },
            lname: {
                required: "**Please enter Your last name",
                minlength: "**Last name should be at least 3 characters",
            },
            mobilenumber: {
                required: "Please Enter Your Mobile Number",
                minlength: "Enter 10 digit Mobile Number"
            },

            email: {
                required: "**Enter Your Email",
                email: "**Enter Valid Email"
            },

            username: {
                required: "**please Enter User Name",
            },
            password1: {
                required: "**You need To fill this field",
                minlength: "**please enter at least 5 characters."

            },
            password2: {
                required: "**You need To fill this field",
                minlength: "**Please enter at least 5 characters"
            },
        }
    });
});

