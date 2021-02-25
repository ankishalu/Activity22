// Giving namespacing to all the modules
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world; // variable declaration
var box;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create(); // creating Engine i.e. Matter.Engine
  world = engine.world;     // adding engine to the world

  var box_options ={      // creating options for box
    isStatic: true
  }

  box = Bodies.rectangle(200,200,50,50,box_options);     // Bodies have different shapes we are using rectangle because box is rectangle in shape
  World.add(world, box);        // Adding it to the world
}

function draw() {
  background("lightblue");  
  
  Engine.update(engine);   // updating Engine

  rectMode(CENTER);
  rect(box.position.x, box.position.y, 50,50);     // shape should fall where engine bodies goes
  
}