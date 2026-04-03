function setup() {
    createCanvas(windowWidth, windowHeight);
    background(25);
    noStroke();
}


let num_particles = 350;
let path_size = 3;
let speed = 2;
let spacing = 0.007
let opacity = 255;
let delay = 0.7;

path_size = 10/path_size;



function draw() {
    colorMode(RGB);
    background('rgba(1, 1, 1, 0.1)');
    

    // create a bunch of circles that move in... circles!
    for (let i = 1; i < num_particles+1; i++) {
        
        let x = width/2 + (sin(speed*(frameCount-i*delay)/(60))*i*spacing)*width/path_size;
        //x += sin(frameCount/20)*50;
        let y = height/2 + (cos(speed*(frameCount-i*delay)/(60))*i*spacing)*height/path_size;
        //y += cos(frameCount/20)*50;
        
        let r = 255*sin(frameCount/120);
        let g = 255*cos(frameCount/120);
        fill(255/height * y, 255/width * x, 255, opacity);
        circle(x, y, 10);

        // show paths
        
    }
    for (let i = 0; i < num_particles; i++) {
        
        let x = width/2 + (sin(speed*(frameCount-i*delay)/(60) + 3.14159)*i*spacing)*width/path_size;
        //x += sin(frameCount/20)*50;
        let y = height/2 + (cos(speed*(frameCount-i*delay)/(60) + 3.14159)*i*spacing)*height/path_size;
        //y += cos(frameCount/20)*50;
        
        let r = 255*sin(frameCount/120);
        let g = 255*cos(frameCount/120);
        fill(255/width * x, 255/height * y, 255, opacity);
        circle(x, y, 10);

        // show paths
        
    }

    for (let i = 0; i < num_particles; i++) {
        
        let x = width/2 + (sin(speed*(frameCount-i*delay)/(60) + 3.14159/2)*i*spacing)*width/path_size;
        //x += sin(frameCount/20)*50;
        let y = height/2 + (cos(speed*(frameCount-i*delay)/(60) + 3.14159/2)*i*spacing)*height/path_size;
        //y += cos(frameCount/20)*50;
        
        let r = 255*sin(frameCount/120);
        let g = 255*cos(frameCount/120);
        fill(255, 255/height * y, 255/width * x, opacity);
        circle(x, y, 10);

        // show paths
        
    }

    for (let i = 0; i < num_particles; i++) {
        
        let x = width/2 + (sin(speed*(frameCount-i*delay)/(60) + 3.14159*1.5)*i*spacing)*width/path_size;
        //x += sin(frameCount/20)*50;
        let y = height/2 + (cos(speed*(frameCount-i*delay)/(60) + 3.14159*1.5)*i*spacing)*height/path_size;
        //y += cos(frameCount/20)*50;
        
        let r = 255*sin(frameCount/120);
        let g = 255*cos(frameCount/120);
        fill(255, 255/width * x, 255/height * y, opacity);
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