function initializeMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        console.log('Menu button clicked, menu state:', mobileMenu.classList.contains('hidden') ? 'hidden' : 'visible');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        console.log('Close button clicked, menu hidden');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
});

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


const reasonsContainer = document.getElementById('reasons-container');
const teamContainer = document.getElementById('team-container');

const reasons = [
    { title: "Top-Tier Talent", description: "Our team of seasoned experts in Full Stack development, UI/UX design, WordPress, SEO, and SMM is dedicated to delivering cutting-edge solutions.",img:"choose1" },
    { title: "Client-First Approach", description: "We prioritize your goals and tailor our services to meet your unique needs, ensuring your satisfaction and success.",img:"choose2" },
    { title: "Quality and Reliability", description: "Expect nothing less than high-quality work, delivered on time and within budget. We stand by our commitments.",img:"choose3" },
    { title: "Transparent and Responsive", description: "Clear communication is key. We keep you informed and involved at every stage of your project.",img:"choose4" },
    { title: "Proven Success", description: "Join the ranks of our satisfied clients who've seen real results with our services. Your success is our mission.",img:"choose5" }
];
const teamMembers = [
    { name: "Jack", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Mike", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Josh", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Anna", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Kate", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." },
    { name: "Rock", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." }
];


reasons.map(reason => {
    const reasonCard = `
            <div class="p-6 rounded-lg flex items-start space-x-4 border-custom mt-20">
             <img src="./assets/chooseUs/${reason.img}.jpg" alt="${reason.title}" class="w-40 h-40 rounded-lg">
                <div>
                    <h3 class="inter-regular-24 font-semibold ml-6">${reason.title}</h3>
                    <p class="mt-2 ml-6 inter-medium-16 font-normal opacity-60">${reason.description}</p>
                  </div>
            </div>
        `;
    reasonsContainer.innerHTML += reasonCard;
});

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


