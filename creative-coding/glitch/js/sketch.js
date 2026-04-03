function setup() {
    createCanvas(windowWidth, windowHeight);
    background(245,218,228);
    stroke(255);
    rectMode(CENTER);
}

let num_particles = 1;
let particle_size = 100;
let s = 0.025;

let glitch_colors = ['rgb(255, 255, 255)', 'rgb(249, 251, 0)', 'rgb(2, 254, 255)', 'rgb(1, 255, 0)', 'rgb(253, 0, 251)', 'rgb(251, 1, 2)', 'rgb(3, 1, 252)', 'rgb(0, 0, 0)'];

let num_glitches = 40;
let glitch_size = 100;
let glitch_jiggle = 500;



function draw() {
    rectMode(CENTER);
    for(let i = 0; i < num_particles; i++) {
        // get location of particles
        let x = width/2 + sin(frameCount*s)*width/4;
        let y = height/2 + cos(frameCount*s)*height/4;

        x += sin(frameCount*s*3)*20;
        y += cos(frameCount*s*4)*50;

        y += sin(frameCount*s*5)*100;

        x += cos(frameCount*s*7)*100;

        if(mouseIsPressed) {
            // glitch
            for(let j = 0; j < num_glitches; j++) {
                let temp_x = x;
                let temp_y = y;
                let to_fill = true;
                let to_stroke = true;
                let really_big = 1;

                glitch_fill_color = glitch_colors[Math.floor(Math.random()*glitch_colors.length)];
                glitch_stroke_color = glitch_colors[Math.floor(Math.random()*glitch_colors.length)]

                let fill_rand = Math.random();
                let stroke_rand = Math.random();

                if(fill_rand < 0.5) to_fill = false;
                if(stroke_rand < 0.5) to_stroke = false;

                if(to_fill) {
                    fill(glitch_fill_color);
                } else {
                    noFill();
                }

                if(to_stroke) {
                    stroke(glitch_stroke_color);
                } else {
                    noStroke();
                }

                if(Math.random() < 0.002) {
                    really_big = 14;
                }
                
                temp_x += Math.random()*glitch_jiggle - glitch_jiggle/2;
                temp_y += Math.random()*glitch_jiggle - glitch_jiggle/2;
                rect(temp_x, temp_y, Math.random()*glitch_size*really_big, Math.random()*glitch_size*really_big);

            }
        } else {
            // circle
            // background(245,218,228);
            stroke(0);
            fill(255);
            strokeWeight(5);
            circle(x, y, 100);
        }
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }