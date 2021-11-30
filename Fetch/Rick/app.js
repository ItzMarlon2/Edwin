const URL = 'https://rickandmortyapi.com/api/character/'

const main = document.getElementById('main')
const templateCarrito = document.getElementById('templateCarrito').content
const select = document.querySelector('.select')

const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', ()=>{
    fetchApi()
})

const fetchApi = ()=>{
    fetch(URL)
    .then(res => res.json())
    .then(producto=>{
        main.innerHTML=""
        const arreglo = producto.results
        seleccionarOpcion(arreglo)
    })
}

const seleccionarOpcion= arreglo=>{
    arreglo.forEach(data=>{
        const option= document.createElement('option')
        option.setAttribute('value', data.name)
        option.textContent=data.name
        fragment.appendChild(option)
    })
    select.appendChild(fragment)
    crearCard(arreglo)
    select.addEventListener('change', function (){
        crearCard(arreglo)
    })
        
}



const crearCard=arreglo=>{
    if(select.value=="todos"){
        main.innerHTML=""
            arreglo.forEach(arreglo =>{
            templateCarrito.querySelector('.titu-card').textContent=arreglo.name
            templateCarrito.querySelector('.img-card').src=arreglo.image
            templateCarrito.querySelector('.info-card').textContent=arreglo.gender
            const clone = templateCarrito.cloneNode(true)
            fragment.appendChild(clone)
            main.appendChild(fragment)
        })
    }else { 
        main.innerHTML=""
        const arreglo2 = arreglo.filter(arreglo => arreglo.name === select.value)
        templateCarrito.querySelector('.titu-card').textContent=arreglo2[0].name
        templateCarrito.querySelector('.img-card').src=arreglo2[0].image
        templateCarrito.querySelector('.info-card').textContent=arreglo2[0].gender
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
        main.appendChild(fragment)
    }
}