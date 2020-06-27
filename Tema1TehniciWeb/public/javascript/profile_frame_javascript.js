$(document).ready(function () {

    $("body").on("click", ".control_reset", function () {
        var control = $(this).closest(".user").find(".edit_user_password");
        if ($(control).css("display") === "flex") {
            $(control).css("display", "none");
        } else $(control).css("display", "flex");
    });
    $("body").on("click", ".control_reset_name", function () {
        var control = $(this).closest(".user").find(".edit_user_name");
        if ($(control).css("display") === "flex") {
            $(control).css("display", "none");
        } else $(control).css("display", "flex");
    });

    $("body").on("click", ".control_delete", function () {
        var user = $(this).closest(".user").attr("data-name");
        var control = $(this).closest(".user");

        $.get("/update_users", { page: "profile",operation: "delete", user: user }, function (data) {
            alert(data);
            $(control).css("display", "none");
        });
    });




    $("body").on("click", ".control_submit_password", function () {
        var parent = $(this).closest(".user");
        var user = $(parent).attr("data-name");
        var pass = $(this).closest(".edit_user_password").find(".new_password");
        var control = $(this).closest(".edit_user_password");

        $(control).css("display", "none");

        $.get("/update_users", { page: "profile",operation: "reset", user: user, pass: pass.val() }, function (data) {
            alert(data);
            $(".user_pass").text(pass.val());
        })
    });

    $("body").on("click", ".control_submit_username", function () {
        var name = $(this).closest(".edit_user_name").find(".new_username");
        var control = $(this).closest(".edit_user_name");

        $(control).css("display", "none");

        $.get("/update_users", { page:"profile",operation: "rename", user: name.val() }, function (data) {
            alert(data);
            $(".user_name").text(name.val());
        })
    });
});