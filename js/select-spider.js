const fondo1 = document.querySelector('.fondo-selectG');
const fondo2 = document.querySelector('.fondo-selectP');
const fondo3 = document.querySelector('.fondo-selectM');

const pjGwen = document.querySelector('.pjGwen');
const pjPeter = document.querySelector('.pjPeter');
const pjMiles = document.querySelector('.pjMiles');
let UltimoFondo = document.querySelector('.fondo-selectP');

pjGwen.addEventListener('mouseover', (event) => {
    pjGwen.style.filter = "blur(0)";
    console.log('funca');
    console.log(fondo1);
    fondo2.style.display = "none";
    fondo1.style.display = "block";
    fondo3.style.display = "none";
    UltimoFondo = fondo1;
    pjPeter.style.filter = "blur(4px)";
    pjMiles.style.filter = "blur(4px)";
});

pjPeter.addEventListener('mouseover', (event) => {
    pjPeter.style.filter = "blur(0px)";
    console.log('funca');
    console.log(fondo1);
    UltimoFondo.style.display = "none";
    fondo1.style.display = "none";
    fondo2.style.display = "block";
    fondo3.style.display = "none";
    UltimoFondo = fondo2;
    pjGwen.style.filter = "blur(4px)";
    pjMiles.style.filter = "blur(4px)";
});

pjMiles.addEventListener('mouseover', (event) => {
    pjMiles.style.filter = "blur(0px)";
    console.log('funca');
    console.log(fondo1);
    UltimoFondo.style.display = "none";
    fondo1.style.display = "none";
    fondo2.style.display = "none";
    fondo3.style.display = "block";
    UltimoFondo = fondo3;
    pjPeter.style.filter = "blur(4px)";
    pjGwen.style.filter = "blur(4px)";
});