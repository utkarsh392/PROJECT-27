
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball1


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	ground= new Ground(400,400,450,20)
	ball1= new Ball(220,650,50,50)
	ball2= new Ball(270,650,50,50)
	ball3= new Ball(320,650,50,50)
	ball4= new Ball(370,650,50,50)
	ball5= new Ball(420,650,50,50)
	ball6= new Ball(470,650,50,50)
	ball7= new Ball(520,650,50,50)
	ball8= new Ball(570,650,50,50)
	string1=new String(ball1.body,ground.body,-180,0)
	string2=new String(ball2.body,ground.body,-130,0)
	string3=new String(ball3.body,ground.body,-80,0)
	string4=new String(ball4.body,ground.body,-30,0)
	string5=new String(ball5.body,ground.body,20,0)
	string6=new String(ball6.body,ground.body,70,0)
	string7=new String(ball7.body,ground.body,120,0)
	string8=new String(ball8.body,ground.body,170,0)
	
	
	
	

	
	


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background("pink");
 
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  string6.display();
  string7.display();
  string8.display();

  
  
  
  

  
  


  
  
 
  
  
 
 
  drawSprites();
  
 
}




function keyPressed() {
	if (keyCode === 32) {
	   Matter.Body.applyForce(ball8.body,ball8.body.position,{x:150,y:-500})
	   
	 }
   }
