// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".


const myArray = [ "programming", "web development","pw skills","data analysis","machine learning","pw skills","networking"];
  
const firstOccurrenceIndex = myArray.indexOf("pw skills");
const lastOccurrenceIndex = myArray.lastIndexOf("pw skills");

 console.log("First occurrence index:", firstOccurrenceIndex);
 console.log("Last occurrence index:", lastOccurrenceIndex);
 