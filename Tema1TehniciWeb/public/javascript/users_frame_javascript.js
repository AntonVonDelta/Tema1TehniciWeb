$(document).ready(function () {



    $("body").on("click", ".control_block", function () {
        var user = $(this).closest(".user").attr("data-name");
        var btn = $(this);

        $.get("/update_users", { page: "users",operation: "block", user: user }, function (data) {
            console.log(data);
            $(btn).text(data);
        });
    });

    $("body").on("click", ".control_reset", function () {
        var control = $(this).closest(".user").find(".edit_user");
        if ($(control).css("display") === "flex") {
            $(control).css("display", "none");
        } else $(control).css("display", "flex");
    });

    $("body").on("click", ".control_delete", function () {
        var user = $(this).closest(".user").attr("data-name");
        var control = $(this).closest(".user");

        $.get("/update_users", { page: "users",operation: "delete", user: user }, function (data) {
            alert(data);
            $(control).css("display", "none");
        });
    });




    $("body").on("click", ".control_submit_password", function () {
        var parent = $(this).closest(".user");
        var user = $(parent).attr("data-name");
        var pass = $(this).closest(".edit_user").find(".new_password");
        var control = $(this).closest(".edit_user");

        $(control).css("display", "none");

        $.get("/update_users", { page: "users", operation: "reset", user: user, pass: pass.val() }, function (data) {
            alert(data);
        })
    });


    $("body").on("click", ".control_new_user", function () {
        var entry = "\
            <li class='user' data-name='%0%' >\
        <div class='line'>\
                <img class='avatar_img' src='images/img_avatar5.png' />\
                <span class='user_name'>%0%</span>\
                <div class='controls'>\
                    <span class='btn_control control_chat' onclick=\"window.open('/mesaje?user=%0%'); \">Chat</span>\
                    <span class='btn_control control_reset'>Reset Password</span>\
                    <span class='btn_control warning control_block'>Block</span>\
                    <span class='btn_control warning control_delete'>Delete</span>\
                </div>\
	</div>\
        <div class='edit_user'>\
                <input type='text' class='new_password' />\
                <span class='btn_control warning control_submit_password'>Reset</span>\
            </div>\
</li > ";
        var user = $(this).closest(".add_user_wrapper").find(".new_user_name").val();

        $.get("/update_users", { page: "users",operation: "add", user: user }, function (data) {
            alert(data);
            $(".users_list").append(entry.replace(/%0%/g, user));
        })
        

    });
});