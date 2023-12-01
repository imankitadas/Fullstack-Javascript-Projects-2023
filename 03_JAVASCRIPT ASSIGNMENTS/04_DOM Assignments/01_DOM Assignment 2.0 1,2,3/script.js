// <-------------- TASK 1 ---------------->


// i) Changing the 3rd list item from contact to Projects 

const nav = document.getElementsByTagName("nav");
const list = document.getElementsByTagName("ul")[0];
list.lastElementChild.innerText = 'Projects';


// ii) Adding new list item

const li = document.createElement("li");
li.innerText = "Hire Me";
let list_item =  document.querySelector("header nav ul")
list_item.appendChild(li);



//<----------------- TASK 2 ---------------->


// i) Changing the Search button placeholder

let search_field = document.querySelector(".search-field");
let input_box = search_field.querySelector("input");
input_box.placeholder = "Search My Project";


// ii) Removing social media icons

let footer = document.querySelector("footer ul");
footer.style.visibility = "hidden";



//<--------------- TASK 3 ---------------->


// i) Changing the paragraph text or hero-left-section 

let heroleft = document.querySelectorAll(".hero-left-section p span");

heroleft[1].innerText = "an Employee";
heroleft[2].innerText = "iNeuron Intelligence Pvt Ltd.";


// ii) Display footer social icon 

let footer_icons = document.querySelector("footer ul");
footer_icons.style.visibility = "visible";
 


// <--------------- TASK 4 ---------------->


// i) Change hero avtar image to Hitesh Sir's image

let newimg = document.querySelector("img");
newimg.src = "./hiteshsir.jpg";



// <--------------- TASK 5 ---------------->


// i) Adding a Support Me button

let heroBtn = document.querySelector(".hero-right-section-btns");
let newBtn = document.createElement("button");
newBtn.innerHTML = "Support Me";
heroBtn.appendChild(newBtn);

