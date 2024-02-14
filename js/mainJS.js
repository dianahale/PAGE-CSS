(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

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

(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
})();


document.addEventListener('DOMContentLoaded', function() {
    const loginStatus = document.getElementById('loginStatus');

    // Verificar si existe la cookie con el JWT
    const jwtCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('nombreCookie='));

    if (jwtCookie) {
        // Si existe la cookie con el JWT, mostrar "Cerrar Sesión"
        const logoutLink = document.createElement('a');
        logoutLink.href = '#'; 
        logoutLink.textContent = 'Cerrar Sesión';
        logoutLink.classList.add('nav__links');
        loginStatus.appendChild(logoutLink);
    } else {
        // Si no existe la cookie con el JWT, mostrar "Iniciar Sesión"
        const loginLink = document.createElement('a');
        loginLink.href = 'login.html'; // Aquí debes colocar la URL para iniciar sesión
        loginLink.textContent = 'Iniciar Sesión';
        loginLink.classList.add('nav__links');
        loginStatus.appendChild(loginLink);
    }
});
