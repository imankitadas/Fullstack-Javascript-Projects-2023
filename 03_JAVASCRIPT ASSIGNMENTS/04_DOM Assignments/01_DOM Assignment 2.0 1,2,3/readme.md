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
