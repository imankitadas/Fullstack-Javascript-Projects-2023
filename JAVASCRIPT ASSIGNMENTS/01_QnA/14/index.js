// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.


let Number = prompt('Enter a Number:');

if (Number % 2 == 0){ 
    alert(`${Number} is Even Number`);
}else{ 
    alert(`${Number} is Odd Number `);
}