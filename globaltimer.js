var timerText = document.getElementById("timer")
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
}   if(second == 1){
    timerText.innerHTML = `You have played (Name of game goes here) for ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${second} second!`
    second++
    }else if(minutes == 1){
    timerText.innerHTML = `You have played (Name of game goes here) for ${years} years, ${days} days, ${hours} hours, ${minutes} minute, and ${second} seconds!`
    second++
    }else if(hours == 1){
    timerText.innerHTML = `You have played (Name of game goes here) for ${years} years, ${days} days, ${hours} hour, ${minutes} minutes, and ${second} seconds!`
    second++
    }else if(days == 1){
    timerText.innerHTML = `You have played (Name of game goes here) for ${years} years, ${days} day, ${hours} hours, ${minutes} minutes, and ${second} seconds!` 
    second++   
    }else if(years == 1){
    timerText.innerHTML = `You have played (Name of game goes here) for ${years} year, ${days} days, ${hours} hours, ${minutes} minutes, and ${second} seconds!`
    second++
    }else{
    timerText.innerHTML = `You have played (Name of game goes here) for ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${second} seconds!`
     second ++
}
    
 

setInterval(globalTimer, 1000);
