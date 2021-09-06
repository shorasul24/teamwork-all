const elMain = document.querySelector('.main');
const elAsk__question__btn = document.querySelector('.ask__question__btn');

elAsk__question__btn.addEventListener('click', () => {
	elMain.classList.toggle('ask__question--open');
});
const elFaq__ask__question__box__btn = document.querySelector('.faq__ask__question__box__btn');

elFaq__ask__question__box__btn.addEventListener('click', () => {
	elMain.classList.remove('ask__question--open');
});
const elArrow__btn__one = document.querySelector('.arrow__btn__one');

elArrow__btn__one.addEventListener('click', () => {
	elMain.classList.toggle('btn--open--one');
});
const elArrow__btn__two = document.querySelector('.arrow__btn__two');

elArrow__btn__two.addEventListener('click', () => {
	elMain.classList.toggle('btn--open--two');
});
const elArrow__btn__three = document.querySelector('.arrow__btn__three');

elArrow__btn__three.addEventListener('click', () => {
	elMain.classList.toggle('btn--open--three');
});
const elArrow__btn__four = document.querySelector('.arrow__btn__four');

elArrow__btn__four.addEventListener('click', () => {
	elMain.classList.toggle('btn--open--four');
});
const elArrow__btn__five = document.querySelector('.arrow__btn__five');

elArrow__btn__five.addEventListener('click', () => {
	elMain.classList.toggle('btn--open--five');
});
const elArrow__btn__six = document.querySelector('.arrow__btn__six');

elArrow__btn__six.addEventListener('click', () => {
	elMain.classList.toggle('btn--open--six');
});