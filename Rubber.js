class Rubber {
    constructor(x,y,width, height)
    {
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        }
        ellipse(x, y, width, height , option);
        
    }

    display()
    {
        var pos=ellipse.position;
        var angle=ellipse.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill('blue');
        pop();     
    }
}