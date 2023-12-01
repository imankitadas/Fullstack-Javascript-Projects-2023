// 18. Write a program which tells the number of days in a month, now consider leap year.


function  findLeapYear(year){ 
    return (year%4==0  && year%100!==0)||(year%400==0)
  }

    function findMonth(month,year){
    let months={
       January: 31,
          February: findLeapYear(year)?29:28,
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
    console.log(`Number of days in ${month} ${year} is ${days}`)
  }

  findMonth("June",2044);