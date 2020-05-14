// Main js file

const toggleMenu = require('./scripts/ToggleMenu.js');
const scroll = require('./scripts/scroll.js');
const device = require('./scripts/device.js');
const fortablet = require('./scripts/fortablet.js');
const modal = require('./scripts/modal.js');
const perload = require('./scripts/preload.js');
const mask = require('./scripts/mask.js');
const sendmail = require('./scripts/sendform.js');


$(document).on('load', () => {
    perload;
})


$(document).ready(() => {
    new WOW().init();
    device;
    fortablet;
    scroll;
    toggleMenu;
    modal;
    mask;
    sendmail;
    
});

