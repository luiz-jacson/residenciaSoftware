$(".item-sidebar > ul > li").click(function (e) {
    $(this).siblings().removeClass("ativado");
    $(this).toggleClass("ativado");
    $(this).find("ul").slideToggle();
    $(this).siblings().find("ul").slideup();
    $(this).siblings(),find("ul").find("li").removeClass("ativado")
});

$(".menu-menor").click(function () {
    $(".sidebar").toggleClass("ativado");
});