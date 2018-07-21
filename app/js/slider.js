
var delay = 500;
var currentSlide = 1;
var animationDelay = 3500;

var slider = document.querySelector('.slider');

slider.addEventListener('click', function(event) {
    if (!event.target.classList.contains('slider__icon')) return;

    currentSlide = parseInt(event.target.getAttribute('data-id'));
    showSliderId(currentSlide);

    var id = event.target.getAttribute('data-id');

    showSliderId(id);
});

initSlider();


function showSliderId(id) {
    var current = slider.querySelector('[data-slide="'+ id + '"]');

    slider.querySelectorAll('.slider__slide').forEach( function(slide) {
        slide.style.opacity = 0;
        setTimeout(function() {
            slide.classList.add('hide');
        },delay);
    }) ;

    setTimeout(function() {
        current.classList.remove('hide');
        current.style.opacity = 1;
    },delay)
};

function initSlider() {
    setInterval(function() {
        showSliderId(getSliderId());
    },animationDelay)
};

function getSliderId() {
    currentSlide++;
    currentSlide = currentSlide % 4 === 0 ? 1 : currentSlide;
    return currentSlide;
};
