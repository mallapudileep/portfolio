// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Basic Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo; you can connect this to a backend later.');
});