const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var Grounds,platform1,platform2,platform3;
var Hexagon,Slingshotse;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12
var circles=[];
var world,engine;

function setup() {
  createCanvas(800,800);
  stroke(255)

  engine = Engine.create();
  world = engine.world;
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
  
  Grounds=new Ground(400,10,800,20);
  platform1=new Ground(150,190,300,20);
  platform2=new Ground(360,400,100,20);
  platform3=new Ground(50,140,100,20);

  //Tower For platform2
  box1=new Box(201, 160, 20, 20);
  box2=new Box(220, 160, 20, 20);
  box3=new Box(240, 160, 20, 20);
  box4=new Box(260, 160, 20, 20);
  box5=new Box(280, 160, 20, 20);
  box6=new Box(300, 160, 20, 20);
  //Tower For platform1
  box7=new Box(200, 182, 20, 20);
  box8=new Box(220, 182, 20, 20);
  box9=new Box(240, 182, 20, 20);
  box10=new Box(280, 182, 20, 20);
  box11=new Box(300, 182, 20, 20);
  box12=new Box(320, 182, 20, 20);

  //hexagon and rubber band
  Hexagon= new Bird(150,220);

  Slingshotse= new SlingShot(Hexagon.body,{x:200,y:300});

  Engine.run(engine)

}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
 Grounds.display();
 platform1.display();
 platform2.display();
 platform3.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 Hexagon.display();
}

function mouseDragged(){
  Matter.Body.setPosition(Hexagon.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){
  Slingshotse.fly();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 