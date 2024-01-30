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