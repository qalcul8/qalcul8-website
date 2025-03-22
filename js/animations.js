// Animation handler for scroll-based animations

document.addEventListener('DOMContentLoaded', function() {
    // Add animate-on-scroll class to elements we want to animate
    const sections = [
        '.services-grid .service-card',
        '.work-grid .work-item',
        '.process-timeline .process-step',
        '.testimonial-slider .testimonial-card'
    ];
    
    // Check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
            rect.bottom >= 0
        );
    }
    
    // Add animate-on-scroll class to elements
    sections.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('animate-on-scroll');
        });
    });
    
    // Function to check elements and animate them if they are in viewport
    function checkAnimations() {
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check for animations
    checkAnimations();
    
    // Check animations on scroll
    window.addEventListener('scroll', checkAnimations);
    
    // Add hover effects to service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-icon').style.animation = 'spin 1s ease-in-out';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-icon').style.animation = '';
        });
    });
    
    // Add hover effects to process steps
    document.querySelectorAll('.process-step').forEach(step => {
        step.addEventListener('mouseenter', function() {
            this.querySelector('.process-number').style.animation = 'numberPop 0.5s ease-in-out';
        });
        
        step.addEventListener('mouseleave', function() {
            this.querySelector('.process-number').style.animation = '';
        });
    });
});
