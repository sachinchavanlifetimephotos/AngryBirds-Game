const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5; 
var ground1; 

var pig1,pig2; 
var log1,log2,log3,log4; 

var bird1; 
var backgroundImage; 

function preload(){ 
backgroundImage=loadImage("sprites/bg.png")

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(600,390,1200,20); 

    box1=new Box(700,320,50,50); 
    box2=new Box(920,320,50,50); 

    pig1= new Pig(810,350); 

    log1= new Log(810,260,300,PI/2); 

    box3=new Box(700,240,50,50); 
    box4=new Box(920,240,50,50); 

    pig2= new Pig(810,220); 

    log2= new Log(810,180,300,PI/2); 

    box5=new Box(810,160,50,50); 

    log3=new Log(760,120,150,PI/7); 
    log4=new Log(870,120,150,-PI/7); 

    bird1=new Bird(100,100); 

}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    
   box1.display(); 
   box2.display(); 
   ground1.display(); 
   pig1.display(); 
   log1.display(); 

   box3.display(); 
   box4.display(); 
   pig2.display(); 
   log2.display(); 

   box5.display(); 
   log3.display(); 
   log4.display(); 

   bird1.display(); 
}