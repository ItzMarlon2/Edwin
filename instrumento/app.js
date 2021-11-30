const URL = 'https://dog.ceo/api/breeds/image/random'

const main = document.getElementById('main')
const templateCarrito = document.getElementById('templateCarrito').content
const boton=document.querySelectorAll('button')
console.log(boton)
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ()=>{
    fetchApi()
})


const fetchApi = ()=>{
    fetch(URL)
    .then(res => res.json())
    .then(producto=>{
        main.innerHTML=""
        generarCard(producto.message)
    })
}

boton.addEventListener('click', fetchApi)

const generarCard = producto =>{

        for (let i = 0; i < Number(boton.textContent); i++) {
            templateCarrito.querySelector('.img-card').src=producto
            const clone = templateCarrito.cloneNode(true)
            fragment.appendChild(clone)
            }
    main.appendChild(fragment)
}