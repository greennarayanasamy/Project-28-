
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImage;
var stone1;

function preload()
{
	boyImage = loadImage("Sprites/boy.png");
}

function setup() {
	createCanvas(1000,500);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(250,400,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	stone1 = new Stone(230,400,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone1.display();

  

 
}



