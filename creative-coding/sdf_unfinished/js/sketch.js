let background_color = 0 //rgb(210, 60, 130)
let R = (a=1)=>Math.random()*a;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(background_color);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);    
}