const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,70,500,50);

  
  ball = new Ball(200, 200, 80, 80);
  ball1 = new Ball(270, 200, 80, 80);
  ball2 = new Ball(320, 200, 80, 80);
  ball3 = new Ball(370, 200, 80, 80);
  rope = new Rope(ball.body, { x: 400, y: 50 });
  rope1 = new Rope(ball1.body, { x: 490, y: 50 });
  rope2 = new Rope(ball2.body, { x: 580, y: 50 });
  rope3 = new Rope(ball3.body, { x: 670, y: 50 });
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
 

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();


}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


