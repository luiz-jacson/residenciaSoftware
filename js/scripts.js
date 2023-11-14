$(".item-sidebar > ul > li").click(function (e) {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle();
    $(this).siblings().find("ul").slideup();
    $(this).siblings(),find("ul").find("li").removeClass("active")
});

$(".menu-menor").click(function () {
    $(".sidebar").toggleClass("active");
});