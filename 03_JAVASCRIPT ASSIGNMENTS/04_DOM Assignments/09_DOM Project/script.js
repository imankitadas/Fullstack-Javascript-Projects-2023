//  DOM Assignment 9


// <----------------TASK 1---------------->

//i) Change h1 color -

let headingclr = document.querySelector(".caption .title");
headingclr.style.color= "#dc143c";


// <----------------TASK 2---------------->


//i) Change button color when mouse hover -

let btnbgclr = document.querySelector(".add-to-cart");
btnbgclr.addEventListener("mouseover" , changecolor);

function changecolor(){ 
    btnbgclr.style.backgroundColor = "#dc143c" ;
}

btnbgclr.addEventListener("mouseout", changecolortwo);

function changecolortwo(){ 
    btnbgclr.style.backgroundColor = "#114232" ;
}
