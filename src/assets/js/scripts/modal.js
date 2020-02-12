const modal = function() {
    $('#openmodal').on('click', () => {
        $('.modal').css('display', 'flex');
    });

    $('#close').on('click', () => {
        $('.modal').css('display', 'none');
    });
}();

module.exports = modal;