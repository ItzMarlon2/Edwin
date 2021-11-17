const main= document.querySelector('#main');
const contenedor = document.querySelector('#contenedor_card')
const footer=document.querySelector('.pie')
const templateCarrito=document.getElementById('template-carrito').content
const contenedorPrecio=document.getElementById('Contenedor-precio')
const contenedor_table=document.querySelector('#contenedorTable')

const comprarBoton = document.querySelector('.comprar-boton')
comprarBoton.addEventListener('click', comprar)

const fragment = document.createDocumentFragment()

let productos=[
    {precio: 95000 , id: 1,  title: "Auriculares", img: "img/cascos.webp"},
    {precio: 70000, id: 2, title: "Mouse", img: "img/mouse.png"},
    { precio: 120000, id: 3, title: "Teclado",  img: "img/teclado.jpg"},
    {precio: 230000, id: 4, title: "Torre gaming", img: "img/pc.png"},
    {precio: 600000, id: 5, title: "Monitor", img: "img/monitor.png"},
    {precio: 350000, id: 6,  title: "Mando PS5",  img: "img/mando.png"}
]

main.addEventListener('click', e=>{
    addCarrito(e)
})

create_card();

function create_card(){
    productos.forEach(producto =>{
        const card=document.createElement('div');
        const card_icon=document.createElement('div');
        const card_info=document.createElement('div');
        const tittle_card=document.createElement('h2');
        const img_card=document.createElement('img');
        const p_card=document.createElement('p');
        const p_card_info=document.createElement('p')
        const btn_card=document.createElement('button');

        card.classList.add('card');
        card.setAttribute('id','card');
        card_icon.classList.add('icon');
        card_icon.setAttribute('id', 'icon');
        card_info.classList.add('info_card');
        card_info.setAttribute('id', 'info_card')
        tittle_card.setAttribute('id','titlle');
        tittle_card.textContent=producto.title;
        img_card.setAttribute('id', 'image')
        img_card.setAttribute('src', producto.img);
        p_card.classList.add('precio')
        p_card.setAttribute('id', 'parrafo')
        p_card.textContent=`${producto.precio}$`;
        p_card_info.setAttribute('id' ,'info_parrafo');
        p_card_info.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sed accusamus, nulla, blanditiis delectus doloribus sequi numquam eius cupiditate beatae quam ratione velit vero animi corrupti similique? Quos quis, animi repellendus magni obcaecati sint, officiis id eveniet velit, nostrum molestias similique at odit! Nobis saepe reiciendis eius minus illo ut!"
        btn_card.classList.add('btn-agregar')
        btn_card.setAttribute('id', 'btn')
        btn_card.dataset.id=producto.id
        btn_card.textContent="Agregar";

        card.appendChild(card_icon);
        card_icon.appendChild(img_card);
        card.appendChild(card_info);
        card_info.appendChild(tittle_card);
        card_info.appendChild(p_card_info)
        card_info.appendChild(p_card);
        card_info.appendChild(btn_card);
        contenedor.appendChild(card)
        main.appendChild(contenedor);
    })

}

const addCarrito = e=>{
    if(e.target.classList.contains('btn-agregar')){
        setCarrito(e)
    }
    e.stopPropagation()
}

function setCarrito(e){
    const button = e.target
    const item=button.closest('.card')
    
    const itemTitle = item.querySelector('h2').textContent
    const itemPrecio= item.querySelector('.precio').textContent
    const itemImg = item.querySelector('img').src
    const itemId= item.querySelector('button').dataset.id
    addItem(itemImg, itemPrecio, itemTitle, itemId)
}

function addItem(itemImg, itemPrecio, itemTitle, itemId){

    const elementoTitulo=footer.getElementsByClassName('titulo-td')
    for (let i = 0; i < elementoTitulo.length; i++) {
        
        if(elementoTitulo[i].innerText === itemTitle){
            let elementoCantidad=elementoTitulo[i].parentElement.querySelector('.cantidad')
            elementoCantidad.value++;
            actualizarPrecio()
            return
        }
        
    }

    const contenedor_table=document.createElement('div')
    contenedor_table.setAttribute('id', 'contenedorTable')
    templateCarrito.querySelector('img').src = itemImg
    templateCarrito.querySelector('span').textContent=itemPrecio
    templateCarrito.querySelectorAll('td')[2].textContent=itemTitle
    templateCarrito.querySelectorAll('td')[0].textContent=itemId

    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
    contenedor_table.appendChild(fragment)
    footer.appendChild(contenedor_table)

    contenedor_table.querySelector('.button-delete')
    .addEventListener('click',  eliminarItem)

    contenedor_table.querySelector('.cantidad')
    .addEventListener('change', cambiarCantidad)

    actualizarPrecio()
}

function actualizarPrecio(){
    let total=0;
    const contenedor_Precio=contenedorPrecio.querySelector('p')
    const contenedorTable= document.querySelectorAll('#contenedorTable')
    contenedorTable.forEach(contenedorTable =>{
        const precioTable=contenedorTable.querySelector('span')
        const valorPrecio = Number(precioTable.textContent.replace('$', ''))
        const cantidadTable=contenedorTable.querySelector('input')
        const valorCantidad=Number(cantidadTable.value)
        
        total = total + valorPrecio * valorCantidad

    })
    contenedor_Precio.innerHTML=`${total}$`
}

function eliminarItem(event){
    const button = event.target
    button.closest('#contenedorTable').remove()
    actualizarPrecio()
}

function cambiarCantidad(event){
    const input=event.target
    if(input.value <=0){
        input.closest('#contenedorTable').remove()
        actualizarPrecio()
    }
    actualizarPrecio()
}

function comprar(){
    footer.innerHTML=""
    actualizarPrecio()
}