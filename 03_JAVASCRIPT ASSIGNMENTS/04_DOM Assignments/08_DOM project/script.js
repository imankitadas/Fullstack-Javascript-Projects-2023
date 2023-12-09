//  DOM Assignment 8


// <----------------TASK 1---------------->


// i) Remove navbar-

let navbar = document.querySelector(".navbar");
navbar.style.visibility = "hidden" ;

document.querySelector(".navbar-brand").innerHTML = "";
document.querySelector(".navbar-nav").innerHTML = "";


//ii) Add red color border to the div -

let addClr = document.querySelector(".col-lg-4");
addClr.style.border = "5px solid red";


//iii) Add vertical scrollbar -

let aside = document.querySelector("aside");
let scrollbar = document.querySelector(".new");
scrollbar.style.overflowY = "scroll";


//iv)Add horizontal Line -

var hrElement = document.createElement("hr");
hrElement.style.color = "#ffffff";
aside.appendChild(hrElement);


//v) Adding h2 -

let heading = document.createElement("h2");
heading.classList.add("new-head");
heading.innerHTML = "This is my custom heading";
heading.style.color ="#fff";
aside.appendChild(heading);



// <----------------TASK 2---------------->


//i) Add background color to white -

let bgcolor = document.querySelector("body");
bgcolor.style.background ="#fff";


// <----------------TASK 3---------------->


//i) Add responsive navbar toggle button -


navbar.style.visibility = "visible"; 
let togglemenu = document.querySelector(".navbar-toggler");

togglemenu.addEventListener("click", function(){
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
});
