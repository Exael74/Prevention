// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create energy particles
    createEnergyParticles();
    
    // Animate logo appearances with more dramatic effects
    const logos = document.querySelectorAll('.logo');
    gsap.from(logos, {
        duration: 1.5,
        opacity: 0,
        y: -120,
        scale: 0.4,
        rotation: 20,
        stagger: 0.3,
        ease: "elastic.out(1.2, 0.6)",
    });
    
    // More dramatic header text animations
    gsap.from(".main-title", {
        duration: 1.5,
        opacity: 0,
        y: 60,
        delay: 0.7,
        ease: "back.out(2)"
    });
    
    gsap.from(".tagline", {
        duration: 1.2,
        opacity: 0,
        y: 40,
        delay: 1.2,
        ease: "power3.out"
    });
    
    // Animate navigation links
    gsap.from(".nav-link", {
        duration: 0.8,
        opacity: 0,
        y: -25,
        stagger: 0.2,
        delay: 1.5,
        ease: "power3.out"
    });
    
    // Animated thermometer for summer bills section with improved animation
    animateThermometer();
    
    // Tab functionality for escalation scenarios
    setupTabs();
    
    // Scroll animations for sections
    animateSectionsOnScroll();
    
    // Enhanced card hover effects
    enhanceCardHoverEffects();
    
    // Animate warning banners with more prominent effects
    animateWarningBanners();
    
    // Smooth scroll for navigation
    setupSmoothScroll();
    
    // Periodic logo pulse animation with improved effects
    startLogoPulse();
    
    // Add 3D hover effect to main buttons
    add3DHoverEffects();
});

// Create energy particles in background with improved variety
function createEnergyParticles() {
    const container = document.querySelector('.energy-particles');
    const colors = ['#8dc63f33', '#1f9ad633', '#f7941d33', '#39b54a33', '#0071bc33', '#f15a2433']; // Enhanced color palette
    
    for (let i = 0; i < 40; i++) { // Increased particle count
        const particle = document.createElement('div');
        particle.classList.add('energy-particle');
        
        // Random properties with more variation
        const size = Math.random() * 20 + 5;
        const posX = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = Math.random() * 15 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.bottom = '-50px';
        particle.style.background = color;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Add more shape variation
        if (Math.random() > 0.7) {
            particle.style.borderRadius = '5px';
            particle.style.transform = `rotate(${Math.random() * 45}deg)`;
        }
        
        container.appendChild(particle);
    }
}

// Improved thermometer animation
function animateThermometer() {
    // Initial state
    gsap.set('.thermometer-mercury', { height: '20%' });
    
    // Create animation timeline with improved dynamics
    const thermometerTl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1.5
    });
    
    thermometerTl
        .to('.thermometer-mercury', {
            height: '85%', // Higher maximum
            duration: 3.5,
            ease: "power2.inOut"
        })
        .to('.bill', {
            y: -15, // More dramatic movement
            rotation: 15,
            stagger: 0.25,
            duration: 1,
            ease: "elastic.out(1.2, 0.4)"
        }, "-=1.5");
}

// Setup tab functionality for the escalation scenarios with improved transitions
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
            
            // Add enhanced entrance animation
            gsap.from(`#${scenario}-scenario .conversation-bubble`, {
                y: 30,
                opacity: 0,
                stagger: 0.3,
                duration: 0.7,
                ease: "power3.out"
            });
            
            gsap.from(`#${scenario}-scenario .scenario-tips`, {
                x: 30,
                opacity: 0,
                duration: 0.7,
                delay: 0.4,
                ease: "back.out(1.7)"
            });
        });
    });
}

// Enhanced section animations when scrolling into view
function animateSectionsOnScroll() {
    // Brand identity section animations
    ScrollTrigger.create({
        trigger: ".section-branding",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.from(".section-branding .section-header", {
                opacity: 0,
                x: -120,
                duration: 1,
                ease: "power3.out"
            });
            
            gsap.from(".section-branding .info-highlight", {
                opacity: 0,
                y: 40,
                duration: 0.9,
                delay: 0.3,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".brand-card", {
                opacity: 0,
                y: 60,
                stagger: 0.25,
                duration: 1,
                delay: 0.5,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".warning-banner", {
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 1.2,
                ease: "elastic.out(1, 0.5)"
            });
        }
    });
    
    // Misbranding prevention section animations
    ScrollTrigger.create({
        trigger: ".section-prevention",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.from(".section-prevention .section-header", {
                opacity: 0,
                x: -120,
                duration: 1,
                ease: "power3.out"
            });
            
            gsap.from(".section-prevention .info-highlight", {
                opacity: 0,
                y: 40,
                duration: 0.9,
                delay: 0.3,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".call-screen-example", {
                opacity: 0,
                scale: 0.85,
                duration: 1.2,
                delay: 0.5,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".tip-card", {
                opacity: 0,
                y: 60,
                stagger: 0.25,
                duration: 1,
                delay: 0.7,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".emergency-tips", {
                opacity: 0,
                y: 40,
                duration: 0.9,
                delay: 1.3,
                ease: "power3.out"
            });
        }
    });
    
    // Summer bill section animations with improved effects
    ScrollTrigger.create({
        trigger: ".section-bills",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.from(".section-bills .section-header", {
                opacity: 0,
                x: -120,
                duration: 1,
                ease: "power3.out"
            });
            
            gsap.from(".temperature-animation", {
                opacity: 0,
                scale: 0.7,
                duration: 1.2,
                delay: 0.3,
                ease: "elastic.out(1, 0.5)"
            });
            
            gsap.from(".section-bills .info-highlight", {
                opacity: 0,
                y: 40,
                duration: 0.9,
                delay: 0.5,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".explanation-cards .info-card", {
                opacity: 0,
                y: 60,
                stagger: 0.25,
                duration: 1,
                delay: 0.7,
                ease: "back.out(1.7)"
            });
        }
    });
    
    // Escalation section animations with more dynamic effects
    ScrollTrigger.create({
        trigger: ".section-escalation",
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.from(".section-escalation .section-header", {
                opacity: 0,
                x: -120,
                duration: 1,
                ease: "power3.out"
            });
            
            gsap.from(".section-escalation .info-highlight", {
                opacity: 0,
                y: 40,
                scale: 1.1,
                duration: 1,
                delay: 0.3,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".flow-step", {
                opacity: 0,
                y: 40,
                stagger: 0.4,
                duration: 0.9,
                delay: 0.6,
                ease: "back.out(1.7)"
            });
            
            gsap.from(".flow-arrow", {
                opacity: 0,
                scale: 0,
                stagger: 0.4,
                duration: 0.9,
                delay: 0.9,
                ease: "elastic.out(1, 0.5)"
            });
            
            gsap.from(".scenario-tabs", {
                opacity: 0,
                y: 60,
                duration: 1,
                delay: 1.2,
                ease: "power3.out"
            });
        }
    });
}

// Enhanced card hover effects with more dynamics
function enhanceCardHoverEffects() {
    // Brand Cards with more dynamic effects
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
                boxShadow: `0 20px 35px rgba(0, 0, 0, 0.18), 0 0 20px ${color}60`, // More intense glow
                borderTopWidth: '8px',
                y: -15,
                duration: 0.4,
                ease: "power2.out"
            });
            
            // Animate card content
            gsap.to(card.querySelector('.card-logo'), {
                scale: 1.1,
                y: -5,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
            
            gsap.to(card.querySelectorAll('.feature-list li'), {
                x: 5,
                stagger: 0.05,
                duration: 0.3,
                ease: "power1.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                borderTopWidth: '5px',
                y: 0,
                duration: 0.5,
                ease: "power2.inOut"
            });
            
            // Reset content animation
            gsap.to(card.querySelector('.card-logo'), {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
            
            gsap.to(card.querySelectorAll('.feature-list li'), {
                x: 0,
                stagger: 0.02,
                duration: 0.2,
                ease: "power1.inOut"
            });
        });
    });
    
    // General info cards with enhanced interactions
    document.querySelectorAll('.info-card:not(.brand-card)').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                boxShadow: '0 20px 35px rgba(0, 0, 0, 0.18)',
                y: -15,
                duration: 0.4,
                ease: "power2.out"
            });
            
            // Animate the icon if present with more dramatic effect
            const icon = card.querySelector('.card-header i');
            if (icon) {
                gsap.to(icon, {
                    scale: 1.3,
                    rotate: '20deg',
                    duration: 0.5,
                    ease: "back.out(1.7)"
                });
            }
            
            // Subtle list item animation
            const listItems = card.querySelectorAll('li, p');
            if (listItems.length) {
                gsap.to(listItems, {
                    x: 5,
                    stagger: 0.03,
                    duration: 0.3,
                    ease: "power1.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                y: 0,
                duration: 0.5,
                ease: "power2.inOut"
            });
            
            // Reset icon animation
            const icon = card.querySelector('.card-header i');
            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotate: '0deg',
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            }
            
            // Reset list animation
            const listItems = card.querySelectorAll('li, p');
            if (listItems.length) {
                gsap.to(listItems, {
                    x: 0,
                    stagger: 0.02,
                    duration: 0.2,
                    ease: "power1.inOut"
                });
            }
        });
    });
    
    // Solution items with enhanced effects
    document.querySelectorAll('.solution-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                backgroundColor: '#f0f9ff',
                duration: 0.4,
                ease: "power2.out"
            });
            
            gsap.to(item.querySelector('.solution-icon'), {
                y: -8,
                scale: 1.2,
                rotate: '10deg',
                duration: 0.5,
                ease: "back.out(1.7)"
            });
            
            gsap.to(item.querySelector('h4'), {
                scale: 1.05,
                color: '#0056b3',
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                backgroundColor: '#f8f9fa',
                duration: 0.4,
                ease: "power2.inOut"
            });
            
            gsap.to(item.querySelector('.solution-icon'), {
                y: 0,
                scale: 1,
                rotate: '0deg',
                duration: 0.3,
                ease: "power2.inOut"
            });
            
            gsap.to(item.querySelector('h4'), {
                scale: 1,
                color: 'var(--dark-color)',
                duration: 0.3
            });
        });
    });
}

// Enhanced warning banner animations
function animateWarningBanners() {
    // Info highlight danger with more prominent pulse
    const dangerHighlight = document.querySelector('.info-highlight.danger');
    if (dangerHighlight) {
        gsap.to(dangerHighlight, {
            boxShadow: '0 0 20px rgba(220, 53, 69, 0.7)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });
        
        // Additional animated outline
        const outline = document.createElement('div');
        outline.style.position = 'absolute';
        outline.style.top = '0';
        outline.style.left = '0';
        outline.style.width = '100%';
        outline.style.height = '100%';
        outline.style.border = '2px solid rgba(220, 53, 69, 0)';
        outline.style.borderRadius = 'inherit';
        outline.style.pointerEvents = 'none';
        
        dangerHighlight.style.position = 'relative';
        dangerHighlight.appendChild(outline);
        
        gsap.to(outline, {
            borderColor: 'rgba(220, 53, 69, 0.7)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut",
            delay: 0.75
        });
    }
    
    // Warning banner with enhanced animation
    const warningBanner = document.querySelector('.warning-banner');
    if (warningBanner) {
        gsap.to(warningBanner.querySelector('i'), {
            rotate: '25deg',
            scale: 1.2,
            repeat: -1,
            yoyo: true,
            duration: 0.7,
            ease: "power1.inOut"
        });
        
        // Add subtle pulse to entire banner
        gsap.to(warningBanner, {
            boxShadow: '0 5px 15px rgba(253, 126, 20, 0.3)',
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut"
        });
    }
    
    // Wrong transfer highlight with more attention-grabbing effect
    const wrongTransfer = document.querySelector('.wrong-transfer');
    if (wrongTransfer) {
        // Create a more dynamic effect with a timeline
        const wrongTransferTl = gsap.timeline({repeat: -1});
        
        wrongTransferTl
            .to(wrongTransfer, {
                backgroundColor: 'rgba(220, 53, 69, 0.2)',
                duration: 1,
                ease: "sine.inOut"
            })
            .to(wrongTransfer, {
                backgroundColor: 'rgba(220, 53, 69, 0)',
                duration: 1,
                ease: "sine.inOut"
            })
            .to(wrongTransfer.querySelector('i'), {
                scale: 1.3,
                duration: 0.5,
                ease: "back.out(1.7)"
            }, "<")
            .to(wrongTransfer.querySelector('i'), {
                scale: 1,
                duration: 0.5,
                ease: "power2.inOut"
            });
    }
}

// Set up smooth scroll for navigation links with enhanced effects
function setupSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Highlight the clicked section with enhanced effect
                const originalBackground = targetElement.style.backgroundColor;
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Account for sticky nav
                    behavior: 'smooth'
                });
                
                // Enhanced flash effect when scrolled to section
                setTimeout(() => {
                    gsap.fromTo(targetElement, 
                        {
                            backgroundColor: '#fff9e6',
                            boxShadow: '0 0 30px rgba(255, 193, 7, 0.5)'
                        },
                        {
                            backgroundColor: originalBackground || 'white',
                            boxShadow: 'var(--box-shadow)',
                            duration: 1.5,
                            ease: "power2.inOut"
                        }
                    );
                }, 500);
            }
        });
    });
}

// Enhanced periodic logo pulse animation
function startLogoPulse() {
    const logos = document.querySelectorAll('.logo');
    let i = 0;
    
    // Start a pulse sequence with more dramatic effect
    function pulseLogo(logo) {
        // Create a timeline for coordinated animation
        const pulseTl = gsap.timeline();
        
        pulseTl
            .to(logo, {
                scale: 1.15, 
                duration: 0.6,
                ease: "power2.out",
            })
            .to(logo.querySelector('.logo-glow'), {
                opacity: 0.9,
                duration: 0.4,
                ease: "power2.out",
            }, "<")
            .to(logo, {
                scale: 1,
                duration: 0.8,
                ease: "elastic.out(1.2, 0.5)",
                delay: 0.2
            })
            .to(logo.querySelector('.logo-glow'), {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
            }, "<");
            
        // Subtle rotation
        gsap.to(logo, {
            rotation: "5deg",
            duration: 0.6,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut"
        });
    }
    
    // Sequence through logos
    setInterval(() => {
        pulseLogo(logos[i]);
        i = (i + 1) % logos.length;
    }, 3000);
}

// New function to add 3D hover effects
function add3DHoverEffects() {
    // Add 3D hover effect to buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('mouseenter', (e) => {
            gsap.to(btn, {
                y: -4,
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                duration: 0.3
            });
        });
        
        btn.addEventListener('mouseleave', (e) => {
            gsap.to(btn, {
                y: 0,
                boxShadow: 'none',
                duration: 0.3
            });
        });
    });
    
    // Add subtle tilt effect to cards
    document.querySelectorAll('.info-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const bounds = card.getBoundingClientRect();
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            const percentX = (e.clientX - centerX) / (bounds.width / 2);
            const percentY = -(e.clientY - centerY) / (bounds.height / 2);
            const maxTilt = 2;
            
            gsap.to(card, {
                rotationX: percentY * maxTilt,
                rotationY: percentX * maxTilt,
                duration: 0.3,
                ease: "power1.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });
}
