//PRIMER PASO: Se almacenan en variables los contenedores y los 
//templates que vayamos a utilizar
const main= document.querySelector('#main');
const contenedor = document.querySelector('#contenedor_card')
const footer=document.querySelector('.pie')
const templateCarrito=document.getElementById('template-carrito').content //El content se utiliza para acceder a las etiquetas dentro del template
const contenedorPrecio=document.getElementById('Contenedor-precio')
const contenedor_table=document.querySelector('#contenedorTable')

//DECIMO PASO:
const comprarBoton = document.querySelector('.comprar-boton')//Aqui guardamos en una variable l clase del botón
comprarBoton.addEventListener('click', comprar)//Y le añadimos un evento de tipo click, creamos la función
//Nos vamos a la función creada
const fragment = document.createDocumentFragment()

//SEGUNDO PASO: Se crea el arreglo de objetos con datos quemados
let productos=[
    {precio: 95000 , id: 1,  title: "Auriculares", img: "img/cascos.webp"},
    {precio: 70000, id: 2, title: "Mouse", img: "img/mouse.png"},
    { precio: 120000, id: 3, title: "Teclado",  img: "img/teclado.jpg"},
    {precio: 230000, id: 4, title: "Torre gaming", img: "img/pc.png"},
    {precio: 600000, id: 5, title: "Monitor", img: "img/monitor.png"},
    {precio: 350000, id: 6,  title: "Mando PS5",  img: "img/mando.png"}
]

//CUARTO PASO: Se le añade el evento al contenedor padre de las cards para posteriormente capturar los botones con el evento click
main.addEventListener('click', e=>{
    addCarrito(e)// e sirve para capturar el elemento que queremos modificar
})

create_card();//se llama a la función

//TERCER PASO: Crear la función de la estructura de la card por medio de "createElement" 
//DENTRO DEL FOREACHDEL ARREGLO ya que necesitamos los datos del arreglo 
//para añadirlos a nuestras cards
function create_card(){
    productos.forEach(producto =>{
        //console.log(producto) primer console que muestra los elementos del arreglo
        //Se saca por fuera del foreach los elementos creados para demostrar que solamente se crea un elemento
        const card=document.createElement('div');
        const card_icon=document.createElement('div');
        const card_info=document.createElement('div');
        const tittle_card=document.createElement('h2');
        const img_card=document.createElement('img');
        const p_card=document.createElement('p');
        const p_card_info=document.createElement('p')
        const btn_card=document.createElement('button');

        //Se le agregan los atributos y clases a las etiquetas
        card.classList.add('card');
        card.setAttribute('id','card');
        card_icon.classList.add('icon');
        card_icon.setAttribute('id', 'icon');
        card_info.classList.add('info_card');
        card_info.setAttribute('id', 'info_card')
        tittle_card.setAttribute('id','titlle');
        tittle_card.textContent=producto.title; //Accedemos al identificador del arreglo y por medio de este a su llave para obtener el título
        img_card.setAttribute('id', 'image')
        img_card.setAttribute('src', producto.img);
        p_card.classList.add('precio')
        p_card.setAttribute('id', 'parrafo')
        p_card.textContent=`${producto.precio}`;
        p_card_info.setAttribute('id' ,'info_parrafo');
        p_card_info.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sed accusamus, nulla, blanditiis delectus doloribus sequi numquam eius cupiditate beatae quam ratione velit vero animi corrupti similique? Quos quis, animi repellendus magni obcaecati sint, officiis id eveniet velit, nostrum molestias similique at odit! Nobis saepe reiciendis eius minus illo ut!"
        btn_card.classList.add('btn-agregar')
        btn_card.setAttribute('id', 'btn')
        btn_card.dataset.id=producto.id //El dataset funciona en este caso, para agregarle a cada boton un data-id de cada card (ponerlo a prueba desde el inspeccionar)
        btn_card.textContent="Agregar";

        //Añadimos la estructura
        card.appendChild(card_icon);
        card_icon.appendChild(img_card);
        card.appendChild(card_info);
        card_info.appendChild(tittle_card);
        card_info.appendChild(p_card_info)
        card_info.appendChild(p_card);
        card_info.appendChild(btn_card);
        fragment.appendChild(card)
    })
        contenedor.appendChild(fragment)
        main.appendChild(contenedor);

}

const addCarrito = e=>{
    //console.log(e.target) segundo console.log aqui se demuestra como capturar un botón con solo un evento
    //console.log(e.target.classList.contains('btn-agregar')) tercer console.log aqui nos preguntan si si el elemento que le estamos haciendo click
    //contiene la clase del botón, si le damos click al botón nos arroja true, de lo contrario false
    if(e.target.classList.contains('btn-agregar')){
        setCarrito(e)
    }
    e.stopPropagation() //Este método de la interfaz Event evita la propagación adicional del evento actual en las fases de captura
    //en resumen ese méodo evita que el evento se propage, permitiendonos ejecutarlo solamente en el botón
}

//QUINTO PASO: 
function setCarrito(e){
    const button = e.target 
    //console.log(button) cuarto console que muestra la estructura de cada botón
    const item=button.closest('.card')// Utilizamos closest para dirigirnos al elemento más cercano que en este caso es el padre de la card ya que queremos capturar loselementos de la card donde se preciona el botón
    //console.log(item) quinto console que muestra el contenedor padre con sus elementos cuando le damos click al botón

    //DESGLOZANDO LOS ELEMENTOS PARA UTILIZARLOS POR SEPARADO
    const itemTitle = item.querySelector('h2').textContent //LO QUE ESTAMOS HACIENDO ES QUE POR MEDIO DEL CONTENEDOR PADRE ACCEDER AL CONTENIDO DEL ELEMENTO QUE NECESITAMOS, EN ESTE CASO EL TÍTULO
    //console.log(itemTitle) sexto console que muestra el contenido del titulo almacenandolo en una variable para despues utilizarla
    const itemPrecio= item.querySelector('.precio').textContent
    //console.log(itemPrecio) septimo console
    const itemImg = item.querySelector('img').src
    //console.log(itemImg) octavo console
    const itemId= item.querySelector('button').dataset.id
    //console.log(itemId) noveno console
    addItem(itemImg, itemPrecio, itemTitle, itemId) //Se crea la función y se le pasa por parámetros las variables creadas
}

//SEXTO PASO:
function addItem(itemImg, itemPrecio, itemTitle, itemId){//Recibimos los parametros
    //console.log(itemImg, itemPrecio, itemTitle, itemId) //decimo console Se muestra el contenido de cada card

    //Esto va después
    //AQUI
    //DÉCIMO PASO
    const elementoTitulo=footer.getElementsByClassName('titulo-td') //Aqui capturamos en una variable por medio del contenedor footer que coja todas las clases que hay que tengan en su interior el titulo
    //console.log(elementoTitulo) 19 console
    for (let i = 0; i < elementoTitulo.length; i++) { //En un for vamos a recorrer cada titulo que obtuvimos anteriormente
        //AQUI VALIDAMOS QUE SI EL TITUTLO QUE RECORREMOS ES IGUAL AL QUE OBTENEMOS DEL ITEMTITLE
        if(elementoTitulo[i].innerText === itemTitle){
            //console.log(elementoTitulo[i].innerText) 20 console
            let elementoCantidad=elementoTitulo[i].parentElement.querySelector('.cantidad')//El parentElement es como un ../ en el cmd hacemos eso para poder obtener el input de la cantidad
            //console.log(elementoCantidad) 21 console

            //Y POR ÚLTIMO LE DECIMOS QUE EL VALOR DEL INPUT QUE INICIALMENTE ESTABA EN CERO, LO AUMENTE
            elementoCantidad.value++;
            //Nuevamente actualizamos el total
            actualizarPrecio()
            //aqui la cantidad se aumenta, pero los productos se repiten porque el código se sigue ejecutando, lo que hay que hacer es un return
            //Entonces cuando termine de añadir el valor, devuelva con un return, esto hará que salga de la función y no permita agregar otro elemento a la tabla
            return
        }
        
    }

    //DE AQUI NOS VAMOS AL INICIO AL BOTÓN COMPRAR

    //Sigue aqui
    const contenedor_table=document.createElement('div')//Se crea el elemento padre donde se pondrán los elementos
    contenedor_table.setAttribute('id', 'contenedorTable')
    //nos vamos al html y creamos con la etiqueta template nuestra tabla donde se va a mostrar los productos
    //luego llamamos al template
    //Y seleccionamos por medio del template los elementos que queremos modificar
    templateCarrito.querySelector('img').src = itemImg //Se agrega a cada elemento de la tabla los item que recibimos por parámetro, los cuales tienen el contenido de l imagen, precio, etc.
    templateCarrito.querySelector('span').textContent=itemPrecio
    templateCarrito.querySelectorAll('td')[2].textContent=itemTitle
    templateCarrito.querySelectorAll('td')[0].textContent=itemId

    const clone = templateCarrito.cloneNode(true)//Luego se clona el template ya que es único
    //CREAMOS NUESTRO FRAGMENT
    fragment.appendChild(clone)//En el fragment almacenamos el clon del template
    contenedor_table.appendChild(fragment)//En nuestro div que creamos almacenamos el fragment que contiene el clon del template
    footer.appendChild(contenedor_table)//Y por último al footer, que es nuestro contenedor padre, le añadimos el div que contiene todo

    //PROBAR QUE SE MUESTREN LOS PRODUCTOS EN LA TABLA

    //Esto va despues
    //AQUI
    contenedor_table.querySelector('.button-delete')
    .addEventListener('click',  eliminarItem) //Aqui lo que estamos haciendo es que de corrido nos capture el botón y le añada un evento y lo envíe a una función
    //nos vamos a la funcion creada

    //AQUI 2
    contenedor_table.querySelector('.cantidad')//Aqui almacenamos en una variable el input y a su vez le añadimos un evento tipo change, cada vez que cambie y creamos la función
    .addEventListener('change', cambiarCantidad)
    //Nos vamos a la función creada

    //sigue
    actualizarPrecio()//Cremos la función donde se actualizara el valor total
}

//SEPTIMO PASO:
function actualizarPrecio(){
    let total=0;//variable que inicia en cero que se va a ir actualizando y mostrando en el valor total de la tabla

    //Llamamos al contenedor del valor total
    const contenedor_Precio=contenedorPrecio.querySelector('p')//almacenamos en una variable el parrafo del valor total
    //console.log(contenedor_Precio) 11 console donde se muestra el parrafo del valor total
    const contenedorTable= document.querySelectorAll('#contenedorTable')//Aqui capturamos a todas las clases que tenga el id del div que creamos arriba
   // console.log(contenedorTable) 12 console se muestran los elementos en la lista
    contenedorTable.forEach(contenedorTable =>{// aqui recorremos la lista anterior por cada elemento

        //COMO NECESITAMOS HACER OPERACIONES VAMOS A UTILIZAR DOS VARIABLES PARA ALMACENAR EL ELEMENTO ENTERO Y LUEGO EL CONTENIDO DE ESE ELEMENTO

        const precioTable=contenedorTable.querySelector('span')//Almacenamos en una variable por medio del contenedor div la etiqueta span
        //console.log(precioTable) 12 console

        //Aqui sacaremos solamente el texto y lo cambiaremos a tipo nuber para poder hacer operaciones con el
        //El metodo replace sirve seleccionando el elemento que queremos reemplazar y luego el contenido por el que lo queremos reemplazar, (reemplazamos el signo de peso ya que solo queremos el número)
        const valorPrecio = Number(precioTable.textContent.replace('$', '')) //En una variable almacenamos el textContent del span que capturamos, luego se parsea con la clase Number y por ultimo se reemplaza el signo de dólar
        //console.log(valorPrecio) 13 console

        //Repetimos el mismo paso para sacar el contenido de la cantidad que está dentro de un input
        const cantidadTable=contenedorTable.querySelector('input')//Aqui almacenamos en una variable la etiqueta input
        //console.log(cantidadTable) 14 console
        const valorCantidad=Number(cantidadTable.value)//Aqui capturamos su valor, que por defecto en el html es 1 y lo parseamos a entero
        //console.log(valorCantidad) 15 console
        //console.log(typeof valorCantidad) 16 console para mostrar el tipo de dato
        total = total + valorPrecio * valorCantidad //Por último dentro del foreach le decimos a la variable total que arranca en cero que sume la multiplicacion entre el precio y la cantidad
        //console.log(total) 16 console muestra el valor total
    })

    //AHORA LO QUE FALTA ES AGREGAR EL TOTAL AL CONTENEDOR

    contenedor_Precio.innerHTML=`${total}$` //Aqui añadimos con el innerHTML la variable total
}

//AQUI NOS VAMOS A LA FUNCIÓN ADDCARRITO PARA CAPTURAR EL BOTÓN ELIMINAR


//OCTAVO PASO:
function eliminarItem(event){ //Creamos la función y le pasamos el evento
    const button = event.target //capturamos la información del botón con .target
    //console.log(button) 17 console
    button.closest('#contenedorTable').remove()//AHORA LO QUE ESTOS HACIENDO ES QUE POR MEDIO DEL BOTÓN ACCEDEMOS AL ELEMENTO MÁS CERCANO, OSEA AL CONTENEDOR DE LA TABLA Y LA ELIMINAMOS
    //AQUI SE BORRAN, PERO EL TOTAL NO LO ACTUALIZA, POR LO QUE TENEMOS QUE LLAMAR NUEVAMENTE A LA FUNCIÓN DE ACTUALIZAR TOTAL
    actualizarPrecio()
}

//aqui nos vamos nuevamente a la función addcard y obtenemos el inpu de la cantidad

//NOVENO PASO:
function cambiarCantidad(event){//Le pasamos nuevamente el evento
    const input=event.target //Capturamos la información del input por medio del event.target
    //console.log(input) 18 console
    if(input.value <=0){ //Ahora validamos si la cantidad es menor que cero por medio del valor del input
        input.closest('#contenedorTable').remove()//Si el valor del input es menor o igual a cero, su contenedor padre se eliminará
            //AQUI SE BORRAN, PERO EL TOTAL NO LO ACTUALIZA, POR LO QUE TENEMOS QUE LLAMAR NUEVAMENTE A LA FUNCIÓN DE ACTUALIZAR TOTAL
        actualizarPrecio()
    }
    //OTRA FORMA DE AHCERLO CON CODIGO TERNARIO
    //input.value <= 0 ? (input.value = 1) : null
    actualizarPrecio() //Aqui se actualiza la cantidad cada que el input cambie su valor
}

//DE AQUI NOS VAMOS A ADDCARD PARA QUE EL PRODUCTO NO SE DUPLIQUE SI NO QUE SE AGREGUE A LA CANTIDAD

function comprar(){//Aqui no le pasamos el evento ya que no necesitamos información de ninguna etiqueta
    //diseño
    const exito=document.querySelector('.exito')
    //-------------
    //Cuando le de al botón comprar el inner del footer estará vacío dando una simulación de que se ha borrado
    footer.innerHTML=""
    //y actualizamos el total
    actualizarPrecio()
    //--------------
    exito.style.zIndex="1"
    exito.style.backgroundColor="rgb(113, 201, 113)"
    exito.querySelector('h2').style.color="rgb(30, 97, 30)"
    setTimeout(()=>{
        exito.style.zIndex="0"
        exito.style.backgroundColor="transparent"
        exito.querySelector('h2').style.color="white"
    },2000)
    //Termina diseño
}