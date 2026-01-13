// ============================================
// SOILSANJEEVANI VERMICOMPOST - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px -5px rgba(26, 20, 16, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.feature-card, .benefit-card, .contact-card, .about-content, .about-image'
    );
    
    animateElements.forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScroll.observe(element);
    });
    
    // ========================================
    // Active Navigation Link
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    // ========================================
    // Parallax Effect for Hero Background
    // ========================================
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const heroSection = document.querySelector('.hero');
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                heroBg.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
            }
        });
    }
    
    // ========================================
    // Button Ripple Effect
    // ========================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c🌱 Soilsanjeevani Vermicompost', 'font-size: 20px; font-weight: bold; color: #2d5a27;');
    console.log('%cHeal Your Soil, Grow Your Future', 'font-size: 14px; color: #d4a017;');
    console.log('%cContact: +91 96998 54383', 'font-size: 12px; color: #6b5b4f;');
});
