let currentSlideIndex = 0;
const totalSlides = 18;

function showSlideshow() {
    console.log('Функция вызвана!');
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('slideshowScreen').classList.remove('hidden');
    showSlide(0);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
    document.getElementById('currentSlide').textContent = n + 1;
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    showSlide(currentSlideIndex);
}