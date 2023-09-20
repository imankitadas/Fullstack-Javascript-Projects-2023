// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F



function identifyGrade(score){
    if(score>=80 && score<=100){
       console.log("Student gets A grade");
    }else if(score>=70 && score<=79){
       console.log("Student gets B grade");
    }else if(score>=60 && score<=69){
       console.log("Student gets C grade");
    }else if(score>=50 && score<=59){
       console.log("Student gets D grade");
    }else{
       console.log("Student gets F grade");
    }
     
 }
 
 identifyGrade(55);



 