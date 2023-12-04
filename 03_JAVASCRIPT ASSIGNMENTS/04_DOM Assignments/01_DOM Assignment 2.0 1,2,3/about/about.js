let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});



// DOM Second Assignment 

// <-------------- Task 1 --------------->


//i) Change "contact" navigation menu to "Projects"-

let nav = document.querySelector("header nav ul");
nav.lastElementChild.innerHTML = "Projects";


// ii) changing all "h3" Background Color-

Array.from(accordian).forEach((element) => { 
    element.style.backgroundColor = "#DADAF8";
});



// <-------------- Task 2 --------------->


// i) Add h3 with new name "Skills" and also add new paragraph-

let accordianWrap = document.querySelector(".accordian-wrapper");
let newdiv = document.createElement("div");
newdiv.classList.add("accordian");
accordianWrap.appendChild(newdiv);

  // Add New h3 "Skills"-

let newh3 = document.createElement("h3");
newh3.innerHTML = "Skills";
newdiv.appendChild(newh3);

  // Add New paragraph-

let p = document.createElement("p");
p.innerHTML = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";
newdiv.appendChild(p);


  // Add Background Color to New h3-

let lastaccordian = document.querySelectorAll(".accordian:last-child h3");
lastaccordian.forEach((color) => { 
    color.style.backgroundColor = "#DADAF8" ;
})

  // Add Click Function on New h3-

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
