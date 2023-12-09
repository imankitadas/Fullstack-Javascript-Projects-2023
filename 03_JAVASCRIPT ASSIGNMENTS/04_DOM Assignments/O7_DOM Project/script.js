//  DOM Assignment 7

// <----------------TASK 1---------------->


//i) Remove the languages that have 2.0 in their name-


let removeCourse =  document.querySelectorAll(".main__languages a");
for(let i = 0; i < removeCourse.length; i++){ 
    if(removeCourse[i].innerHTML.includes("2.0")){ 
        removeCourse[i].style.display = "none";
    }
};


// <----------------TASK 2 ---------------->


// i) Use Javscript to write something in the input box and submit the form. This should refresh the page and languages in the left card should come back.


let inputTxt = document.querySelector(".main__form-input");
inputTxt.disabled = false;


let submitBtn = document.querySelector(".main__form-btn");
submitBtn.disabled = false;

submitBtn.addEventListener("click", (refresh) => {

    for(let j=0; j< removeCourse.length; j++) {
        if(removeCourse[j].innerHTML.includes("2.0")){
            removeCourse[j].style.display = "inline" ;
        }
    }
});
