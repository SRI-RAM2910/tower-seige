const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
   polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,900,20);
    stand1=new Stand(390,300,250,10)
    stand2=new Stand(700,200,200,10)
   block1=new Block(300,275,30,40)
   block2=new Block(330,275,30,40)
   block3=new Block(360,275,30,40)
   block4=new Block(390,275,30,40)
   block5=new Block(420,275,30,40)
   block6=new Block(450,275,30,40)
   block7=new Block(480,275,30,40)
   block8=new Block(330,235,30,40)
   block9=new Block(360,235,30,40)
   block10=new Block(390,235,30,40)
   block11=new Block(420,235,30,40)
   block12=new Block(450,235,30,40)
   ball=Bodies.circle(50,200,20)
   World.add(world,ball)
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.ball,{x:100, y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    ground.display()
    stand1.display()
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
