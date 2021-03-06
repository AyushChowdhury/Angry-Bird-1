const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var box1,box2,box3,box4,box5

var pig1,pig2

var log1,log2,log3,log4

var bird

function setup(){
  createCanvas(1200,600);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(600,590,1200,20)

  box1=new Box(1000,545,70,70)
  box2=new Box(800,545,70,70)
  box3=new Box(1000,455,70,70)
  box4=new Box(800,455,70,70)
  box5=new Box(900,365,70,70)
  pig1=new Pig(900,545)
  pig2=new Pig(900,455)
  log1=new Log(900,500,270,PI/2)
  log2=new Log(900,410,270,PI/2)
  log3=new Log(850,310,120,PI/5)
  log4=new Log(930,310,120,-PI/5)
  bird=new Bird(100,200)
}

function draw(){
  background("black");
  Engine.update(engine);
  
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  pig1.display()
  pig2.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  bird.display()
}