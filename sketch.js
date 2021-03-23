
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
	Paper = new paper()
	Ground = new ground()
	bottomBin = new dustbin()
	leftBin = new dustbin()
	rightBin = new dustbin()



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Paper.display();
  Ground.display();
  leftBin.display();
  rightBin.display();
  bottomBin.display();
  
  drawSprites();
 
}
function keyDown(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.positon,{x:85,y:85})
	}
}



