//Talking Calendar
const talkingCalendar = function (date) {
  // Your code here
  let month,year,day ;
  const sepDate = date.split("/");
  //console.log(sepDate[1]);
  switch (sepDate[1]) {
    case '01':
      month = "January";
      break;
    case '02':
      month = "February";
      break;
    case '03':
      month = "March";
      break;
    case '04':
      month = "April";
      break;
    case '05':
      month = "May";
      break;
    case '06':
      month = "June";
      break;
    case '07':
      month = "July";
      break;
    case '08':
      month = "August";
      break;
    case '09':
      month = "September";
      break;
    case '10':
      month = "October";
      break;
    case '11':
      month = "November";
      break;
    case '12':
      month = "December";
      break;
    default:
      console.log("Wrong month format")
      break;
  }
let date_in_word = ""  
let str = "";
day = sepDate[2] 
if(day === '01'){
 str = '1' + "st"
}else if(day === '02'){
  str = '2' + "nd"
 }else if(day === '03'){
  str = '3' + "rd"

 }else if(day >= '04' && day <= '09')
 {
   str = day.substring(1) + "th"
 }else if(day >= '10')
 {
   str = day + "th"
 }
  //console.log("iii",str);
date_in_word = `${month} ${str}, ${sepDate[0]}`
return date_in_word
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

//Expected output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
