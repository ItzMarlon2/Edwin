const numero1 = document.getElementById('number1');
const numero2 = document.getElementById('number2');
const suma = document.querySelector('#btn-sum');
const resta = document.querySelector('#btn-rest');
const multiplicacion = document.querySelector('#btn-mult');
const division = document.querySelector('#btn-div');
const resultado = document.getElementById('resultado');

suma.addEventListener('click', sumar);

function sumar(){
    let num1 = parseInt(numero1.value);
    let num2 = parseFloat(numero2.value);
    resultado.textContent = `${num1+num2}`;

}

resta.addEventListener('click', restar);
function restar(){
    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);
    resultado.textContent=`${num1-num2}`;
}

multiplicacion.addEventListener('click', multiplicar);
function multiplicar(){
    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);
    resultado.textContent=`${num1*num2}`;
}

division.addEventListener('click', dividir);
function dividir(){
    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);
    if(num2===0){
        alert('El número no se puede dividir por cero')
    }else{
        resultado.textContent=`${num1/num2}`;
    }
}

