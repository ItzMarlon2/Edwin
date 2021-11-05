const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const parrafo = document.getElementById('parrafo');
const boton = document.querySelector('#boton');
const nombreUsuario = document.getElementById('mostrar_nombre');
const texto = document.getElementById('texto');


const expresionRegular ={
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/
}

const campo={
    usuario: false
}

function validarFormulario (){
    if(expresionRegular.usuario.test(nombre.value)){
        document.getElementById('formulario_grupo').classList.remove('formulario_grupo-incorrecto')
        document.getElementById('formulario_grupo').classList.add('formulario_grupo-correcto')
        document.querySelector('#formulario_grupo #icono').classList.remove('fa-times-circle')
        document.querySelector('#formulario_grupo #icono').classList.add('fa-check-circle')
        document.querySelector('#formulario_grupo .parrafo').classList.remove('parrafo-activo')
        campo.usuario = true

    }else{
        document.getElementById('formulario_grupo').classList.add('formulario_grupo-incorrecto')
        document.getElementById('formulario_grupo').classList.remove('formulario_grupo-correcto')
        document.querySelector('#formulario_grupo #icono').classList.add('fa-times-circle')
        document.querySelector('#formulario_grupo #icono').classList.remove('fa-check-circle')
        document.querySelector('#formulario_grupo .parrafo').classList.add('parrafo-activo')
        document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo')
        campo.usuario = false
    }
}

nombre.addEventListener('keyup', validarFormulario)
nombre.addEventListener('blur', validarFormulario)

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const valorInput=nombre.value;
    if(campo.usuario){
        formulario.reset()
        setTimeout(()=>{
            document.getElementById('formulario').classList.add('formulario-enviado')
            document.querySelector('#formulario_grupo #icono').classList.remove('fa-check-circle')
            document.querySelector('#formulario_grupo .parrafo').classList.add('parrafo-enviado')
            document.querySelector('#formulario_grupo .formulario_lbl').classList.add('formulario_lbl-enviado')
            document.querySelector('#formulario_btn .formulario__btn').classList.add('formulario__btn-enviado')

        }, 1000)
        setTimeout(()=>{
            document.getElementById('section').classList.add('section-enviado')
            document.querySelector('#section .contenedor_nombre').classList.add('contenedor_nombre-enviado')
            document.querySelector('#section .mostrar_nombre').classList.add('mostrar_nombre-enviado')
            nombreUsuario.textContent=`${valorInput}`
            document.querySelector('#section .texto').classList.add('texto-enviado')
            texto.textContent=`BIENVENID@ AL SISTEMA        
                                SEÑOR@ ${valorInput}.`
            document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo')

        }, 1800)


    }else{
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo')
    }
})