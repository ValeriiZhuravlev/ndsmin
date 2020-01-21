const toggleMenu = function() {
    $('#burger').click(() => {
        if(!($('#burger').hasClass('header__menu_close'))) {
            $('#burger').addClass('header__menu_close');
            $('.header__navigation').css('left', '0');
            $('.header__navigation').css('display', 'block')
        } else if(($('#burger').hasClass('header__menu_close'))) {
            $('#burger').removeClass('header__menu_close'); 
            $('.header__navigation').css('left', '-150%');
        }
         
    })
}();

module.exports = toggleMenu;