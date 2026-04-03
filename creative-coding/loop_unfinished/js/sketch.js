function setup() {
    createCanvas(690, 690);
    background(25);
    noStroke();
}


let num_particles = 20;
let path_size = 3;
let speed = 0.9;

path_size = 10/path_size;



function draw() {
    colorMode(RGB);
    background('rgba(1, 1, 1, 0.1)');
    

    // create a bunch of circles that move in... circles!
    for (let i = 1; i < num_particles; i++) {
        let opacity = 255;
        let x = width/2 + (sin(speed*(frameCount-i*20)/(60))*i*0.1)*width/path_size;
        x += sin(frameCount/20)*50;
        let y = height/2 + (cos(speed*(frameCount-i*2)/(60))*i*0.1)*height/path_size;
        y += cos(frameCount/20)*50;
        
        let r = 255*sin(frameCount/120);
        let g = 255*cos(frameCount/60);
        fill(255, 255, 90, opacity);
        circle(x, y, 10);

        // show paths
        
    }
}

// you can put it in the mousePressed function,
// or keyPressed for example
function keyPressed() {
    // this will download the first 5 seconds of the animation!
    if (key === 's') {
        saveGif('mySketch', 5);
    }
}