document.addEventListener('DOMContentLoaded', function () {
    // --- Page Navigation ---
    const pageLinks = document.querySelectorAll('.page-link');
    const navLinks = document.querySelectorAll('header .nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    function showSection(targetId) {
        // Hide all sections and remove visible class
        contentSections.forEach(s => {
            s.classList.remove('active', 'visible');
        });
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            // Use a small timeout to allow the display property to change before starting the transition
            setTimeout(() => {
                targetSection.classList.add('visible');
            }, 50);
        }
        
        // Update navigation links active state
        navLinks.forEach(l => {
            l.classList.remove('active');
             if (l.dataset.target === targetId) {
                l.classList.add('active');
            }
        });

        window.scrollTo(0, 0);
    }

    pageLinks.forEach(link => link.addEventListener('click', e => {
        e.preventDefault();
        showSection(link.dataset.target);
    }));
    
    // Show the initial section with animation
    showSection('home');
});
