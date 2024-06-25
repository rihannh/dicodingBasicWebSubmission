// *Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
// *Hamburger Menu End

// *Modal Aside
document.addEventListener('DOMContentLoaded', (event) => {
    const asideToggleButton = document.getElementById('asideToggleButton');
    const asideModal = document.getElementById('asideModal');
    const closeButton = document.querySelector('.close-button');

    asideToggleButton.addEventListener('click', () => {
        asideModal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        asideModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === asideModal) {
            asideModal.style.display = 'none';
        }
    });
});
// *Modal Aside End


// *Upcoming Events Card
const EventItems = [
    {
        name: 'Deploy Your First Generative AI App in 7 Minutes',
        image: './src/images/ai-app.png',
        time: 'June 21, 2024 (8:00 - 9:00 AM)',
        type: 'Workshop / Study Group',
        location: 'Universiti Teknologi Malaysia - Johor Bahru, Malaysia'
    },
    {
        name: 'Laravel For Beginners: Building Your First Web App',
        image: './src/images/laravel.png',
        time: 'July 27, 2024 (8:00 AM - 12:00 PM)',
        type: 'External RSVP',
        location: 'UPNV Jawa Timur - Surabaya, Indonesia'
    },
    {
        name: 'Seminar Maliki Tech Fest 2024',
        image: './src/images/maliki.png',
        time: 'June 22, 2024 (8:00 AM - 12:00 PM)',
        type: 'Speaker Session / Tech Talk',
        location: 'UIN Maulana Malik Ibrahim Malang - Malang, Indonesia'
    },
];

function loadEvents() {
    const eventsContainer = document.getElementById('events');

    EventItems.forEach((item) => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        eventCard.innerHTML = `
            <div class="event-image">
                <img src="${item.image}" alt="${item.name}">
                <p class="event-time">${item.time}</p>
            </div>
            <div class="event-details">
                <p class="event-type">${item.type}</p>
                <h3 class="event-name">${item.name}</h3>
                <p class="event-location">${item.location}</p>
            </div>
        `;

        eventsContainer.appendChild(eventCard);
    });
}

document.addEventListener('DOMContentLoaded', loadEvents);
// *Upcoming Events Card End


// * Organizer Card
const TeamItems = [
    { name: "Nadia Laras", role: "GDSC Lead", image: "./src/images/Core Team/nadia.jpg" },
    { name: "Muhammad Fakhri Rizqullah", role: "Co-Lead", image: "./src/images/Core Team/fakhri.png" },
    { name: "Suci Amalia", role: "Treasure", image: "./src/images/Core Team/suci.png" },
    { name: "Amalia Sabila", role: "Secretary", image: "./src/images/Core Team/amalia.png" },
    { name: "Zildjian Vito Sulaiman", role: "Front-End Development Core Team", image: "./src/images/Core Team/zildjian.png" },
    { name: "Muhammad Raihan Arrasyid", role: "Back-End Development Core Team", image: "./src/images/Core Team/raihan.png" },
    { name: "Muhammad Zhafran", role: "Mobile Development Core Team", image: "./src/images/Core Team/zhafran.png" },
    { name: "Gede Pradnyananda", role: "Machine Learning Core Team", image: "./src/images/Core Team/gede.png" },
    { name: "Edo Pratama", role: "Cyber Security Core Team", image: "./src/images/Core Team/edo.png" },
    { name: "Naura Tri Raihana", role: "UI/UX Core Team", image: "./src/images/Core Team/naura.png" },
    { name: "Anandita Nabilla Ramadhani", role: "Project Management Core Team", image: "./src/images/Core Team/anandita.jpg" },
    { name: "Renisya Kusnadi", role: "Community Development Core Team", image: "./src/images/Core Team/renisya.png" },
    { name: "Aisha Nuraini", role: "Creative Design Core Team", image: "./src/images/Core Team/aisha.png" },
    { name: "Rafika Octaria Ningsih", role: "Creative Design Core Team", image: "./src/images/Core Team/rafika.png" },
    { name: "Muhammad Farrel Al-Wafi Frizzy", role: "Content Writing Core Team", image: "./src/images/Core Team/farrel.png" },
    { name: "Huzaini Hamdani", role: "Public Relation Core Team", image: "./src/images/Core Team/huzaini.png" }
];

function loadTeamMembers() {
    const teamContainer = document.getElementById('organizer-team');
    teamContainer.innerHTML = '';  // Bersihkan konten yang ada

    TeamItems.forEach((item) => {
        const teamMember = document.createElement('div');
        teamMember.classList.add('organizer-team-member');

        teamMember.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.role}</p>
        `;

        teamContainer.appendChild(teamMember);
    });
}

document.addEventListener('DOMContentLoaded', loadTeamMembers);
// * Organizer Card End
