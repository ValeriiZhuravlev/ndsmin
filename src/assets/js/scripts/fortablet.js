const fortablet = function() {
    if(device.tablet()) {
        $('body').removeClass('no-touch');
    };
}();

module.exports = fortablet;