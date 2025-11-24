document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    // FAQ Accordion
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', () => {
            // Close other open items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Parallax Effect for Background Blob
    const blob = document.querySelector('.background-effect');
    if (blob) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            // Move the blob slightly slower than scroll and add a subtle rotation
            blob.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * 0.02}deg)`;
        });
    }
});
