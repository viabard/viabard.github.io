// here is the fractal tree with push and pop matrix
// before each call to branch the matrix is pushed and then poped to go back to the original place before push was called 
// see https://youtu.be/0jjeOYMjmDU  dan shiffman!


let angle = 0
let decreaser = 0.7

let slider;

function setup() {
  createCanvas(windowWidth, windowHeight-(windowHeight/10));// need to leave room for the dom slider
  
  slider = createSlider(0,TWO_PI,PI/4,0.01);
  slider.position(width/4,height);
  slider.size(width/2);

  
}

function draw() {
  background(51);
  angle = slider.value();  
  stroke(255);
  translate(windowWidth/2,height); // moving the origin i.e. 0,0 to 200,height 
  branch(windowHeight/4); // still the branch len
  
}


function branch(len){
  
  line(0,0,0,-len); // so now this is a line from orgin to origin - len on y
  translate(0,-len);
  
  
  //line(0,0,0,-len*0.67); second branch but lets make it recursive
  
  if (len > 4){         // exit condition for the recursive loop
    push()            //saves the position at the top of the branch
    rotate(angle);          
    branch(len*decreaser);   // branch to the right
    pop();            // returns to the position at the top of the branch so you can draw the other side
    push();
    rotate(-angle);
    branch(len*decreaser);   // branch to the left
    pop();
  }
  
}