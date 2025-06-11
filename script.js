// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create energy particles
    createEnergyParticles();
    
    // Animate logo appearances with more dramatic effects
    const logos = document.querySelectorAll('.logo');
    gsap.from(logos, {
        duration: 1.2,
        opacity: 0,
        y: -100,
        scale: 0.5,
        rotation: 15,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
    });
    
    // More dramatic header text animations
    gsap.from(".main-title", {
        duration: 1.2,
        opacity: 0,
        y: 50,
        delay: 0.7,
        ease: "back.out(1.7)"
    });
    
    gsap.from(".tagline", {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 1.2,
        ease: "power3.out"
    });
    
    // Animate navigation links
    gsap.from(".nav-link", {
        duration: 0.6,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        delay: 1.5,
        ease: "power3.out"
    });
    
    // Animated thermometer for summer bills section
    animateThermometer();
    
    // Tab functionality for escalation scenarios
    setupTabs();
    
    // Scroll animations for sections
    animateSectionsOnScroll();
    
    // Enhanced card hover effects
    enhanceCardHoverEffects();
    
    // Animate warning banners
    animateWarningBanners();
    
    // Smooth scroll for navigation
    setupSmoothScroll();
    
    // Periodic logo pulse animation
    startLogoPulse();
});

// Create energy particles in background
function createEnergyParticles() {
    const container = document.querySelector('.energy-particles');
    const colors = ['#8dc63f33', '#1f9ad633', '#f7941d33']; // Company colors with transparency
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('energy-particle');
        
        // Random properties
        const size = Math.random() * 15 + 5;
        const posX = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.bottom = '-50px';
        particle.style.background = color;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
    }
}

// Animate the thermometer in the summer bills section
function animateThermometer() {
    // Initial state
    gsap.set('.thermometer-mercury', { height: '20%' });
    
    // Create animation timeline
    const thermometerTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });
    
    thermometerTl
        .to('.thermometer-mercury', {
            height: '80%',
            duration: 3,
            ease: "power1.inOut"
        })
        .to('.bill', {
            y: -10,
            rotation: 10,
            stagger: 0.2,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        }, "-=1");
}

// Setup tab functionality for the escalation scenarios
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.querySelectorAll('.scenario-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to current button and corresponding content
            button.classList.add('active');
            const scenario = button.getAttribute('data-scenario');
            document.getElementById(`${scenario}-scenario`).classList.add('active');
            
            // Add entrance animation
            gsap.from(`#${scenario}-scenario .conversation-bubble`, {
                y: 20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.5,
                ease: "power3.out"
            });
        });
    });
}

// Animate sections when scrolling into view
function animateSectionsOnScroll() {
    // Brand identity section animations
    ScrollTrigger.create({
        trigger: ".section-branding",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.from(".section-branding .section-header", {
                opacity: 0,
                x: -100,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.from(".section-branding .info-highlight", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out"
            });
            
            gsap.from(".brand-card", {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 0.8,
                delay: 0.4,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".warning-banner", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 1,
                ease: "power3.out"
            });
        }
    });
    
    // Summer bill section animations
    ScrollTrigger.create({
        trigger: ".section-bills",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.from(".section-bills .section-header", {
                opacity: 0,
                x: -100,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.from(".temperature-animation", {
                opacity: 0,
                scale: 0.8,
                duration: 1,
                delay: 0.3,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".section-bills .info-highlight", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out"
            });
            
            gsap.from(".explanation-cards .info-card", {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 0.8,
                delay: 0.7,
                ease: "back.out(1.7)"
            });
        }
    });
    
    // Escalation section animations
    ScrollTrigger.create({
        trigger: ".section-escalation",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.from(".section-escalation .section-header", {
                opacity: 0,
                x: -100,
                duration: 0.8,
                ease: "power3.out"
            });
            
            gsap.from(".section-escalation .info-highlight", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out"
            });
            
            gsap.from(".flow-step", {
                opacity: 0,
                y: 30,
                stagger: 0.3,
                duration: 0.8,
                delay: 0.4,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".flow-arrow", {
                opacity: 0,
                scale: 0,
                stagger: 0.3,
                duration: 0.8,
                delay: 0.7,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".scenario-tabs", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: 1,
                ease: "power3.out"
            });
        }
    });
}

// Enhanced card hover effects
function enhanceCardHoverEffects() {
    // Brand Cards
    document.querySelectorAll('.brand-card').forEach(card => {
        const company = card.getAttribute('data-company');
        let color;
        
        switch(company) {
            case 'trieagle':
                color = '#8dc63f';
                break;
            case 'txu':
                color = '#1f9ad6';
                break;
            case 'ambit':
                color = '#f7941d';
                break;
            default:
                color = '#17a2b8';
        }
        
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                boxShadow: `0 15px 30px rgba(0, 0, 0, 0.15), 0 0 15px ${color}40`, // Color with 40% opacity
                borderTopWidth: '8px',
                y: -10,
                duration: 0.3
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                borderTopWidth: '5px',
                y: 0,
                duration: 0.3
            });
        });
    });
    
    // General info cards
    document.querySelectorAll('.info-card:not(.brand-card)').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                y: -10,
                duration: 0.3
            });
            
            // Animate the icon if present
            const icon = card.querySelector('.card-header i');
            if (icon) {
                gsap.to(icon, {
                    scale: 1.2,
                    rotate: '15deg',
                    duration: 0.4,
                    ease: "back.out(1.7)"
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                y: 0,
                duration: 0.3
            });
            
            // Reset icon animation
            const icon = card.querySelector('.card-header i');
            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotate: '0deg',
                    duration: 0.3
                });
            }
        });
    });
    
    // Solution items
    document.querySelectorAll('.solution-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -5,
                backgroundColor: '#f0f9ff',
                duration: 0.3
            });
            
            gsap.to(item.querySelector('.solution-icon'), {
                y: -5,
                scale: 1.1,
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                backgroundColor: '#f8f9fa',
                duration: 0.3
            });
            
            gsap.to(item.querySelector('.solution-icon'), {
                y: 0,
                scale: 1,
                duration: 0.3
            });
        });
    });
}

// Animate warning banners
function animateWarningBanners() {
    // Info highlight danger
    const dangerHighlight = document.querySelector('.info-highlight.danger');
    if (dangerHighlight) {
        gsap.to(dangerHighlight, {
            boxShadow: '0 0 15px rgba(220, 53, 69, 0.5)',
            repeat: -1,
            yoyo: true,
            duration: 2
        });
    }
    
    // Warning banner
    const warningBanner = document.querySelector('.warning-banner');
    if (warningBanner) {
        gsap.to(warningBanner.querySelector('i'), {
            rotate: '15deg',
            repeat: -1,
            yoyo: true,
            duration: 0.7,
            ease: "power1.inOut"
        });
    }
    
    // Wrong transfer highlight
    const wrongTransfer = document.querySelector('.wrong-transfer');
    if (wrongTransfer) {
        gsap.to(wrongTransfer, {
            backgroundColor: 'rgba(220, 53, 69, 0.1)',
            repeat: -1,
            yoyo: true,
            duration: 1.5
        });
    }
}

// Set up smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Highlight the clicked section temporarily
                const originalBackground = targetElement.style.backgroundColor;
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Account for sticky nav
                    behavior: 'smooth'
                });
                
                // Flash effect when scrolled to section
                setTimeout(() => {
                    gsap.to(targetElement, {
                        backgroundColor: '#fff9e6',
                        duration: 0.5,
                        onComplete: () => {
                            gsap.to(targetElement, {
                                backgroundColor: originalBackground || 'white',
                                duration: 0.5
                            });
                        }
                    });
                }, 500);
            }
        });
    });
}

// Periodic logo pulse animation
function startLogoPulse() {
    const logos = document.querySelectorAll('.logo');
    let i = 0;
    
    // Start a pulse sequence
    function pulseLogo(logo) {
        gsap.to(logo, {
            scale: 1.1, 
            duration: 0.5,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(logo, {
                    scale: 1,
                    duration: 0.5,
                    ease: "power1.inOut"
                });
            }
        });
        
        gsap.to(logo.querySelector('.logo-glow'), {
            opacity: 0.8,
            duration: 0.5,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.to(logo.querySelector('.logo-glow'), {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.inOut"
                });
            }
        });
    }
    
    // Sequence through logos
    setInterval(() => {
        pulseLogo(logos[i]);
        i = (i + 1) % logos.length;
    }, 3000);
}