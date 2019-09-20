class GridObject {
    constructor(shape,color) {
        this.shape = shape;
        this.color = color;
    }
}

class Worker {
    constructor() {
        this.GridObject = new GridObject(shapes.triangle,"#ff0000")
    }
}