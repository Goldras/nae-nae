//Constants
var workerText = document.getElementById("WorkerAmount")

var makingWorker = false
var interval

var Game = {workers:0,currentRoom:null}

function init() {
    Game.currentRoom = new Room(50)
    DrawGrid()
    interval = setInterval(update,1000)
}

function update() {
}

function incrementWorkers(n) {
    Game.workers += n
    updateText()
}
function updateText() {
    if(Game.workers < 2) {
      workerText.innerHTML = Game.workers + " Worker."
    } else {
      workerText.innerHTML = Game.workers + " Workers." 
    }
}

function makeWorker() {
    if(makingWorker) {
        return
    }
    makingWorker = true
    var elem = document.getElementById("WorkerProgress");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        incrementWorkers(1)
        width = 0;
        elem.style.width = width + '%'; 
        makingWorker = false
        clearInterval(id);
      } else {
        width += 5/10; 
        elem.style.width = width + '%'; 
      }
    }
}

window.onload = init