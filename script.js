// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Testimonials Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);
    }

    // Check for success hash in URL and show feedback
    const urlHash = window.location.hash;
    if (urlHash === '#success') {
        // Show success state on form submit button
        const submitButton = document.querySelector('.budget-form .btn-primary');
        if (submitButton) {
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviado!';
            submitButton.style.backgroundColor = '#4CAF50';

            // Clear the form
            const form = document.querySelector('.budget-form');
            if (form) {
                form.reset();
            }

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '#4E342E';
            }, 3000);
        }

        // Remove hash from URL to clean up
        setTimeout(() => {
            window.history.replaceState('', document.title, window.location.pathname + window.location.search);
        }, 100);
    }

});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});