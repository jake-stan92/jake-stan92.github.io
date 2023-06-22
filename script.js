const slidesContainer = document.querySelector('.slidesContainer');
const prevBtn = document.querySelector('#slidePrev');
const nextBtn = document.querySelector('#slideNext');
const slide = document.querySelector('.slide');

const calendlyBooking1 = document.querySelector('.calendly-booking-1');
const contactBtn1 = document.querySelector('#contactBtn-1');
const closeCalendlyBtn1 = document.querySelector('#calendly-closeBtn-1');

const calendlyBooking2 = document.querySelector('.calendly-booking-2');
const contactBtn2 = document.querySelector('#contactBtn-2');
const closeCalendlyBtn2 = document.querySelector('#calendly-closeBtn-2');

contactBtn1.addEventListener('click', () => {
    calendlyBooking1.classList.add('active');
})

closeCalendlyBtn1.addEventListener('click', () => {
    calendlyBooking1.classList.remove('active');
})

contactBtn2.addEventListener('click', () => {
    calendlyBooking2.classList.add('active');
})

closeCalendlyBtn2.addEventListener('click', () => {
    calendlyBooking2.classList.remove('active');
})

nextBtn.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevBtn.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

