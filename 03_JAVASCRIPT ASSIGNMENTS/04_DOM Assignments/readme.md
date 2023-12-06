## DOM Assignment 1

**TASK 1**
### Change "Contact" navigation menu to "Projects" then add new navigation menu after that "Hire Me" and remove footer social icons.

![Screenshot 2023-12-03 113834](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/67bb9c33-6ab0-4ee3-b0cd-3ec394b6f2bf)

**SOLUTION**

## Change "Contact" to "Projects"-

const nav = document.getElementsByTagName("nav");<br>
const list = document.getElementsByTagName("ul")[0];<br>
list.lastElementChild.innerText = 'Projects';<br>


## Adding Hire Me in navigation menu-

let li = document.createElement("li");<br>
li.innerHTML ="<a>Hire Me</a>";<br>
let list = document.querySelector("header nav ul");<br>
list.appendChild(li);<br>


## Removing Social Footer Icons-

let footer = document.querySelector("footer ul");<br>
footer.style.visibility = "hidden";<br>


**TASK 2**
## Change input placeholder text to "Search My Project".

![Screenshot 2023-12-03 120100](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/e92db3df-d107-4498-9473-e8457d03da23)

**SOLUTION**

## Change input placeholder text to "Search My Project"-

let search_field = document.querySelector(".search-field");<br>
let input_box = search_field.querySelector("input");<br>
input_box.placeholder = "Search My Project";<br>


**TASK 3**
## Change span text and display footer social icons .

![Screenshot 2023-12-03 122649](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/80847eb6-2b01-421a-97b3-a8aab58e6c9a)

**SOLUTION**

## Change span text-
let heroleft = document.querySelectorAll(".hero-left-section p span");<br>
heroleft[1].innerText = "an Employee";<br>
heroleft[2].innerText = "iNeuron Intelligence Pvt Ltd.";<br>

## Display footer social icons-

let footer_icons = document.querySelector("footer ul");<br>
footer_icons.style.visibility = "visible";<br>


**TASK 4**
## Change hero avtar image t Hitesh Sir's image .

![Screenshot 2023-12-03 125137](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/0fbc7d56-7866-40b7-8a7c-e9e1aac23979)

**SOLUTION**

## Change hero avtar image-

let newimg = document.querySelector("img");<br>
newimg.src = "./hiteshsir.jpg";<br>


**TASK 5**
## Add "Support Me" Button next to Chant with me button .

![Screenshot 2023-12-03 130515](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/805ea924-b13d-4ff2-9bec-d152d62559e9)

**SOLUTION**

## Add "Support Me" Button-

let heroBtn = document.querySelector(".hero-right-section-btns");<br>
let newBtn = document.createElement("button");<br>
newBtn.innerHTML = "Support Me";<br>
heroBtn.appendChild(newBtn);<br>



# DOM Assignment 2

**TASK 1**
## Change "contact" navigation menu to "Projects" and  Change all h3 background color .

![Screenshot 2023-12-04 214012](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/d78866ae-c7b1-4421-ab83-a25f5f149bbd)


**SOLUTION**

## Change "contact" navigation menu to "Projects"-

let nav = document.querySelector("header nav ul");<br>
nav.lastElementChild.innerHTML = "Projects";<br>


## Change all h3 background color-

Array.from(accordian).forEach((element) => { 
    element.style.backgroundColor = "#DADAF8";
});<br>


**TASK 2**
## Add h3 with new name "Skills" and also add new paragraph and Add click function on new h3 .

![Screenshot 2023-12-04 215323](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/63020230-e8cc-4128-8c9d-1864f9d18a5f)


**SOLUTION**

## Add new h3 "Skills"-

let newh3 = document.createElement("h3");<br>
newh3.innerHTML = "Skills";<br>
newdiv.appendChild(newh3);<br>

 ## Add new paragraph-

let p = document.createElement("p");<br>
p.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";<br>
newdiv.appendChild(p);<br>

## Add click function on new h3 -

lastaccordian.forEach((element) => { 
   element.addEventListener("click", ()=>{ 
     let para = element.nextElementSibling;
    if(para.style.display === "block"){
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
   });
});



# DOM Assignment 3

**TASK 1**
## Change placeholder in every Output Board and  Input Board .

![Screenshot 2023-12-04 223849](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/bd2d2477-a290-438d-adec-4d2e78957b58)


**SOLUTION**

## Changing the User Output Placeholder-

document.querySelector(".enterName").placeholder = "FSJS2.0";<br>
document.querySelector(".enterMail").placeholder = "fsjs@ineuron.ai";<br>
document.querySelector(".enterMessage").placeholder = "Hello World";<br>

## Changing the User Input Placeholder-

document.querySelector(".userName").placeholder = "FSJS2.0";<br>
document.querySelector(".userEmail").placeholder = "fsjs@ineuron.ai";<br>
document.querySelector(".userMessage").placeholder = "Hello World";<br>



# DOM Assignment 4

**TASK 1**
## Change background color and text color at the bottom of the cards and change character names .

![DOM P1 SS](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/39f98b26-423b-45aa-b37e-26e2171949b1)


**SOLUTION**

## Change The Character Names -

document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer";<br>

document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";<br>

## Change background color at the bottom of the cards -
 
document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d";<br>

document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486";<br>

document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f";<br>

document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35";<br>

document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";<br>

## Change text color at the bottom of the cards -

document.querySelectorAll(".stat").forEach((e) => {e.style.color ="#fff"});<br>

document.querySelectorAll(".stat-value").forEach((e) => {e.style.color ="#fff"});<br>



# DOM Assignment 5

**TASK 1**
## Add "Pro Subscription" button in navbar then add new recipe "Chinese (7)" in recipe list then change h5 and p tags color and add 6th card.

![DOM P2 SS](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/097af757-e0b5-4d06-839b-c6f85c870854)


**SOLUTION**

## Add "Pro Subscription" button -

let addbtn = document.createElement("a");<br>
addbtn.classList.add("btn");<br>
addbtn.innerHTML ="Pro Subscription";<br>
document.querySelector(".btn").parentElement.appendChild(addbtn);<br>

## Adding new recipe "Chinese (7)"-

let addRecipe = document.createElement("a");<br>
addRecipe.href = "#";<br>
addRecipe.innerHTML = "Chinese(7)" ;<br>
document.querySelector(".recipes-container .tags-container div").appendChild(addRecipe);<br>

## Change h5 and p tags color-

document.querySelectorAll(".recipe-name").forEach((e) => {e.style.color = "#8A2BE2" });<br>


document.querySelectorAll(".recipe-disp").forEach((e) => {e.style.color = "#8A2BE2" });<br>


## Adding 6th card-

let newCard = document.createElement("div");<br>
newCard.classList.add("card");<br>
document.querySelector(".recipe-gallery").appendChild( newCard);<br>


let heading = document.createElement("h5");<br>
heading.innerHTML = "add 6th card here" ;<br>
heading.style.fontSize = "18px";<br>
newCard.appendChild(heading);<br>



# DOM Assignment 6


## Add Ineuron logo then change price to $10/month and add "linkedin" font awesome icon at end of the footer - 


**TASK 1**
## Add "Ineuron" logo -

![DOM P3 SS-1](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/c04293f5-7e1c-429f-bccf-1570de0e1c6b)

**SOLUTION**

document.querySelector(".logo").src = "./assets/ineuron-logo.png";<br>

**TASK 2**

![DOM P3 SS-2](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/3fbfaa33-9be5-449e-a61d-f172c423f6db)
## Change price to $10/month -

**SOLUTION**

document.querySelector(".app_price > span").innerHTML = "$10" ;<br>

## Add "linkedin" font awesome icon at end of the footer -

**SOLUTION**

let newIcon = document.querySelector(".footer_social");<br>
let div = document.createElement("div");<br>
div.innerHTML = '<i class="fa-brands fa-linkedin"></i>';<br>
newIcon.appendChild(div);<br>
