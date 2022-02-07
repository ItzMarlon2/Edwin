const textarea = document.getElementById('textarea')
const mayusBoton = document.getElementById('boton_uno')
const minusBoton = document.getElementById('boton_dos')
const primerMayusBoton = document.getElementById('boton_tres')
const limpiarBoton = document.getElementById('boton_cuatro')

const mayusculas = () => {
    const valorText = textarea.value
    const texto = valorText.toUpperCase()
    textarea.value = texto
}

const minusculas = () => {
    const valorText = textarea.value
    const texto = valorText.toLowerCase()
    textarea.value = texto
}

const capitalizarPrimera = () => {
    const valorText = textarea.value
    // Forma 1: pone la primer letra de todo el texto en mayuscula
    // const texto = valorText.charAt(0).toUpperCase() + valorText.slice(1)
    
    // Forma 2: pone todas las primeras letras de cada palabra en mayuscula
    const texto = valorText.replace(/\b[a-z]/g,c => c.toUpperCase())
    textarea.value=texto
}

const limpiar = () => {
    textarea.value = ""
}

mayusBoton.addEventListener('click', mayusculas)
minusBoton.addEventListener('click', minusculas)
primerMayusBoton.addEventListener('click', capitalizarPrimera)
limpiarBoton.addEventListener('click', limpiar)
