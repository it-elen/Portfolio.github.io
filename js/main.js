$("#up").hide();

$(document).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $("#up").fadeIn();
    } else {
        $("#up").fadeOut();
    }
    return false;
});

$("#up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

// ------- Animated


$(".header_title").addClass("animated fadeInDownBig");
$(".header_slogan-l").addClass("animated bounceInLeft");
$(".header_slogan-r").addClass("animated bounceInRight");