// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Gallery image click event
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            alert('You clicked on the gallery image!');
        });
    });

    // Contact form submission handler (example)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
        });
    }
});
