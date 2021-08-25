
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj,leftSide,rightSide;
var world;


function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);
      

	engine = Engine.create();
	world = engine.world;

	var ball_options ={
		isStatic:false,
		restitution : 0.3,
		friction:0,
		density:1.2
	   }

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,30,ball_options);
	World.add (world,ball);
 
    groundObj = new ground(width/2,670,width,20);
	leftSide = new ground (1100,600,20,120);
	rightSide = new ground(1350,600,20,120);


	Engine.run(engine);
  
}


function draw() {
 
  background(40);
  ellipse(ball.position.x,ball.position.y,30);
  groundObj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 
}



