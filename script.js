// Smooth scrolling for navigation links
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project modals
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const projectBtns = document.querySelectorAll('.project-btn');

projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectTitle = btn.parentElement.querySelector('h3').textContent;
        modalBody.innerHTML = `
            <h3>${projectTitle}</h3>
            <p>Detailed description of ${projectTitle.toLowerCase()}. Live demo and GitHub links would go here.</p>
            <p>Technologies: HTML, CSS, JavaScript.</p>
        `;
        modal.style.display = 'block';
    });
});

// Close modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Contact form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! It has been sent.');
    e.target.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255,255,255,0.95)';
    } else {
        nav.style.background = 'rgba(255,255,255,0.9)';
    }
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.onclick = () => {
    navMenu.classList.toggle("active");
};
