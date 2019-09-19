var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

function Cell(object) {
    this.object = object
}

function generateGrid(size) {
    var grid = []
    for(var i=0;i<size;i++) {
        grid[i] = []
        for(var j=0;j<size;j++) {
            grid[i][j] = new Cell(null)
        }
    }
}

class Room {
    constructor(size) {
        this.grid = generateGrid(size)
        this.cellWidth = canvas.width / size
    }
}

function DrawGrid() {
    var grid = Game.currentRoom

    ctx.fillStyle = "#1E1E1E"
    ctx.fillRect(0,0,canvas.width,canvas.height)

    for(var i=0;i<grid.length;i++) {
        
    }
}

function drawCell(cell) {

}