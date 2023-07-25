// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()


 // - 4 > 3
console.log(`The result of the comparison 4 > 3 is: ${4 > 3}`);   //true  

// - 4 >= 3
console.log(`The result of the comparison 4 >= 3 is: ${4 >= 3}`);   //true  

// - 4 < 3
console.log(`The result of the comparison 4 < 3 is: ${4 < 3}`);   //false

// - 4 <= 3
console.log(`The result of the comparison 4 <= 3 is: ${4 <= 3}`);   //false

// - 4 == 4
console.log(`The result of the comparison 4 == 4 is: ${4 == 4}`);   //true

// - 4 === 4
console.log(`The result of the comparison 4 == 4 is: ${4 == 4}`);   //true

// - 4 != 4
console.log(`The result of the comparison 4 != 4 is: ${4 != 4}`);   //false
  
// - 4 !== 4
console.log(`The result of the comparison 4 !== 4 is: ${4 !== 4}`);   //false   

// - 4 != '4'
console.log(`The result of the comparison 4 != '4' is: ${4 != '4'}`);   //false

// - 4 == '4'
console.log(`The result of the comparison 4 == '4' is: ${4 == '4'}`);   //true

// - 4 === '4'
console.log(`The result of the comparison 4 === '4' is: ${4 === '4'}`);   //false


// - Find the length of python and jargon and make a falsy comparison statement.

let string1 = 'python';
let string2 = 'jargon';

console.log("length of Python is =>", string1.length);
console.log("length of jagron is =>", string2.length);

if(string1.length > string2.length){
    console.log("truthy comparison");
}else{
    console.log("falsy comparison");
}
