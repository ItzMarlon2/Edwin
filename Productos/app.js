const main= document.querySelector('#main');
const contenedor = document.querySelector('#contenedor_card')

create_card();

function create_card(){
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
    tittle_card.textContent="AURICULARES";
    img_card.setAttribute('id', 'image')
    img_card.setAttribute('src', 'img/cascos.webp');
    p_card.setAttribute('id', 'parrafo')
    p_card.textContent=`$1.000.000`;
    p_card_info.setAttribute('id' ,'info_parrafo');
    p_card_info.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sed accusamus, nulla, blanditiis delectus doloribus sequi numquam eius cupiditate beatae quam ratione velit vero animi corrupti similique? Quos quis, animi repellendus magni obcaecati sint, officiis id eveniet velit, nostrum molestias similique at odit! Nobis saepe reiciendis eius minus illo ut!"
    btn_card.setAttribute('id', 'btn')
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
}

function render_card(size){
    for (let index = 0; index < size; index++) {
        create_card();
        
    }
}

render_card(14);