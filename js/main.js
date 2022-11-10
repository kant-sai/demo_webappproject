$(function () {
    var openedr = false;

    var animating = false;

    $(document).scroll(function () {
        if ($(this).scrollTop() < 0) {
            $("#header").css({ "box-shadow": "none", background: "transperent", "border-bottom": "0.0625em solid #B0B0B0" });
            $("#header li a").css({ color: "#FFFFFF" });
            // $("#light-logo").hide();
            // $("#dark-logo").show();
            // $("#mobile-image").attr("src", "images/menu-dark.png");
        } else {
            $("#header").css({ "box-shadow": "none", background: "rgba(90,90,90,1)", "border-bottom": "none" });
            $("#header li a").css({ color: "#FFFFFF" });
            // $("#dark-logo").hide();
            // $("#light-logo").show();
            // $("#mobile-image").attr("src", "images/menu.png");
        }
    });
});

