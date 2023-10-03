// 17. Write a program which tells the number of days in a month.

function count(month){
    if(month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December"){
        console.log(`Number of days in a Month is ${month} 31`);
    }else if(month == "April" || month == "June" || month == "September" || month == "November"){
        console.log(`Number of days in a Month is ${month} 30`);
    }else{
        console.log(`Number of days in a Month is ${month} 28`);
    }
      
 }

count("February");
