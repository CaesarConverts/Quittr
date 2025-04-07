// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize your application here
    console.log('Application initialized');
    
    // Example function for future use
    function init() {
        // Add your initialization code here
    }
    
    // Call the init function
    init();
});

// Example utility functions
function getElementBySelector(selector) {
    return document.querySelector(selector);
}

function getAllElementsBySelector(selector) {
    return document.querySelectorAll(selector);
} 