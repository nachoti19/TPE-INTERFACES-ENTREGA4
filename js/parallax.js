
$(wrapper).scroll(function(){

    //UNA VEZ QUE EL SCROLL PASE LOS ELEMENTOS CON PARALLAX, DESCATIVA LA PROPIEDAD "PERSPECTIVE" DEL WRAPPER
    if ($(wrapper).scrollTop() > 2000) {
        wrapper.classList.remove("parallax");
    }

    //CUANDO EL SCROLL SUBA, LO VUELVE A ACTIVAR
    if ($(wrapper).scrollTop() < 2000) {
        wrapper.classList.add("parallax");
    }

});