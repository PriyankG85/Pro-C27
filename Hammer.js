class Hammer {
    constructor() {
        this.x;
        this.y;
        var options = {
            'restitution' : 0.5,
            'friction' : 1,
            'density' : 2
        }
        this.Hammer = Bodies.rectangle(this.x, this.y, 100, 20, options);
        World.add(world, this.Hammer);
    }
    display() {
        this.x = mouseX;
        this.y = mouseY;
        fill("red");
        rect(this.x, this.y, 100, 20);
    }
}