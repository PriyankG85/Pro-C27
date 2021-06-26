
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, plane, stone, rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=new Plane(width/2, height, width, 10);
	hammer=new Hammer();
	stone=new Stone(100, 150);
	rubber=new Stone(300, 150, 50, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
  
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();

  drawSprites();
 
}



