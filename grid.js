var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

function Cell(x,y,object) {
    this.x = x
    this.y = y
    this.object = object
}

function generateGrid(size) {
    var grid = []
    for(var i=0;i<size;i++) {
        grid[i] = []
        for(var j=0;j<size;j++) {
            grid[i][j] = new Cell(i,j)
        }
    }
    return grid
}

class Room {
    constructor(size) {
        this.grid = generateGrid(size)
        this.cellSize = canvas.width / size
    }
}
function DrawGrid() {
    ctx.fillStyle = "#000000"
    ctx.fillRect(0,0,canvas.width,canvas.height)

    var grid = Game.currentRoom.grid
    console.log(grid)
    if(grid != null) {
        console.log("bruh")
        for(var i=0;i<grid.length;i++) {
            for(var j=0;j<grid.length;j++) {
                drawCell(grid[i][j])
            }
        }
    }
}

function drawCell(cell) {
    var cellSize = Game.currentRoom.cellSize
    ctx.beginPath()
    ctx.lineWidth = "1"
    ctx.strokeStyle = "#ffffff"
    ctx.rect(cell.x * cellSize, cell.y * cellSize, cellSize, cellSize)
    ctx.stroke()
}