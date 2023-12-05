//  DOM Assignment 5

// <----------------TASK 1---------------->


// i) Add "Pro Subscription" button in Navbar-

let addbtn = document.createElement("a");
addbtn.classList.add("btn");
addbtn.innerHTML ="Pro Subscription";
document.querySelector(".btn").parentElement.appendChild(addbtn);


//ii) Adding new recipe "Chinese (7)"-

let addRecipe = document.createElement("a");
addRecipe.href = "#";
addRecipe.innerHTML = "Chinese(7)" ;
document.querySelector(".recipes-container .tags-container div").appendChild(addRecipe);


//iii) Change h5 and p tags color-

document.querySelectorAll(".recipe-name").forEach((e) => {e.style.color = "#8A2BE2" });


document.querySelectorAll(".recipe-disp").forEach((e) => {e.style.color = "#8A2BE2" });


// iv) Adding 6th card-

let newCard = document.createElement("div");
newCard.classList.add("card");
document.querySelector(".recipe-gallery").appendChild( newCard);


let heading = document.createElement("h5");
heading.innerHTML = "add 6th card here" ;
heading.style.fontSize = "18px";
newCard.appendChild(heading);
