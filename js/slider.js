let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Función para mostrar el slide actual
function showSlide(slideIndex) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Función para iniciar el slider automático
function startSlider() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides; // Cambia al siguiente slide
        showSlide(currentSlide);
    }, 4000); // Cambia cada 4 segundos
}

window.onload = startSlider; // Inicia el slider al cargar la página
