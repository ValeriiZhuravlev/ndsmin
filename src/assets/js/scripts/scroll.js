const scroll = function() {
    $(".header__navigation, .banner__callback, .logo").on("click", "a", function(event) {
        event.preventDefault();
        var anchorId  = $(this).attr("href");
        scrollingDistance = $(anchorId).offset().top - $(".header").height();
        $("html, body").animate({scrollTop: scrollingDistance}, 800);
    });
}();

module.exports = scroll;