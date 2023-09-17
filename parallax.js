// JavaScript for parallax scrolling effect
window.addEventListener('scroll', function () {
    let scroll = window.scrollY;
    let parallax = document.querySelector('.parallax');
    parallax.style.transform = 'translateY(' + scroll * 0.5 + 'px)';
    
    // Add or remove the 'scrolled' class based on scrolling
    if (scroll > 100) { // Adjust the scroll threshold as needed
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});