const tabs = function() {
    let questions = $('.faq__question');
    let answer = $('.faq__answer');

    function swichQuestions() {
        let questionIndex = $(this).attr('data-question').slice(-1);

        if(!($(this).hasClass('faq__question_active'))) {

            for(let i=0; i<questions.length; i++) {
                questions.get(i).classList.remove('faq__question_active');
                answer.get(i).classList.remove('faq__answer_active');
            }

            this.classList.add('faq__question_active');

            for(let i=0; i<answer.length; i++) {
                if(answer.get(i).getAttribute('data-answer') == `answer-${questionIndex}`) {
                    answer.get(i).classList.add('faq__answer_active')
                }
            }
        }
    }

    for(let i=0; i<questions.length; i++) {
        questions.get(i).addEventListener('click', swichQuestions);
    }
}();

module.exports = tabs;