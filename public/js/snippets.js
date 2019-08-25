const buttonNext  = document.querySelector('.button--next');
const buttonBack  = document.querySelector('.button--back');

const randValue = Math.floor((Math.random() * 1000) + 1);

buttonNext.addEventListener('click', () =>{
    event.preventDefault();
    window.location.href = buttonNext.href = `?q=${randValue}`;
});

buttonBack.addEventListener('click', () =>{
    history.back();
});