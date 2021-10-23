const name_user = document.getElementById('nombre');
const birthday_user = document.getElementById('fecha');
const result=document.getElementById('parrafo');
const calculate=document.querySelector('#boton');

calculate.addEventListener('click', calcularEdad);

function calcularEdad(){
    let user_name= name_user.value;
    let date = birthday_user.value;
    let date_user = date.split("-");

    let date_actually = new Date();
    let year_actually = date_actually.getFullYear();
    let month_actually = date_actually.getMonth() +1;
    let day_actually = date_actually.getDate();

    let yearUser = parseInt(date_user[0]);
    let monthUser = parseInt(date_user[1]);
    let dayUser = parseInt(date_user[2]);

    let year = year_actually - yearUser;
    let month = month_actually - monthUser;
    let day = day_actually - dayUser;
    
    if(year>=18 && month>=0 && day>=0 || year>=18 && month>=1){        
        if (month>=0 && day>=0 || month>=1) {
            result.textContent=`Señor@ ${user_name} usted tiene ${year}, usted es mayor de edad`;
            result.style="text-Shadow: 0px 0px 5px rgb(1, 197, 10), 0px 0px 5px rgb(1, 197, 10)"; 
        } else {
            result.textContent=`Señor@ ${user_name} usted tiene ${year-1}, usted es menor de edad`;
        }
    }else{
        if (month>=0 && day>=0 || month>=1) {
            result.textContent=`Señor@ ${user_name} usted tiene ${year}, usted es menor de edad`; 
        } else {
            result.textContent=`Señor@ ${user_name} usted tiene ${year-1}, usted es menor de edad`;
        }
    }

}
