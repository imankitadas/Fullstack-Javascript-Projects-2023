// 12. Create a human readable time format using the Date time object.

//   - YYYY-MM-DD HH:mm
//   - DD-MM-YYYY HH:mm
//   - DD/MM/YYYY HH:mm


let now=new Date();
let year= now.getFullYear();
let month= now.getMonth();
let date1= now.getDate();
let hour= now.getHours();
let min= now.getMinutes();


let timef1= year + '-' + month + '-' + date1 + '-' + hour + ':' + min ;
console.log(`Time Format1 : ${timef1}`);

let timef2= date1 + '-' + month + '-' + year + '-' + hour + ':' + min ;
console.log(`Time Format2 : ${timef2}`);

let timef3= date1 + '/' + month + '/' + year + '/' + hour + ':' + min ;
console.log(`Time Format3 : ${timef3}`);