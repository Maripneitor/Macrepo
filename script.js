document.addEventListener('DOMContentLoaded', function() {
    // Menú desplegable
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Efecto fade-in para los textos
    const texts = document.querySelectorAll('.text');
    texts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-in');
        }, index * 500);
    });

    // Navegación al carrito
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }

    // Formularios de inicio de sesión y registro
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (showRegister && showLogin) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        });

        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    }
});