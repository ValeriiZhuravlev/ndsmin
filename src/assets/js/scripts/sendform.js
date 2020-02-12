const sendform = function() {
	"use strict";
	$('.contacts__button').click(function(e) {
		let regEx = new RegExp(/\+\d\(\d\d\d\)\d\d\d\-\d\d\-\d\d/);
		if(!(regEx.test($('.contacts__input_phone').val()))) {
			$('.contacts__input_phone').css('border-bottom', '4px solid #ff7730');
			e.preventDefault();
		} else {
			$('.contacts__input_phone').css('border-bottom', 'none');

		}
	});

	$('.modal__button').click(function(e) {
		let regEx = new RegExp(/\+\d\(\d\d\d\)\d\d\d\-\d\d\-\d\d/);
		if(!(regEx.test($('.modal__input_phone').val()))) {
			$('.modal__input_phone').css('border-bottom', '4px solid #ff7730');
			e.preventDefault();
		} else {
			$('.modal__input_phone').css('border-bottom', 'none');
		}
	});



	$(".contacts__form").submit(function() { 
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$('.contacts__button').css('display', 'none');
			$('.contacts__success').css('display', 'block');
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".modal__form").submit(function() { 
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$('.modal__button').css('display', 'none');
			$('.modal__success').css('display', 'block');
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	}();
    
    module.exports = sendform;