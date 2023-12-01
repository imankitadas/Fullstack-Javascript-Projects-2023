// 28. Write a program to print the given patterns using the loops-


// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***


function printTriangle(num){
    for(let i = 1; i <= num; i++){
       let str = '';
      
      for(let j = 1; j <= i; j++){
         str += '*';
      }
     console.log(str);
   }
}

printTriangle(3);


// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//    ***
//    ***
//    ***


  function printSquare(num){
    for(let i = 0; i <= num; i++){
      let str = '';
      
       for(let j = 1; j <= num; j++){
           str += '*';
        }
     console.log(str);
    }    
}
    
printSquare(3);


// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//      *
//     ***
//    *****

function printPyramid(num) {
    for (let i = 1; i <= num; i++) {
        let row = '';
  
      
        for (let j = 1; j <= num - i; j++) {
            row += ' ';
        }
  
        for (let k = 1; k <= 2*i-1; k++) {
            row += '*';
        }
  
        console.log(row);
    }
  }
  
  printPyramid(3);












