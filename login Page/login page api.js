
$(document).ready(function () {

    $("#loginform").submit(function (event) {

        $("#result").empty();
        event.preventDefault();


        if ($("#loginform").valid()) {

            var username = $("#username").val();
            var password = $("#password").val();

            $.ajax({

                url: 'http://192.168.0.67/NetCoreAPI/api/auth/token',

                type: 'POST',

                dataType: 'json',

                contentType: "application/json; charset=utf-8",

                data: JSON.stringify({
                    "username": username,
                    "password": password

                }),

                success: function (data, textStatus, xhr) {
                    $("#result").append("Login successfully");
                    $("#result").css("color", "green");
                    setTimeout(function () {
                        window.location.href = 'file:///E:/rishi/profileadmin.html'; // the redirect goes here in 3 seconds

                    }, 3000);
                    console.log(data.data.access_token)
                    localStorage.setItem('access_token', data.data.access_token);
                    console.log(data.data.userId)
                    localStorage.setItem('userId', data.data.userId);
                    
                },
                error: function (data, textStatus, errorThrown) {
                    
                    const obj = JSON.parse(JSON.stringify(data));
                    const obj1 = JSON.parse(obj.responseText);
                    $("#result").append(obj1.message);
                    $("#result").css("color", "red");
                }
            });
        }
    });
});  