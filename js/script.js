// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                // Success message
                const formElements = this.elements;
                const formData = {};
                
                for (let i = 0; i < formElements.length; i++) {
                    const element = formElements[i];
                    if (element.name && element.value) {
                        formData[element.name] = element.value;
                    }
                }
                
                alert('Message sent successfully! We will get back to you soon.');
                
                // Reset form
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    }
    
    // Add names to form fields for submission handling
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs.forEach((input, index) => {
        if (!input.hasAttribute('name')) {
            const placeholderText = input.getAttribute('placeholder');
            if (placeholderText) {
                const name = placeholderText.toLowerCase().replace(/\s+/g, '_');
                input.setAttribute('name', name);
            } else {
                input.setAttribute('name', `field_${index}`);
            }
        }
    });
    
    // Animation on scroll 
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .work-item, .process-step, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for scroll animations
    document.querySelectorAll('.service-card, .work-item, .process-step, .testimonial-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run on initial load and on scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Counter animation for stats
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Animate stats when they come into view
    const handleStatAnimation = () => {
        const stats = document.querySelectorAll('.stat-number');
        const statSection = document.querySelector('.about-stats');
        
        if (statSection && stats.length > 0) {
            const sectionPosition = statSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionPosition < windowHeight - 100 && !statSection.classList.contains('animated')) {
                stats.forEach(stat => {
                    const target = parseInt(stat.textContent.replace(/\D/g, ''), 10);
                    animateCounter(stat, target);
                });
                
                statSection.classList.add('animated');
            }
        }
    };
    
    window.addEventListener('scroll', handleStatAnimation);
    window.addEventListener('load', handleStatAnimation);
    
    // No hover-dependent effects for work items to ensure consistent display
    
    // Removing the typewriter effect as it doesn't handle HTML tags properly
});