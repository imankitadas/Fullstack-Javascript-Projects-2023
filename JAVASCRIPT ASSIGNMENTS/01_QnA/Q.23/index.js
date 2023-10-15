// 23. Write a program to check that the number given by the user is a prime number or not.

function isPrime(num){
    if(num <= 1){
      return "Not a Prime Number";
    }
     for(let i = 2 ; i<num ; i++){
        if(num % i === 0 ){
            return  "Not a Prime Number";
        }
     }
    return "a Prime Number";
 }
 
 let findPrimeNumber = isPrime(11);
 console.log(`The number is ${findPrimeNumber}`);
