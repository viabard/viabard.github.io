let bg = 0;

let boxes = [];
let n_boxes = 25;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bg);
    let colors = [];
    for (let i = n_boxes; i > 0; i--) {
        /// color
        let r = getRandomInt(1, 256);
        let g = getRandomInt(1,256);
        let b = getRandomInt(1, 256);
        let color = "rgb(" + r + "," + g + "," + b + ")";
        colors.push(color);
        boxes.push(new MovingBox(width/2, 0, (width/2 * i/n_boxes), color, 'rgb(0, 0, 0)', 0, 0.01 * (n_boxes - i)/n_boxes));
        boxes.push(new MovingBox(width/2, width, width - ((width/2) * i/n_boxes), color, 'rgb(0, 0, 0)', 0, 0.01 * (n_boxes - i)/n_boxes));
    }
}

// get a random int, inclusive, exclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
  

function draw() {
    background(bg);
    if (mouseIsPressed) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].move_forward();
            boxes[i].show();
        }
    } else {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].move_backward();
            boxes[i].show();
        }
    }
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(bg);
}