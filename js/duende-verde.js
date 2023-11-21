const duende = document.querySelector(".duende");
let pos = -50;
ultimoScroll = $(this).scrollTop();

$(window).scroll(function(){
    
    //SI EL SCROLL ESTÁ ENTRE 310 y 2000...
    if ($(this).scrollTop() > 900 && $(this).scrollTop() < 1500) {
        
        //SI SE ESTÁ SCROLLEANDO PARA ABAJO...
        if (ultimoScroll < $(this).scrollTop()) {
            ultimoScroll = $(this).scrollTop();
            //LA POSICIÓN DE DUENDE VERDE SE VA RESTANDO LENTAMENTE
            pos += 3;
            duende.style.top=""+ pos +"px";
        }
        //SI SE ESTÁ SCROLLEANDO PARA ARRIBA...
        else {
            ultimoScroll = $(this).scrollTop();
            //LA POSICIÓN DE DUENDE VERDE SE VA SUMANDO LENTAMENTE
            pos -= 3;
            duende.style.top=""+ pos +"px";
        }
        

    }



});