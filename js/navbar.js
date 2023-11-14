$(document).ready(function(){

    const menuHamburguesa = document.querySelector(".menu-hamburguesa");

    $(window).scroll(function(){
        if ($(this).scrollTop() > 170) {
            $('nav').addClass('nav-alternativa');
            menuHamburguesa.addClass('.menu-hamburguesa-alternativo');
        }

        if ($(this).scrollTop() < 150) {
            $('nav').removeClass('nav-alternativa');
            menuHamburguesa.removeClass('.menu-hamburguesa-alternativo');
        }
    })

});