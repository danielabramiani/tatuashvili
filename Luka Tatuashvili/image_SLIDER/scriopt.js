const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;
function createDots(){
    for(let i = 0; i < slideCount; i++){
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlidedPosition();
        });
    }
}
function updateSlidedPosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();

}
function updateDots(){
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidedPosition();
});
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidedPosition();
});


function autoPlay() {
    setInterval (() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidedPosition();
    }, 3000);
}

createDots();
autoPlay();