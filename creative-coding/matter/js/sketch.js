// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;

function clamp(min, max, num){
    if(num < min){return min}
    if(num > max){return max}
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    Matter.Runner.run(engine);
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(width/2, height, width, 100, options);
    World.add(world, ground);
}

function draw() {
    background(51);
    for (var i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(width/2, height, width, 100);
}

function mouseDragged(){
    boxes.push(new Box(mouseX, mouseY, 20, 20));
}
