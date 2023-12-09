//  DOM Assignment 6

// <----------------TASK 1---------------->


// i) Add "Ineuron" logo-

document.querySelector(".logo").src = "./assets/ineuron-logo.png";


// <----------------TASK 2---------------->


// i) Change price to "$10/month"-

document.querySelector(".app_price > span").innerHTML = "$10" ;


// ii) Add "linkedin" font awesome icon at end of the footer-

let newIcon = document.querySelector(".footer_social");
let div = document.createElement("div");
div.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
newIcon.appendChild(div);
