// 22. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


// - Sort the array and find the min and max age.

    let SortedAges=ages.sort((a,b)=>a-b)
    console.log(SortedAges)
    console.log(`  min age of a student is ${SortedAges[0]} `)
    console.log(`  max age of a student is ${SortedAges[SortedAges.length-1]} `)

//     - Find the average age(all items divided by number of items)

 function average(){
    let sum = 0;
   for(let i = 0 ; i < ages.length ; i++){
      sum+=ages[i]
     }
   return sum / ages.length
 }
let avgAge = average(ages);
console.log(`The average age is ${avgAge}`);


//     - Find the range of the ages(max minus min)

function findAgeRange() {
  let maxAge = Math.max(...ages);
  let minAge = Math.min(...ages);
  const result = maxAge - minAge;
  return  result;    
}

const ageRange = findAgeRange( SortedAges);
console.log(`The range of ages is ${ageRange}`);