const cuerpo = document.querySelector('body');
const parrafo = document.getElementById('parrafo');
const seccion = document.getElementById('seccion');
const titulo = document.getElementById('titulo');
const boton = document.querySelector('#boton');

boton.addEventListener('click', verificar);

function obtenerColor(){
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);
    const colorRgb = `rgb(${r},${g},${b})`;
    return colorRgb;   
};

function verificar(){
    nuevoColor=obtenerColor();
    cuerpo.style.backgroundColor=nuevoColor;
    parrafo.style.color=nuevoColor;
    seccion.style.backgroundColor=nuevoColor;
    titulo.style.color=nuevoColor;
}


