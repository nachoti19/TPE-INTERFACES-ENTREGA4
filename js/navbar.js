$(document).ready(function(){

const navBar = document.querySelector(".nav");
const menuHamburguesa = document.querySelector(".menu-hamburguesa");

    let pos = 0;
    //LA VARIABLE "AUX" ES PARA EVITAR QUE LA BARRA SE AGRANDE Y SE ACHIQUE MULTIPLES VECES EN CIERTO PUNTO DE LA PANTALLA (ES UN "BUG" Y NO ENCONTRÉ COMO ARREGLARLO) 
    let aux = false;

    $(window).scroll(function(){

        //SI EL SCROLL ES MENOR A 50...
        if ($(this).scrollTop() < 50) {
            //LA BARRA VUELVE A SU POSICIÓN ORIGINAL (TOP 0PX)
            navBar.style.top=""+ 0 +"px";
            //Y SI TIENE LA CLASE "NAV ALTERNATIVA", SE LA SACA
            if (navBar.classList.contains('nav-alternativa')) {
                navBar.classList.remove('nav-alternativa');
            }
            aux = false;
        }

        //SI EL SCROLL ES MAYOR A 110 (CUANDO YA NO ES VISIBLE EL NAV) Y MENOR A 212 (CUANDO YA APARECIÓ POR COMPLETO)...
        if ($(this).scrollTop() > 110 && $(this).scrollTop() < 212 && aux == false) {
            //COMPRUEBA: SI TIENE LA CLASE "NAV-ALTERNATIVA", SE LA SACA PARA EVITAR ERRORES VISUALES
            if (navBar.classList.contains('nav-alternativa')) {
                navBar.classList.remove('nav-alternativa');
            }
            //LA VARIABLE "POS" SE VUELVE -110 (110 ES EL TAMAÑO APROXIMADO DEL NAV) + EL VALOR DE SCROLL, TODO MULTIPLICADO POR DOS
            pos = (-110 + $(this).scrollTop()) * 2;
            //Y SE LE AGREGA EL ESTILO "TOP: (POS)PX" AL NAV (PARA QUE HAGA EL EFECTO DE QUE ESTÁ BAJANDO JUNTO CON EL SCROLL)
            navBar.style.top=""+ pos +"px";
        }

        //SI EL SCROLL ES MAYOR A 212 (CUANDO YA APARECIÓ POR COMPLETO EL NAV)...
        if ($(this).scrollTop() > 212) {
            //SE LE AGREGA LA CLASE "NAV-ALTERNATIVA"
            navBar.classList.add('nav-alternativa');
            //Y QUEDA FIJA ARRIBA DEL TODO
            navBar.style.top=""+ 0 +"px";
            aux = true;
        }
    
    })

});