$(document).ready(function(){

    const wrapper = document.querySelector(".wrapper");
    const navBar = document.querySelector(".nav");
    const tituloNav = document.querySelector(".titulo-nav");
    const tituloGrande = document.querySelector(".titulo");
    
    let pos = 0;
    //LA VARIABLE "AUX" ES PARA EVITAR QUE LA BARRA SE AGRANDE Y SE ACHIQUE MULTIPLES VECES EN CIERTO PUNTO DE LA PANTALLA (ES UN "BUG" Y NO ENCONTRÉ COMO ARREGLARLO) 
    let aux = false;

    $(wrapper).scroll(function(){

        //SI EL SCROLL ESTÁ ARRIBA DEL TODO...
        if ($(wrapper).scrollTop() == 0) {
            //SE OCULTA EL TÍTULO DEL NAV
            //LA BARRA VUELVE A SU POSICIÓN ORIGINAL (TOP 0PX)
            navBar.style.top=""+ 0 +"px";
            navBar.style.background="linear-gradient(180deg, #5499F8 0%, #5499F8 87.91%, rgba(84, 153, 248, 0) 100%)";
            //Y SI TIENE LA CLASE "NAV ALTERNATIVA", SE LA SACA
            if (navBar.classList.contains('nav-alternativa')) {
                navBar.classList.remove('nav-alternativa');
            }
            wrapper.style.paddingTop="116px";
            aux = false;
        }

        //SI EL SCROLL ES MENOR A 350 (CUANDO EL TÍTULO GRANDE TODAVÍA ES VISIBLE)
        if ($(wrapper).scrollTop() < 350) {

            if (tituloNav.style.opacity > 0) tituloNav.style.opacity=0;;

            let scale = 1 - $(wrapper).scrollTop()*0.001;
            //EL TÍTULO GRANDE SE VA HACIENDO MÁS CHICO
            tituloGrande.style.transform="translate(-50%, 0) translateZ(4px) scale(" + scale + ")";

            if (navBar.classList.contains("nav-alternativa")) {
                tituloNav.style.opacity="0";
            }

        }

        //SI EL SCROLL ES MAYOR A 130 (CUANDO YA NO ES VISIBLE EL NAV) Y MENOR A 600 (CUANDO YA APARECIÓ POR COMPLETO)...
        if ($(wrapper).scrollTop() > 130 && $(wrapper).scrollTop() < 600 && aux == false) {
            //EL TÍTULO EN EL NAV SE HACE VISIBLE
            tituloNav.style.opacity = "1";
            //COMPRUEBA: SI TIENE LA CLASE "NAV-ALTERNATIVA", SE LA SACA PARA EVITAR ERRORES VISUALES
            if (navBar.classList.contains('nav-alternativa')) navBar.classList.remove('nav-alternativa');
            navBar.style.background="#5499F8";
            //LA VARIABLE "POS" SE VUELVE -110 (110 ES EL TAMAÑO APROXIMADO DEL NAV) + EL VALOR DE SCROLL, TODO MULTIPLICADO POR DOS
            pos = (-110 + $(wrapper).scrollTop()) * 1.2;
            //Y SE LE AGREGA EL ESTILO "TOP: (POS)PX" AL NAV (PARA QUE HAGA EL EFECTO DE QUE ESTÁ BAJANDO JUNTO CON EL SCROLL)
            navBar.style.top=""+ pos +"px";
        }

        //SI EL SCROLL ES MAYOR A 600 (CUANDO YA APARECIÓ POR COMPLETO EL NAV)...
        if ($(wrapper).scrollTop() > 600) {
            tituloNav.style.opacity = "1";
            //EL FONDO SE VUELVE BLANCO
            wrapper.style.background="#ffffff";
            //SE LE AGREGA LA CLASE "NAV-ALTERNATIVA"
            navBar.classList.add('nav-alternativa');
            //Y QUEDA FIJA ARRIBA DEL TODO
            navBar.style.top="0px";
            wrapper.style.paddingTop="0px";
            aux = true;
        }

        //SI EL SCROLL ES MENOR A 600, EL FONDO VUELVE A SER EL ORIGINAL
        if ($(wrapper).scrollTop() < 600) 
        wrapper.style.background="linear-gradient(0deg, rgba(255,255,255,1) 86%, rgba(84,153,248,1) 86%)";
    
    })

});