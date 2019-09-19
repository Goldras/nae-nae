//Constants
var workerText = document.getElementById("WorkerAmount")

var workers = 0
var makingWorker = false
var interval

function init() {
    interval = setInterval(update,1000)
}

function update() {
}

function incrementWorkers(n) {
    workers += n
    updateText()
}
function updateText() {
    workerText.innerHTML = workers + " Workers."
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