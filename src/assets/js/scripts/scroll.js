const scroll = function() {
    $(document).scroll(function() {
        let $nav = $('.header');
        $nav.toggleClass('scrolled', $(this).scrollTop() > 
        $nav.height());
    });
}();

module.exports = scroll;