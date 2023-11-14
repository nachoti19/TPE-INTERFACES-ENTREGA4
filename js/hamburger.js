const btnHamburguesa = document.querySelector(".btn-hamburguesa");
const menuHamburguesa = document.querySelector(".menu-hamburguesa");

const linea1 = document.querySelector(".linea-1");
const linea2 = document.querySelector(".linea-2");
const linea3 = document.querySelector(".linea-3");

const link1 =  document.querySelector(".link-1");
const link2 =  document.querySelector(".link-2");
const link3 =  document.querySelector(".link-3");
const link4 =  document.querySelector(".link-4");
const link5 =  document.querySelector(".link-5");
const link6 =  document.querySelector(".link-6");

let arregloLinks = [link1, link2, link3, link4, link5, link6];

btnHamburguesa.addEventListener("click", desplegarMenu);

function desplegarMenu() {
    animacionBoton();

    //SI EL MENÚ ES INVISIBLE, LO MUESTRA
    if (menuHamburguesa.classList.contains("ocultar-menu")) {
        menuHamburguesa.classList.add("mostrar-menu");
        menuHamburguesa.classList.remove("ocultar-menu");
        mostrarLinks();
    }
    //SI EL MENÚ YA ES VISIBLE, LO OCULTA
    else {
        menuHamburguesa.classList.add("ocultar-menu");
        menuHamburguesa.classList.remove("mostrar-menu");
        mostrarLinks();
    }

}

function animacionBoton() {
    linea1.classList.toggle("active-linea-1");
    linea2.classList.toggle("active-linea-2");
    linea3.classList.toggle("active-linea-3");
}

function mostrarLinks() {
    let temporizador;
    //SI EL MENÚ HAMBURGUESA ES VISIBLE, MUESTRA LOS LINKS DE A UNO
    if (menuHamburguesa.classList.contains("mostrar-menu")) {
        for (let i = 0; i < arregloLinks.length; i++) {
            temporizador = setTimeout(() => {
                arregloLinks[i].classList.remove("ocultar");
                arregloLinks[i].classList.add("mostrar");
            }, i * 200);
        }
    }
    //SI NO ES VISIBLE, LOS OCULTA
    else {
        clearTimeout(temporizador);
        for (let i = 0; i < arregloLinks.length; i++) {
            arregloLinks[i].classList.remove("mostrar");
            arregloLinks[i].classList.add("ocultar");
        }
    }
    
    
}