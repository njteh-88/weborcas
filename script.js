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


const reasons = [
    { title: "Title 1", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { title: "Title 2", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { title: "Title 3", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." }
];

const reasonsContainer = document.getElementById('reasons-container');

reasons.map(reason => {
    const reasonCard = `
        <div class="p-6 rounded-lg flex items-start space-x-4 border-custom mt-20">
         <img src="./assets/camel.jpg" alt="${reason.title}" class="w-40 h-40 rounded-lg">
            <div>
                <h3 class="inter-regular-24 font-semibold ml-6">${reason.title}</h3>
                <p class="mt-2 ml-6 inter-medium-16 font-normal opacity-60">${reason.description}</p>
              </div>
        </div>
    `;
    reasonsContainer.innerHTML += reasonCard;
});


const teamMembers = [
    { name: "Jack", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Mike", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Josh", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Anna", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Kate", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Rock", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." }
];

const teamContainer = document.getElementById('team-container');

teamMembers.map(member => {
    const memberCard = `
        <div class="team-member-card p-6 rounded-lg border-custom">
             <img src="./assets/camel.jpg" alt="${teamMembers.name}" class="w-full h-64 rounded-lg">
                <div class="flex flex-col items-center mt-2">
                    <h3 class="inter-regular-24 font-semibold ml-6">${member.name}</h3>
                    <p class="mt-2 ml-6 inter-medium-16 font-normal opacity-60">${member.description}</p>
                </div>
            </div>
        </div>
    `;
    teamContainer.innerHTML += memberCard;
});

console.log(window);