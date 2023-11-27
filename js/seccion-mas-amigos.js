const txt1 = document.querySelector(".txt-1");
const txt2 = document.querySelector(".txt-2");
const txt3 = document.querySelector(".txt-3");
const txt4 = document.querySelector(".txt-4");
const imagenColumnaIzq = document.querySelector(".imagen-columna-izq");

$(wrapper).scroll(function(){

    if ($(wrapper).scrollTop() > 4330) console.log($(wrapper).scrollTop());

    if ($(wrapper).scrollTop() < 4460) {
        imagenColumnaIzq.style.position="relative";
        imagenColumnaIzq.style.top="0px";
    }

    //PRIMER TEXTO
    if ($(wrapper).scrollTop() > 4460 && $(wrapper).scrollTop() < 4810) {
        //SE OCULTA EL SEGUNDO
        txt2.style.opacity="0";
        //SE MUESTRA EL PRIMERO
        txt1.style.opacity="1";
        //LA IMAGEN SE QUEDA FIJA EN LA PANTALLA
        imagenColumnaIzq.style.position="fixed";
        imagenColumnaIzq.style.top="200px";
        //CAMBIA DE IMAGEN
        imagenColumnaIzq.style.background='url("images/juego1.png")';
    }
    //SEGUNDO TEXTO
    if ($(wrapper).scrollTop() > 4730 && $(wrapper).scrollTop() < 5100) {
        //SE OCULTA EL PRIMERO
        txt1.style.opacity="0";
        //SE MUESTRA EL SEGUNDO
        txt2.style.opacity="1";
        //SE OCULTA EL TERCERO
        txt3.style.opacity="0";
        //CAMBIA DE IMAGEN
        imagenColumnaIzq.style.background='url("images/juego2.png")';
    }
    //TERCER TEXTO
    if ($(wrapper).scrollTop() > 5100 && $(wrapper).scrollTop() < 5510) {
        //SE OCULTA EL SEGUNDO
        txt2.style.opacity="0";
        //SE MUESTRA EL TERCERO
        txt3.style.opacity="1";
        //SE OCULTA EL CUARTO
        txt4.style.opacity="0";
        //CAMBIA DE IMAGEN
        imagenColumnaIzq.style.background='url("images/juego3.png")';
    }
    //CUARTO TEXTO
    if ($(wrapper).scrollTop() > 5510) {
        //SE OCULTA EL TERCERO
        txt3.style.opacity="0";
        //SE MUESTRA EL CUARTO
        txt4.style.opacity="1";
        //LA IMAGEN SE DEJA DE ESTAR FIJA EN LA PANTALLA
        imagenColumnaIzq.style.position="absolute";
        imagenColumnaIzq.style.bottom="0px";
        imagenColumnaIzq.style.top=null;
        //CAMBIA DE IMAGEN
        imagenColumnaIzq.style.background='url("images/juego4.png")';
    }
    if ($(wrapper).scrollTop() > 4460 && $(wrapper).scrollTop() < 5700) {
        //LA IMAGEN SE VUELVE A FIJAR EN LA PANTALLA
        imagenColumnaIzq.style.position="fixed";
        imagenColumnaIzq.style.top="175px";
    }

});