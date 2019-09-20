var loadedWorkers = 0
var resource1 = 0
var maxWorkers = 3
var minWorkers = 1
var resourceOutput = 1

function loadWorkers(){
 if(Game.workers <= 0){
     //put quirky output message here
 }else if(Game.loadedWorkers >= maxWorkers){
     //put quirky output here
 }else{
    incrementWorkers(-1)
    incrementLoadedWorkers(1)
 }
}

function slaveLabor(){
    if(Game.loadedWorkers < minWorkers){
        //put quirky output message here
    }else{
        incrementLoadedWorkers(-minWorkers)
        incrementResources(resourceOutput)
    }
}