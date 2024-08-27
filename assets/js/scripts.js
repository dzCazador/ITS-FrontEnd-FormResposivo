// Crea la media query y añade el listener
const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('change', handleViewportChange);
const showLoginBtn = document.getElementById('show-login');
const showRegisterBtn = document.getElementById('show-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');


function handleViewportChange(e) {
    const loginForm = document.getElementById('login-form');
    
    if (e.matches) {
        // Mueve el formulario 100px hacia arriba
        loginForm.style.transform = 'translateY(200px) translateX(0)';
        registerForm.style.transform = 'translateY(-150px) translateX(0)';
    } else {
        // Restablece la transformación a su valor original
        loginForm.style.transform = 'translateY(0) translateX(0)';
        registerForm.style.transform = 'translateY(0px) translateX(0)';
    }
}



// Ejecuta la función inicialmente
handleViewportChange(mediaQuery);

    // Mostrar el formulario de login y ocultar el de registro
   function selectLoginForm(){
        // Mueve el formulario de registro a la derecha
        registerForm.style.transform = (window.matchMedia("(max-width: 768px)").matches?'translateY(50%)':'translateX(100%)');
        // Espera a que la transición termine antes de hacer visible el formulario de login
        setTimeout(() => {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            loginForm.classList.remove('hidden');
            loginForm.style.transform = (window.matchMedia("(max-width: 768px)").matches?'translateY(50%)':'translateX(100%)');
        }, 2000); // Tiempo de la transición*/
    }


    // Mostrar el formulario de registro y ocultar el de login
 function selectRegisterForm() {
        // Mueve el formulario de login a la derecha
        loginForm.style.transform = (window.matchMedia("(max-width: 768px)").matches?'translateY(-60%)':'translateY(-10%)');
        // Espera a que la transición termine antes de hacer visible el formulario de registro
        setTimeout(() => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            registerForm.classList.remove('hidden');
            registerForm.style.transform = (window.matchMedia("(max-width: 768px)").matches?'translateY(-60%)':'translateY(-10%)');
        }, 2000); // Tiempo de la transición*/
}

//funcion imprimir texto en pantalla


