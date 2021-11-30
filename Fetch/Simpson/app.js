const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'

const main = document.getElementById('main')
const templateCarrito = document.getElementById('templateCarrito').content
const btn_card = document.querySelector('.btn-generar')

const fragment = document.createDocumentFragment()

const fetchApi = ()=>{
    fetch(URL)
    .then(res => res.json())
    .then(producto=>{
        main.innerHTML=""
        crearCard(producto)
    })
}

btn_card.addEventListener('click', fetchApi)



const crearCard = producto =>{
    producto.forEach(producto=>{
        templateCarrito.querySelector('.titu-card').textContent=producto[0].character
        templateCarrito.querySelector('.img-card').src=producto[0].image
        templateCarrito.querySelector('.info-card').textContent=producto[0].quote
    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
    })
    main.appendChild(fragment)
}


