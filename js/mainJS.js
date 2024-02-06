(function(){

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });


    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;
        
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');

    }

})();




(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions);

    titleQuestions.forEach(question => {
        question.addEventListener('click', () =>{
            let height = 0;

            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            question.children[0].classList.toggle('questions__arrow--rotate');
            addPadding.classList.toggle('questions__padding--add' );

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;  //obtener el alto minimo para que se muestre
            }

            answer.style.height = `${height}px`; //asignar la altura minima para poder mostrarse


            
        });
    });
})();