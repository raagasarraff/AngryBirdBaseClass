const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2=new Box(920,320,70,70);
    ground=new Ground(600,390,1200,30);
    pig1=new Pig(820,320);
    pig2=new Pig(820,290);
    box5=new Box(820,240,70,70);
    log1=new Log(810,300,300,PI/2)
    log2=new Log(810,250,300,PI/2)
    log3=new Log(760,120,120,PI/5)
    log4=new Log(870,120,120,-PI/3)
    box3 = new Box(720,290,70,70);
    box4 = new Box(910,290,70,70);
    bird= new Bird(50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    bird.display();
    log4.display();
}