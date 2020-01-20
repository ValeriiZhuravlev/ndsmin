const toggleMenu = function() {
    
    let TimeLine = new TimelineMax({paused: true});
    TimeLine.to(".menu", 0.5, {
        left: "0%",
        ease: Power2.easeInOut
    });

    TimeLine.reverse();
    $(document).on('click', '.menu-open', function() {
        TimeLine.reversed(!TimeLine.reversed());
    });
    $(document).on('click', '.menu-close', function() {
        TimeLine.reversed(!TimeLine.reversed());
    });
}();

module.exports = toggleMenu;