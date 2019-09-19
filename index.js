//Constants
var workerText = document.getElementById("WorkerAmount")

var workers = 0
var interval

function init() {
    interval = setInterval(update,1000)
}

function update() {
    updateWorkers()
}

function incrementWorkers() {
    workers++
    updateText()
}
function updateText() {
    workerText.innerHTML = workers + " Workers."
}

window.onload = init