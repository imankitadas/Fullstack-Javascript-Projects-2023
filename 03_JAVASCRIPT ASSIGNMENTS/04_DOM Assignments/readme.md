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



# DOM Assignment 7

Remove the languages that have 2.0 in their name Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.-


**TASK 1**
Remove the languages that have 2.0 in their name-

![ass7 1-after](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/90479759-d2f6-4dc2-ad76-80e1c69ae41b)

**SOLUTION**

let removeCourse =  document.querySelectorAll(".main__languages a");<br>
for(let i = 0; i < removeCourse.length; i++){ 
    if(removeCourse[i].innerHTML.includes("2.0")){ 
        removeCourse[i].style.display = "none";
    }
};<br>


**TASK 2**
Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back-

![ass7 2-after](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/eac6c8af-5898-473d-a586-b71d0008ee90)

**SOLUTION**

let inputTxt = document.querySelector(".main__form-input");<br>
inputTxt.disabled = false;<br>
let submitBtn = document.querySelector(".main__form-btn");<br>
submitBtn.disabled = false;<br>

submitBtn.addEventListener("click", (refresh) => {

    for(let j=0; j< removeCourse.length; j++) {
        if(removeCourse[j].innerHTML.includes("2.0")){
            removeCourse[j].style.display = "inline" ;
        }
    }
});<br>



# DOM Assignment 8

Remove navbar add horizontal line and p tag then add red color border to the div and add vertical scrollbar then add background color to white and add responsive navbar toggle button .


**TASK 1**
Remove navbar and add horizontal line and h3 tag then add red color border to the div and add vertical scrollbar -

<img width="770" alt="ass8 1-after" src="https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/f7624ef5-cb6b-4cb0-af95-a64a39f6019f">


## Remove navbar -

**SOLUTION**

let navbar = document.querySelector(".navbar");<br>
navbar.style.visibility = "hidden" ;<br>

document.querySelector(".navbar-brand").innerHTML = "";<br>
document.querySelector(".navbar-nav").innerHTML = "";<br>


## Add red color border to the div -

**SOLUTION**

let addClr = document.querySelector(".col-lg-4");<br>
addClr.style.border = "5px solid red";<br>


## Add vertical scrollbar -

**SOLUTION**

let aside = document.querySelector("aside");<br>
let scrollbar = document.querySelector(".new");<br>
scrollbar.style.overflowY = "scroll";<br>


## Add horizontal Line -

**SOLUTION**

var hrElement = document.createElement("hr");<br>
hrElement.style.color = "#ffffff";<br>
aside.appendChild(hrElement);<br>


## Adding h2 -

**SOLUTION**

let heading = document.createElement("h2");<br>
heading.classList.add("new-head");<br>
heading.innerHTML = "This is my custom heading";<br>
heading.style.color ="#fff";<br>
aside.appendChild(heading);<br>


**TASK 2**

## Add background color to white -

![ass8 2-after](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/430af3ff-2379-4bdd-8c63-c3fd2496dcdd)

**SOLUTION**

let bgcolor = document.querySelector("body");<br>
bgcolor.style.background ="#fff";<br>


**TASK 3**

## Add responsive navbar toggle button -

![ass8 3-after](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/3bf7697a-ed67-41b9-874c-c89e17d9fd0d)

**SOLUTION**

navbar.style.visibility = "visible"; <br>
let togglemenu = document.querySelector(".navbar-toggler");

togglemenu.addEventListener("click", function(){
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
});


# DOM Assignment 9

Change h1 color and change button color when mouse hover -



**TASK 1**

## Change h1 color -

![ass9 1-after](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/6e7fa073-9641-43ed-9e16-6f3c02399aac)

**SOLUTION**

let headingclr = document.querySelector(".caption .title");<br>
headingclr.style.color= "#dc143c";<br>


**TASK 2**

## Change button color when mouse hover-

![ass9 2-after](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/00521ec7-8dc9-4793-bab8-90a73c95ebda)

**SOLUTION**

let btnbgclr = document.querySelector(".add-to-cart");<br>
btnbgclr.addEventListener("mouseover" , changecolor);<br>

function changecolor(){ 
    btnbgclr.style.backgroundColor = "#dc143c" ;
}

## Change button color when mouse Out-

![ass9 2-before](https://github.com/imankitadas/Fullstack-Javascript-Projects-2023/assets/131391850/c5113fa5-ba81-4b81-9244-13de585e7d57)

**SOLUTION**

btnbgclr.addEventListener("mouseout", changecolortwo);<br>

function changecolortwo(){ 
    btnbgclr.style.backgroundColor = "#114232" ;
}
