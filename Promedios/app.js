const casilla1 = document.getElementById('casilla1');
const casilla2 = document.getElementById('casilla2');
const resultado = document.getElementById('parrafo');
const calcular = document.querySelector('#boton');

calcular.addEventListener('click', operacion);

function operacion(){
    let num1 = parseFloat(casilla1.value);
    let num2 = parseFloat(casilla2.value);
    const notaMinima=3.5;
    let porcentaje1=num1*0.25;
    let porcentaje2=num2*0.35;
    let sumaPorcentajes=porcentaje1+porcentaje2;
    let resta=notaMinima-sumaPorcentajes;
    let final=resta/0.4;
    if(final<=5.0){
        resultado.textContent=`Debes sacar ${final.toFixed(1)} para ganar la materia...`;
    }
    else{
        resultado.textContent=`No hay manera de recuperar la materia`
    }
    if(final<0.0){
        resultado.textContent=`Sea cual sea el resultado ya ganaste la materia`
    }
    
    resultado.style.color="#2ecece";
}
