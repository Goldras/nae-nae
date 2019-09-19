var second = 0
var minutes = 0
var hours = 0
var days = 0
var years = 0
function globalTimer(){
 if(second == 60){
    second = 0
    minutes ++
    if(minutes == 60){
        minutes = 0
        hours ++
        if(hours == 24){
            hours = 0
            days ++
            if(days == 365){
               days = 0
               years ++
        }
    }
}
}
     console.log([second, minutes, hours, days, years]);
     second ++
 }

setInterval(globalTimer, 1000);
