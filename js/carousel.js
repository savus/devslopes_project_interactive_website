console.log('connected');
const buttons = document.querySelectorAll('.slide-ctrl-container button');
const slides = document.querySelectorAll('.review-item');
console.log(slides);
console.log(buttons);

const current = Math.floor(Math.random() * slides.length);
const next = (current < slides.length - 1) ? current + 1 : 0;
const prev = (current - 1 < 0) ? slides.length - 1 : current - 1; 

console.log('current', current);
console.log('next', next);
console.log('prev', prev);


const dummySlides = [
//0
//1
//2
//3
];

for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click', () => (i === 0) ? console.log('Prev Clicked') : console.log('Next Clicked'));
}
