const URL = 'https://dog.ceo/api/breeds/image/random'

const main = document.getElementById('main')
const templateCarrito = document.getElementById('templateCarrito').content
const boton1=document.querySelector('.boton1')
const boton2=document.querySelector('.boton2')
const boton3=document.querySelector('.boton3')
const boton4=document.querySelector('.boton4')
const input = document.querySelector('input')


const fragment = document.createDocumentFragment()

const fetchApi = (contador)=>{
    for (let i = 0; i < contador; i++) {
        fetch(URL)
        .then(res => res.json())
        .then(producto=>{
            generarCard(producto.message)
        })
    }
    main.innerHTML=""
}

let contador=0;

boton1.addEventListener('click', function(){
    contador=1
    fetchApi(contador)
})
boton2.addEventListener('click', function(){
    contador=3
    fetchApi(contador)
})
boton3.addEventListener('click', function(){
    contador=9
    fetchApi(contador)
})
boton4.addEventListener('click', function(){
    contador=12
    fetchApi(contador)
})
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        contador=input.value;
        fetchApi(contador);
    }
})

const generarCard = (producto) =>{
        templateCarrito.querySelector('.img-card').src=producto
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
        main.appendChild(fragment)
}


