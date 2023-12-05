//  DOM Assignment 4

// <----------------TASK 1---------------->


// i) Change The Character Names -

document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer";

document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";


// ii) Change background color at the bottom of the cards -
 
document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d";

document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486";

document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f";

document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35";

document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";


// iii) Change text color at the bottom of the cards -

document.querySelectorAll(".stat").forEach((e) => {e.style.color ="#fff"});

document.querySelectorAll(".stat-value").forEach((e) => {e.style.color ="#fff"});
