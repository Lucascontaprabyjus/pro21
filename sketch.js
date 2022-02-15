const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var botao1
var botao2

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  let options = {
    restitution: 0.5
  };
  
  ground =new Ground(200,600,800,20);
  right = new Ground(500,500,20,180);
  left = new Ground(400,500,20,180);
  ball = Bodies.circle (200, 200, 20)
  top_wall = new Ground(200,10,800,20);
  World.add(world, ball);
  botao1 = createImg("right.png")
  botao2 = createImg("up.png")
  botao1.position (120, 30)
  botao2.position (30, 30)
  botao1.size (50, 50)
  botao2.size (50, 50)
  botao2.mouseClicked(cima)
  botao1.mouseClicked(lado)

var ball_options={

isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20)
}
function cima(){

Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});

}
function lado(){

  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});

}
