const sendform = function() {
	"use strict";

	function validValue(el, phone) {
		el.click(function(e) {
			let regEx = new RegExp(/\+\d\(\d\d\d\)\d\d\d\-\d\d\-\d\d/);
			if(!(regEx.test(phone.val()))) {
				phone.css('border-bottom', '4px solid #ff7730');
				e.preventDefault();
			} else {
				phone.css('border-bottom', 'none');
			}
		});
	}

	validValue($('.contacts__button'), $('.contacts__input_phone'));
	validValue($('.modal__button'), $('.modal__input_phone'));




	function validForm(el, button, success) {
		el.submit(function() { 
			let th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				button.css('display', 'none');
				success.css('display', 'block');
				setTimeout(function() {
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});
	}

	validForm($(".contacts__form"), $('.contacts__button'), $('.contacts__success'));
	validForm($(".modal__form"), $('.modal__button'), $('.modal__success'));
}();
    
module.exports = sendform;