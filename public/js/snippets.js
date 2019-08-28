// gets button elements and assings a random empty query string to make use of the window history api.
const buttonLogic = () => {
    const buttonNext  = document.querySelector('.button--next');
    const buttonBack  = document.querySelector('.button--back');
    
    const randValue = Math.floor((Math.random() * 100) + 1);
    
    buttonNext.addEventListener('click', () =>{
        event.preventDefault();
        window.location.href = buttonNext.href = `?q=${randValue}`;
    });
    
    buttonBack.addEventListener('click', () =>{
        history.back();
    });
}

// looks for the facts container and image, if the windows width is <=360px, do some styling.
// if the factsContainer has a height greater than 200px, bring it back down to 195px
const marginCorrect = () =>{
    const factsContainer = document.querySelector('.facts--container');
    const imageResize = document.querySelector('.image--resize');
    if(window.screen.width <= 360){
        imageResize.setAttribute("style", "width: 320px;");
        factsContainer.setAttribute("style", "margin:0; height:190px");
    }
    if(factsContainer.clientHeight > 200){
        factsContainer.setAttribute("style", "height:195px");
    }
}
marginCorrect();
buttonLogic();