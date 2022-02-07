const contador = document.getElementById('contador')
const imagen = document.getElementById('imagen')

const reducir = document.getElementById('reducir')
const reset = document.getElementById('reset')
const aumentar = document.getElementById('aumentar')

const sumar = () => {

    let numero = Number(contador.textContent)
    contador.textContent = ++numero

    if (numero >= 1) {
        imagen.src = 'missFortuneArruinada.jpg'
    }

}

const restar = () => {

    let numero = Number(contador.textContent)
    contador.textContent = --numero

    if (numero < 0) {
        imagen.src = 'missFortuneGatillera.png'
    }

    if (numero === 0) {
        imagen.src = 'missFortune.jpg'
    }

}

const resetear = () => {

    let numero = Number(contador.textContent)
    contador.textContent = 0
    numero = 0

    if (numero === 0) {
        imagen.src = 'missFortune.jpg'
    }

}

aumentar.addEventListener('click', sumar)
reducir.addEventListener('click', restar)
reset.addEventListener('click', resetear)