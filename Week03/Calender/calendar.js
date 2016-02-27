
// Author:- Code developed by Amol Vaze (asv130130@utdallas.edu)
function showCalendar(){
 
 
 var htmlContent ="";
 var February_Days ="";
 var counter = 1;
 
 
 var current_Date = new Date();
 var month = current_Date.getMonth();

 var nextMonth = month+1; 
 var prevMonth = month -1;
 var day = current_Date.getDate();
 var year = current_Date.getFullYear();
 
 
 //Checking leap year
 if (month == 1){
    if ( (year%100!=0) && (year%4==0) || (year%400==0)){
      February_Days = 29;
    }else{
      February_Days = 28;
    }
 }
 
 
 // Checking weekdays & month
 var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
 var days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
 var dayPerMonth = ["31", ""+February_Days+"","31","30","31","30","31","31","30","31","30","31"]
 
 
 // Checking days in previous month and next one , and day of week.
 var nextDate = new Date(nextMonth +' 1 ,'+year);
 var weekdays= nextDate.getDay();
 var weekdays2 = weekdays
 var numOfDays = dayPerMonth[month];
     
 
 // code for leaving a white space for days of previous month.
 while (weekdays>0){
    htmlContent += "<td class='previous_Month'></td>";
 
 
     weekdays--;
 }
 
 // code for looping to build the calendar body.
 while (counter <= numOfDays){
 
     // When to start new line.
    if (weekdays2 > 6){
        weekdays2 = 0;
        htmlContent += "</tr><tr>";
    }
 
 
 
    // if counter is current day.
    // highlight current day using the CSS defined in header.
    if (counter == day){
        htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"#FFEB12\"; this.style.color=\"#FFFFFF\"' "+
        "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#EB12FF\"'>"+counter+"</td>";
    }else{
        htmlContent +="<td class='current_Month' onMouseOver='this.style.background=\"#FFEB12\"'"+
        " onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>";    
 
    }
    
    weekdays2++;
    counter++;
 }
 
 // code for building the calendar html body.
 var cal = "<table class='calendar'> <tr class='current_Month'><th colspan='7'>"
 +monthNames[month]+" "+ year +"</th></tr>";
 cal +="<tr class='days'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td>"+
 "<td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
 cal += "<tr>";
 cal += htmlContent;
 cal += "</tr></table>";
 // set the content of div .
 document.getElementById("simple_calendar").innerHTML=cal;
 
}