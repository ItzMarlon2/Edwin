const main = document.getElementById('main')
const template = document.querySelector('.templateCard').content
const fragment = document.createDocumentFragment()

const animales = [
    {name:"Lobo", type:"Mamifero", age:5,color:"Gris"},
    {name:"Zorro", type:"Mamifero", age:2,color:"Amarillo"},
    {name:"Gato", type:"Mamifero", age:7,color:"Negro"},
    {name:"Caballo", type:"Mamifero", age:3,color:"Café"},
    {name:"León", type:"Mamifero", age:12,color:"Café"},
    {name:"Elefante", type:"Mamifero", age:13,color:"Gris"},
    {name:"Jirafa", type:"Mamifero", age:9,color:"Amarillo"},
    {name:"Tigre", type:"Mamifero", age:5,color:"Amarillo"},
    {name:"Ballena", type:"Mamifero", age:3,color:"Azul"},  
    {name:"Búho", type:"Ave", age:13,color:"Café"},
    {name:"Gallina", type:"Ave", age:9,color:"Blanco"},
    {name:"Águila", type:"Ave", age:4,color:"Rojo"},
    {name:"Perro", type:"Mamifero", age:5,color:"Blanco"},
    {name:"Toro", type:"Mamifero", age:12,color:"Negro"},
    {name:"Oveja", type:"Mamifero", age:13,color:"Blanco"},
    {name:"Hombre", type:"Mamifero", age:9,color:"Piel"}
];
  // Crear grupos de máximo 3 integrantes y realizar los siguientes ejercicios.
  // Entregar carpeta comprimida con cada uno de los ejercicios en js.

  // 1. Mostrar todos los animales cuya inicial sea la letra B
  // 2. Mostrar todos los animales que tengan más de 5 años.
  // 3. Mostrar todos los animales que sean de tipo ave y tengan más de 10 años.
  // 4. Muestre un Array con los nombres de todos los animales mamíferos de color negro.
  // 5. Muestre un Array donde se excluyan los animales de color blanco.

const crearCard = animales =>{
    animales.forEach(ani=>{
        if(ani.name.startsWith('B')){
            template.querySelector('h2').textContent=ani.name
            template.querySelectorAll('p')[0].textContent=ani.type
            template.querySelectorAll('p')[1].textContent=ani.age
            template.querySelectorAll('p')[2].textContent=ani.color
            const clone = template.cloneNode(true)
            fragment.appendChild(clone)
        }
    })
    main.appendChild(fragment)
}


crearCard(animales)