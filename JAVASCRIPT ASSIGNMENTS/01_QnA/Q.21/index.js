// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


let countries = ['India', 'Mexico', 'England', 'Canada' , 'USA']

if(countries.includes('Ethiopia')){

    //Check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
    console.log('ETHIOPIA');
}else{
    // If it does not exist add to the countries list.
    console.log(countries.push('Ethiopia'));
}

console.log(countries);