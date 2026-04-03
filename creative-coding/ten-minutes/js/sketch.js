function setup() {
    createCanvas(windowWidth, windowHeight);
    background(245,218,228);
    stroke(255);
}


// draws some grass
let num_lines = 300;
let num_rows = 10; //not actually the number of rows, oops
let done = false;

function draw() {
    if(!done){
        fill(230, 230, 10);
        noStroke();
        circle(width*.75, height/3, 500);
        for(let i = num_rows; i > -4; i--){
            let y = windowHeight - (windowHeight/2/num_rows * i);
            for(let j = 0; j < num_lines; j++){
                let height = windowHeight/10 + Math.random()*100;
                let width = windowWidth/200 + Math.random()*10;
                strokeWeight(width);

                stroke(100, 150 + Math.random()*105, 50 + Math.random()*50);
                let x = Math.random()*windowWidth;
                line(x, y, x+Math.random()*50-25, y-height);
            }
        }
        
    }
    done = true;

}