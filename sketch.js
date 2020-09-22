
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rec1,rec2,rec3,ball;

function  preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	rec1=createSprite(width-250,height-60,20,60);

	rec2=createSprite(width-100,height-60,20,60);
	
	rec3=createSprite(width-180,height-40,150,20);
	ball=createSprite(width-300,height-20,100,10);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	matter.Body.applyForce(paperObject.Body,paperObject.Body.postion,{x:85,y:85});	
	}
}

