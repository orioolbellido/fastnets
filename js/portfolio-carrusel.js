// Carrusel para cada proyecto del portfolio
function setupPortfolioCarousel(trackSelector, prevBtnSelector, nextBtnSelector) {
    const track = document.querySelector(trackSelector);
    const images = track ? track.querySelectorAll('.carousel-img') : [];
    let currentIndex = 0;
    function updateCarousel() {
        if (track) {
            track.style.transform = `translateX(-${currentIndex * (images[0].offsetWidth + 16)}px)`;
        }
    }
    if (track && images.length > 0) {
        document.querySelector(prevBtnSelector).addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            updateCarousel();
        });
        document.querySelector(nextBtnSelector).addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        });
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }
}
// Inicializar carruseles de cada proyecto
window.addEventListener('DOMContentLoaded', function() {
    setupPortfolioCarousel('.project-card:nth-of-type(1) .carousel-track', '#prevBtn1', '#nextBtn1');
    setupPortfolioCarousel('.project-card:nth-of-type(2) .carousel-track', '#prevBtn2', '#nextBtn2');
    setupPortfolioCarousel('.project-card:nth-of-type(3) .carousel-track', '#prevBtn3', '#nextBtn3');
    setupPortfolioCarousel('.project-card:nth-of-type(4) .carousel-track', '#prevBtn4', '#nextBtn4');
    setupPortfolioCarousel('.project-card:nth-of-type(5) .carousel-track', '#prevBtn5', '#nextBtn5');
});
