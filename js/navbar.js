$(document).ready(function(){

    const navBar = document.querySelector(".nav");
    const menuHamburguesa = document.querySelector(".menu-hamburguesa");
    const portada = document.querySelector(".portada");
    const main = document.querySelector(".main");

    let pos = 0;
    //LA VARIABLE "AUX" ES PARA EVITAR QUE LA BARRA SE AGRANDE Y SE ACHIQUE MULTIPLES VECES EN CIERTO PUNTO DE LA PANTALLA (ES UN "BUG" Y NO ENCONTRÉ COMO ARREGLARLO) 
    let aux = false;

    $(window).scroll(function(){

        //SI EL SCROLL ESTÁ ARRIBA DEL TODO...
        if ($(this).scrollTop() == 0) {
            //LA BARRA VUELVE A SU POSICIÓN ORIGINAL (TOP 0PX)
            navBar.style.top=""+ 0 +"px";
            navBar.style.background="linear-gradient(180deg, #5499F8 0%, #5499F8 87.91%, rgba(84, 153, 248, 0) 100%)";
            //Y SI TIENE LA CLASE "NAV ALTERNATIVA", SE LA SACA
            if (navBar.classList.contains('nav-alternativa')) {
                navBar.classList.remove('nav-alternativa');
            }
            main.style.paddingTop="116px";
            aux = false;
        }

        //SI EL SCROLL ES MAYOR A 130 (CUANDO YA NO ES VISIBLE EL NAV) Y MENOR A 600 (CUANDO YA APARECIÓ POR COMPLETO)...
        if ($(this).scrollTop() > 130 && $(this).scrollTop() < 600 && aux == false) {
            //COMPRUEBA: SI TIENE LA CLASE "NAV-ALTERNATIVA", SE LA SACA PARA EVITAR ERRORES VISUALES
            if (navBar.classList.contains('nav-alternativa')) navBar.classList.remove('nav-alternativa');
            navBar.style.background="#5499F8";
            //LA VARIABLE "POS" SE VUELVE -110 (110 ES EL TAMAÑO APROXIMADO DEL NAV) + EL VALOR DE SCROLL, TODO MULTIPLICADO POR DOS
            pos = (-110 + $(this).scrollTop()) * 1.2;
            //Y SE LE AGREGA EL ESTILO "TOP: (POS)PX" AL NAV (PARA QUE HAGA EL EFECTO DE QUE ESTÁ BAJANDO JUNTO CON EL SCROLL)
            navBar.style.top=""+ pos +"px";
        }

        //SI EL SCROLL ES MAYOR A 600 (CUANDO YA APARECIÓ POR COMPLETO EL NAV)...
        if ($(this).scrollTop() > 600) {
            //SE LE AGREGA LA CLASE "NAV-ALTERNATIVA"
            navBar.classList.add('nav-alternativa');
            //Y QUEDA FIJA ARRIBA DEL TODO
            navBar.style.top="0px";
            main.style.paddingTop="0px";
            aux = true;
        }
    
    })

});