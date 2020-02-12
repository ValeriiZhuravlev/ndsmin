const preload = function() {
    if(!($('.loading').hasClass('done'))) {
        $('.loading').addClass('done');
    }
}();

module.exports = preload;