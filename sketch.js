
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, round,box1, box2, box3;
var dbimg, db;

function preload()
{
	dbimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(900, 900);
	

	engine = Engine.create();
	world = engine.world;

	// sprites and bodies
	ground =createSprite(400,550,1000,20);
	ground.shapeColor = color("yellow");

	box1 = new dustbin(480,390,50,300);
	box2 = new dustbin(600,520, 200,40);
	box3 = new dustbin(730,390, 50,300);


	round = new ball(100,300,70,70);
	db = createSprite(605, 370, 200, 40 );
	db.addImage(dbimg);

	var render = Render.create({
		 element: document.body,
		  engine: engine,
		   options:  {
				width: 1200,
				height: 700,
				 wireframes: false 
				}
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  
  round.display();
  box1.display();
  box2.display();
  box3.display();


  drawSprites();
 
}

function keyPressed(){

	if( keyCode === UP_ARROW){
		//Matter.Body.setStatic(round.body, false);
		console.log("key pressed");
		Matter.Body.setStatic(round.body, false);
		Matter.Body.applyForce(round.body,round.body.position,{x:250, y: -200})
		
	  }
	  
}

