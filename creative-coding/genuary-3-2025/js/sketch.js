let bg = 'rgba(0, 0, 0, 1)';
let bga = 'rgba(0, 0, 0, 0)';
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bg);
    rectMode(CENTER);
    strokeWeight(0);
}
function draw() {
    background(bga);
    let currentMilliseconds = Date.now();
    // space hehe
    let red = 'rgb(255,0,0)';
    let orange = 'rgb(255,165,0)';
    let yellow = 'rgb(255,255,0)';
    let green = 'rgb(0,128,0)';
    let blue = 'rgb(0,191,255)';
    let indigo = 'rgb(75,0,130)';
    let violet = 'rgb(148,0,211)';
    let colors = [red, orange, yellow, green, blue, indigo, violet];
    let size = 50;
    for (let j = 1; j > 0; j--) {
        for (let i = 0; i < 7; i++) {
            fill(colors[i]);
            let y = (Math.cos(2 * Math.PI * ((currentMilliseconds-((i+1)/7) * 8000)%8000)/8000) + 1) / 2 * (height)/j + (height)*(j-1)/(j*2);
            let x = (Math.sin(2 * Math.PI * ((currentMilliseconds-((i+1)/7) * 8888)%8888)/8888) + 1) / 2 * (width)/j + (width)*(j-1)/(j*2);
            rect(x, y, size, size, size/2);
        }
    }
    let rand_dist = 300;
    let rand_min = 1; let rand_max = 50;
    let wait = 1;
    if (mouseIsPressed) {
        if (currentMilliseconds%wait == 0) {
            let x = mouseX + (Math.random() * rand_dist - rand_dist/2);
            let y = mouseY + (Math.random() * rand_dist - rand_dist/2);
            let size = Math.random() * (rand_max - rand_min) + rand_min;
            fill('rgba(0, 0, 0, 1)');
            circle(x, y, size);
        }
    }
}