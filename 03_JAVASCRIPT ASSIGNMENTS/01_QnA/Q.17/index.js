// 17. Write a program which tells the number of days in a month.


function findDays(month){     
  let months={
     January: 31,
        February: 28,           
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
  }
  let days=months[month] || "invalid month"
  console.log(`Number of days in a Month is ${days}  days`)
}

findDays('september');