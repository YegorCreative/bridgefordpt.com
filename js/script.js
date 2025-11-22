// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add smooth scrolling behavior
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Add scroll effect to header
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Add animation to service items on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});
