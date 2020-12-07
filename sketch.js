
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,Base,Log1,Log2;

function preload()
{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	
}

function setup() {
	createCanvas(1200, 350);


	engine = Engine.create();
	world = engine.world;

	Ball1 = new Ball(300,30,30);

	//Base1 = new Base2(width/1.2,300,170,20);
	 Log1 = new Log(891,height-50);	
	 Log1.scale =0.5;
  //  Log2 = new Log(1109,240,20,100);
	ground1 = new Ground(width/2,height-35,1200,10);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  Log1.display();
  //Log2.display();
  ground1.display();
  Ball1.display(); 
 // Base1.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:40,y:-40});
	}
}

