let s = [];
let r = 0;
let g = 0;
let b = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    s.push(new PointString(windowWidth/2, windowHeight/2, 200, 0, 0.8, 1000, false, true));

}

function draw() {
    background(255);
    
    fill(0);

    stroke(r, g, b);
    strokeWeight(2);

    for(let i = 0; i < s.length; i++){
        s[i].move();
        s[i].move();
        s[i].move();
        s[i].move();
        s[i].show();
    }

}

function mousePressed() {
    s[0].add_to_string(false);
}