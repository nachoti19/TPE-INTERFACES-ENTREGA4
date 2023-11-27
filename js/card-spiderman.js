//TOMO LAS "PIEZAS" NECESARIAS DEL HTML
/* const wrapper = document.querySelector('.wrapper'); */
const peter = document.querySelector('.peter');
const gwen = document.querySelector('.gwen');
const miles = document.querySelector('.miles');
const contenedor = document.querySelector('.personajes');
//ACA GUARDO LA POSICION EN LA QUE DEBE EMPEZAR LA ANIMACION
let ultimoScroll = 0;

//me da la posicion del scroll UWU
$(wrapper).scroll(function(){
    //SI LA POSICION DEL SCROLL ES MAYOR A LA POSICION DONDE QUIERO
    //QUE EMPIECE LA ANIMACION
    if($(wrapper).scrollTop() > 1415){
        //GUARDO ESA POSICION EN LA VARIABLE
        ultimoScroll = $(wrapper).scrollTop();
        esPosicion();
    }
});

function esPosicion(){
    //SI LA POSICION DEL SCROLL ES IGUAL A LA GUARDADA DE LA VARIABLE
    if($(wrapper).scrollTop() == ultimoScroll){
        //HACE LA ANIMACION
        contenedor.style.opacity = "1";

        peter.style.animation = "fadeIn 3s";
        setTimeout(function(){
            peter.style.top = "0px";
            gwen.style.top = "0px";
            miles.style.top = "0px";
        }, 200);
        //peter.style.transition ="all 0.5s ease-in-out";
        miles.style.animation = "fadeIn 5s";
        gwen.style.animation = "fadeIn 7s";
    }
}