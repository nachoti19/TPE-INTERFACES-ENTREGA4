$(document).ready(function(){
    //AGARRA LOS ELEMENTOS DE LA PANTALLA DE CARGA
    const container = document.querySelector(".pantalla-carga");
    const barra = document.querySelector(".barra-carga");
    const spiderman = document.querySelector(".animacion-spiderman");

    //SE MUEVEN LOS ELEMENTOS
    barra.style.width="1505px";
    spiderman.style.left="1620px";
    
    //Y DESPUÉS DE CINCO SEGUNDOS SE OCULTA TODA LA PANTALLA DE CARGA
    setInterval(ocultar, 5000);

    function ocultar() {
        container.style.display="none";
    }

});