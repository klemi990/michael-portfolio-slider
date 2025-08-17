// Main Application Controller
class PortfolioSlider {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 10;
        this.isTransitioning = false;
        this.slides = [];
        this.timelineItems = [];
        
        this.init();
    }
    
    init() {
        this.setupElements();
        this.setupEventListeners();
        this.setupTimeline();
        this.setupOrientationPrompt();
        this.hideKeyboardHint();
        this.trackAnalytics('page_view', { slide: this.currentSlide });
    }
    
    setupElements() {
        this.slideContainer = document.getElementById('slide-container');
        this.timeline = document.getElementById('timeline');
        this.keyboardHint = document.getElementById('keyboard-hint');
        this.navPrev = document.getElementById('nav-prev');
        this.navNext = document.getElementById('nav-next');
        this.exploreButton = document.getElementById('explore-journey');
        
        // Get all slides
        this.slides = Array.from(document.querySelectorAll('.slide'));
        this.timelineItems = Array.from(document.querySelectorAll('.timeline-item'));
    }
    
    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Mouse navigation
        this.navPrev?.addEventListener('click', () => this.previousSlide());
        this.navNext?.addEventListener('click', () => this.nextSlide());
        
        // Timeline navigation
        this.timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                const slideNumber = parseInt(item.dataset.slide);
                this.goToSlide(slideNumber);
            });
        });
        
        // CTA button
        this.exploreButton?.addEventListener('click', () => this.nextSlide());
        
        // Touch/swipe support
        this.setupTouchSupport();
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Hash change for deep linking
        window.addEventListener('hashchange', () => this.handleHashChange());
        
        // Initial hash check
        this.handleHashChange();
    }
    
    setupTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        this.slideContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        this.slideContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Check if it's a horizontal swipe (not vertical)
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        });
    }
    
    setupTimeline() {
        // Create timeline items for all slides
        const timelineData = [
            { year: '2018', label: 'Start', slide: 1 },
            { year: '2018', label: 'Success', slide: 2 },
            { year: '2019', label: 'Websites', slide: 3 },
            { year: '2021', label: 'Renewables', slide: 4 },
            { year: '2022', label: 'Cooperative', slide: 5 },
            { year: '2023', label: 'Web applications', slide: 6 },
            { year: '', label: 'Experience', slide: 7 },
            { year: '', label: 'Lessons', slide: 8 },
            { year: '', label: 'Contact', slide: 9 }
        ];
        
        // Clear existing timeline items
        this.timeline.innerHTML = '';
        
        // Create timeline items
        timelineData.forEach((item, index) => {
            const timelineItem = document.createElement('button');
            timelineItem.className = 'timeline-item';
            timelineItem.dataset.slide = item.slide;
            timelineItem.setAttribute('aria-label', `Go to slide ${item.slide}: ${item.label}`);
            
            timelineItem.innerHTML = `
                <span class="timeline-label">${item.label}</span>
            `;
            
            timelineItem.addEventListener('click', () => {
                this.goToSlide(item.slide);
            });
            
            this.timeline.appendChild(timelineItem);
        });
        
        // Update timeline items reference
        this.timelineItems = Array.from(document.querySelectorAll('.timeline-item'));
        
        // Set initial active state for timeline
        this.updateTimeline();
    }
    
    setupOrientationPrompt() {
        // Check if mobile and portrait
        if (window.innerWidth <= 767 && window.innerHeight > window.innerWidth) {
            this.showOrientationPrompt();
        }
    }
    
    showOrientationPrompt() {
        const prompt = document.createElement('div');
        prompt.className = 'orientation-prompt';
        prompt.innerHTML = `
            <h3>For the best experience</h3>
            <p>Please rotate your phone to landscape mode</p>
            <div class="prompt-buttons">
                <button class="continue-portrait">Continue in portrait</button>
            </div>
        `;
        
        document.body.appendChild(prompt);
        
        // Handle continue button
        const continueBtn = prompt.querySelector('.continue-portrait');
        continueBtn.addEventListener('click', () => {
            prompt.classList.add('hidden');
            setTimeout(() => prompt.remove(), 300);
        });
    }
    
    handleKeyboard(e) {
        if (this.isTransitioning) return;
        
        switch(e.key) {
            case 'ArrowLeft':
            case 'a':
            case 'A':
                e.preventDefault();
                this.previousSlide();
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                e.preventDefault();
                this.nextSlide();
                break;
            case ' ':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.goToSlide(1);
                break;
            case 'End':
                e.preventDefault();
                this.goToSlide(this.totalSlides);
                break;
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    goToSlide(slideNumber) {
        if (this.isTransitioning || slideNumber < 1 || slideNumber > this.totalSlides) {
            return;
        }
        
        this.isTransitioning = true;
        
        // Update URL hash
        window.location.hash = `slide-${slideNumber}`;
        
        // Update current slide
        const previousSlide = this.currentSlide;
        this.currentSlide = slideNumber;
        
        // Update slide visibility
        this.updateSlideVisibility();
        
        // Update timeline
        this.updateTimeline();
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Track analytics
        this.trackAnalytics('slide_view', { 
            slide: slideNumber, 
            previous_slide: previousSlide 
        });
        
        // Transition complete
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
    
    updateSlideVisibility() {
        this.slides.forEach((slide, index) => {
            const slideNumber = index + 1;
            if (slideNumber === this.currentSlide) {
                slide.classList.add('active');
                slide.setAttribute('aria-hidden', 'false');
            } else {
                slide.classList.remove('active');
                slide.setAttribute('aria-hidden', 'true');
            }
        });
    }
    
    updateTimeline() {
        this.timelineItems.forEach((item, index) => {
            const slideNumber = parseInt(item.dataset.slide);
            if (slideNumber === this.currentSlide) {
                item.classList.add('active');
                item.setAttribute('aria-current', 'true');
            } else {
                item.classList.remove('active');
                item.removeAttribute('aria-current');
            }
        });
    }
    
    updateNavigationButtons() {
        if (this.navPrev) {
            this.navPrev.disabled = this.currentSlide === 1;
        }
        if (this.navNext) {
            this.navNext.disabled = this.currentSlide === this.totalSlides;
        }
    }
    
    handleHashChange() {
        const hash = window.location.hash;
        const match = hash.match(/slide-(\d+)/);
        
        if (match) {
            const slideNumber = parseInt(match[1]);
            if (slideNumber >= 1 && slideNumber <= this.totalSlides) {
                this.goToSlide(slideNumber);
            }
        } else if (hash === '') {
            this.goToSlide(1);
        }
    }
    
    handleResize() {
        // Re-check orientation on resize
        if (window.innerWidth <= 767 && window.innerHeight > window.innerWidth) {
            const existingPrompt = document.querySelector('.orientation-prompt');
            if (!existingPrompt) {
                this.showOrientationPrompt();
            }
        }
    }
    
    hideKeyboardHint() {
        // Hide keyboard hint after 5 seconds
        setTimeout(() => {
            if (this.keyboardHint) {
                this.keyboardHint.style.opacity = '0';
                setTimeout(() => {
                    this.keyboardHint.style.display = 'none';
                }, 300);
            }
        }, 5000);
    }
    
    trackAnalytics(event, data) {
        // Basic analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', event, data);
        }
        
        // Console log for development
        console.log('Analytics:', event, data);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioSlider = new PortfolioSlider();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioSlider;
}
