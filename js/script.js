// FAQ Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    let lastScrollTop = 0;
    let isScrollingDown = false;
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggleBtn = this.querySelector('.toggle-btn');
            const faqContainer = this.parentElement;
            
            // Toggle the content visibility and animation classes
            content.classList.toggle('active');
            toggleBtn.classList.toggle('active');
            faqContainer.classList.toggle('active');
            
            // Update the button text
            toggleBtn.textContent = content.classList.contains('active') ? '−' : '+';
        });
    });

    // Scroll-based animation for container-1 elements
    const container1Heading = document.querySelector('.container-1 h1');
    const container1Text = document.querySelector('.container-1 .typing-text');
    const container1StoreLinks = document.querySelector('.container-1 .store-links');
    
    function checkContainer1Scroll() {
        if (container1Heading && container1Text && container1StoreLinks) {
            const container1 = document.querySelector('.container-1');
            const containerTop = container1.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If the container is in the viewport
            if (containerTop < windowHeight * 0.8) {
                container1Heading.classList.add('visible');
                
                // Add visible class to typing text after 1 second delay
                setTimeout(() => {
                    container1Text.classList.add('visible');
                    
                    // Add visible class to store links after typing animation completes
                    setTimeout(() => {
                        container1StoreLinks.classList.add('visible');
                    }, 1000); // 1s delay to match typing animation duration
                }, 200); // 1s initial delay
            }
        }
    }

    // Scroll-based animation for container-3 elements
    const container3Image = document.querySelector('.container-3 img');
    const container3Paragraph = document.querySelector('.container-3 p');
    const container6Heading = document.querySelector('.container-6 h1');
    const container2Images = document.querySelectorAll('.container-2 img');
    const container4Heading = document.querySelector('.container-4 h1');
    const container4Faqs = document.querySelectorAll('.faq-1, .faq-2, .faq-3, .faq-4');
    
    function checkScrollDirection() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        isScrollingDown = currentScrollTop > lastScrollTop;
        lastScrollTop = currentScrollTop;
    }

    function checkContainer3Scroll() {
        if (container3Image && container3Paragraph) {
            const container3 = document.querySelector('.container-3');
            const containerTop = container3.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If the container is in the viewport and scrolling down
            if (containerTop < windowHeight * 0.8 && isScrollingDown) {
                container3Image.classList.add('visible');
                container3Paragraph.classList.add('visible');
            }
        }

        // Check container-6 heading
        if (container6Heading) {
            const container6 = document.querySelector('.container-6');
            const containerTop = container6.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (containerTop < windowHeight * 0.8 && isScrollingDown) {
                container6Heading.classList.add('visible');
            }
        }

        // Check container-2 images
        if (container2Images.length > 0) {
            const container2 = document.querySelector('.container-2');
            const containerTop = container2.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (containerTop < windowHeight * 0.8 && isScrollingDown) {
                container2Images.forEach((img, index) => {
                    setTimeout(() => {
                        img.classList.add('visible');
                    }, index * 200); // 200ms delay between each image
                });
            }
        }

        // Check container-4 elements
        if (container4Heading) {
            const container4 = document.querySelector('.container-4');
            const containerTop = container4.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (containerTop < windowHeight * 0.8 && isScrollingDown) {
                // Animate heading first
                container4Heading.classList.add('visible');
                
                // Animate FAQs with delay
                container4Faqs.forEach((faq, index) => {
                    setTimeout(() => {
                        faq.classList.add('visible');
                    }, (index + 1) * 350); // 350ms delay between each FAQ
                });
            }
        }
    }

    // Check on scroll and initial load
    window.addEventListener('scroll', () => {
        checkScrollDirection();
        checkContainer3Scroll();
    });
    
    checkContainer1Scroll();
    checkContainer3Scroll();
});

console.log('script.js loaded');
