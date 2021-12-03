const URL = 'https://dog.ceo/api/breeds/image/random'

const main = document.getElementById('main')
const templateCarrito = document.getElementById('templateCarrito').content
const boton1=document.querySelector('.boton1')
const boton2=document.querySelector('.boton2')
const boton3=document.querySelector('.boton3')
const boton4=document.querySelector('.boton4')
const fragment = document.createDocumentFragment()

const fetchApi = ()=>{
    fetch(URL)
    .then(res => res.json())
    .then(producto=>{
        main.innerHTML=""
        generarCard(producto.message)
    })
}

contador=0;

boton1.addEventListener('click', function(){
    contador=1
    generarCard()
})
boton2.addEventListener('click', function(){
    contador=3
    generarCard()
})
boton3.addEventListener('click', function(){
    contador=9
    generarCard()
})
boton4.addEventListener('click', function(){
    console.log("hola")
    contador=12
    generarCard()
})

function generarApi(){
    for (let i = 0; i < contador; i++) {
        fetchApi()
    }
}
const generarCard = (producto) =>{
        for (let i = 0; i < contador; i++) {
            templateCarrito.querySelector('.img-card').src=producto
            const clone = templateCarrito.cloneNode(true)
            fragment.appendChild(clone)
        }
            main.appendChild(fragment)
            console.log(main)
}


