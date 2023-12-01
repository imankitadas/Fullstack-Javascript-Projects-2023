// 11. Use the Date object to do the following activities.


// - What is the year today?
const date=new Date();
const year=date.getFullYear();
console.log(`This year is : ${year} `);

//- What is the month today as a number?
const month =date.getMonth();
console.log(`This month is : ${month} `);

//- What is the date today?
const date1 = date.getDate();
console.log(`Today's date is : ${date1}`);

//- What is the day today as a number?
const day = date.getDay();
console.log(`Today is : ${day}`);

//- What is the hours now?
const hours = date.getHours();
console.log(`Hours are : ${hours}`);

// - What is the minutes now?
const min = date.getMinutes();
console.log(`Minutes are : ${min}`);


//- Find out the numbers of seconds elapsed from January 1, 1970 to now.

const elapsedtime = date.getTime();
const elapsedsec = elapsedtime/1000;
console.log(`Number of  seconds elapsed from Jan 1, 1970 are : ${elapsedsec}`);
