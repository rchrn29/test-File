const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  var ball_options={
    isStatic:true
  }

  ball=Bodies.circle(200,100,60,ball_options);
  ground=Bodies.rectangle(20,370,800,20,ground_options);
  //World.add(world,ground);
  World.add(world,ball,ground);
  console.log(ball);
  console.log(ball.position.x);
  console.log(ball.position.y);
}

function draw() {
  background("pink");  
 Engine.update(engine);
circle(ball.position.x,ball.position.y,60);
rect(ground.position.x,ground.position.y,800,20);
}