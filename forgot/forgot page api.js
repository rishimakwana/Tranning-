
$(document).ready(function () {

    $("#forgot").submit(function (event) {

        $("#result").empty();
        event.preventDefault();


        if ($("#forgot").valid()) {


            var userName = $("#username").val();



            $.ajax({
                url: 'http://192.168.0.67/NetCoreAPI/api/auth/forgotpassword',

                type: 'POST',
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({

                    "userName": userName

                }),

                success: function (data, textStatus, xhr) {

                    alert("Your New Password Has Been Successfully Send To Your Email ID");
                     window.location.href = "file:///E:/rishi/login.html";
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






