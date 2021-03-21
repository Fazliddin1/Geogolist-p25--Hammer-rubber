
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,700,1200,20);
	hammer = new Hammer(200, 100)
    rubber = new Rubber(400, 100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  hammer.display();
  ground.display();
  rubber.display();
  drawSprites();
 
}



