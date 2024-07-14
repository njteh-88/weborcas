document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const button = question.querySelector('.faq-toggle');
        const isOpen = answer.classList.contains('open');

        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.classList.remove('open');
            answer.style.maxHeight = '0';
        });

        document.querySelectorAll('.faq-toggle').forEach(btn => {
            btn.textContent = '+';
        });

        if (!isOpen) {
            answer.classList.add('open');
            button.textContent = '-';
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});