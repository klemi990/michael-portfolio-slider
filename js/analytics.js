// Analytics functionality
// This file can be extended with additional analytics features

// Enhanced analytics tracking
class Analytics {
    constructor() {
        this.setupAnalytics();
    }
    
    setupAnalytics() {
        // Track resume downloads
        this.trackResumeDownloads();
        
        // Track LinkedIn clicks
        this.trackLinkedInClicks();
        
        // Track email contacts
        this.trackEmailContacts();
        
        console.log('Analytics initialized');
    }
    
    trackResumeDownloads() {
        const resumeLinks = document.querySelectorAll('.resume-link');
        resumeLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('resume_download', {
                    slide: this.getCurrentSlide(),
                    source: 'resume_link'
                });
            });
        });
    }
    
    trackLinkedInClicks() {
        const linkedinLinks = document.querySelectorAll('.linkedin-link a');
        linkedinLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('linkedin_click', {
                    slide: this.getCurrentSlide(),
                    source: 'header_link'
                });
            });
        });
    }
    
    trackEmailContacts() {
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('email_contact', {
                    slide: this.getCurrentSlide(),
                    source: 'contact_link'
                });
            });
        });
    }
    
    getCurrentSlide() {
        // Get current slide from URL hash or default to 1
        const hash = window.location.hash;
        const match = hash.match(/slide-(\d+)/);
        return match ? parseInt(match[1]) : 1;
    }
    
    trackEvent(event, data) {
        // Send to Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', event, data);
        }
        
        // Console log for development
        console.log('Analytics Event:', event, data);
    }
}

// Initialize analytics if needed
if (typeof window !== 'undefined') {
    window.analytics = new Analytics();
}
