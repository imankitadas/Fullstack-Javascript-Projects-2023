// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.



//truth value : 

//First case- [] : Here This block will be executed .

if ([]) {
    console.log('This block will be executed');
} else {
    console.log('This block will NOT be executed');
}

//Second case- 1 : Here This block will be executed because 1 will have true value.

if (1) {
    console.log('This block will be executed');
} else {
    console.log('This block will NOT be executed');
}


//Third case-code : Here This block will be executed

if ('code') {
    console.log('This block will be executed');
} else {
    console.log('This block will NOT be executed');
}




//false value :

//First case-0 :Here else condition will be executed because if condition will have 0 value 

if (0) {
    console.log('This block will be executed');
} else {
    console.log('This block will NOT be executed');
}

//Second case-NaN :Here else condition will be executed because if condition will have NaN value

if (NaN) {
    console.log('This block will be executed');
} else {
    console.log('This block will NOT be executed');
}

//Third case-null value :Here else condition will be executed because if condition will have null value 

if (null) {
    console.log('This block will be executed');
} else {
    console.log('This block will NOT be executed');
}
