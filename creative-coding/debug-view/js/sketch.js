const SPACING = 100;
const BUFFER = 100;
let num_cols;
let num_rows;
let bg = 10;

let circles = [];

let points = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bg);
    // get grid
    num_cols = Math.ceil((windowWidth-BUFFER*2)/SPACING);
    num_rows = Math.ceil((windowHeight-BUFFER*2)/SPACING);

    console.log(num_cols + ' cols');
    console.log(num_rows + ' rows');
    noStroke();
    // make points
    for(let i = 0; i < num_cols; i++){
        for(let j = 0; j < num_rows; j++){
            points.push(new Point(BUFFER + SPACING*i, BUFFER + SPACING*j, false, undefined, 0.9));
            
            circles.push([BUFFER + SPACING*i, BUFFER + SPACING*j]);
        }
    }
}

function draw() {
    background('rgb(1, 1, 1)');
    fill(50);
    textSize(20);
    text(`const SPACING = 100;
    const BUFFER = 100;
    let num_cols;
    let num_rows;
    let bg = 10;
    
    let circles = [];
    
    let points = [];
    
    function setup() {
        createCanvas(windowWidth, windowHeight);
        background(bg);
        // get grid
        num_cols = Math.ceil((windowWidth-BUFFER*2)/SPACING);
        num_rows = Math.ceil((windowHeight-BUFFER*2)/SPACING);
    
        console.log(num_cols + ' cols');
        console.log(num_rows + ' rows');
        noStroke();
        // make points
        for(let i = 0; i < num_cols; i++){
            for(let j = 0; j < num_rows; j++){
                points.push(new Point(BUFFER + SPACING*i, 
                    BUFFER + SPACING*j, false, undefined, 0.9));
                
                circles.push([BUFFER + SPACING*i, BUFFER + 
                    SPACING*j]);
            }
        }
    }
    
    function draw() {
        background('rgb(1, 1, 1)');
        fill(150)
        text()
        for(let i = 0; i < circles.length; i++) {
            fill(100);
            circle(circles[i][0], circles[i][1], 10);
        }
    
        for(let i = 0; i < num_cols*num_rows; i++) {
            points[i].move();
            points[i].show();
        }
    
        
        
    }
    
    function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
        background(bg);
    }`, 0, 0);

    text(`class Point {
        /*
            Takes x, y coordinates, a fixed status, and a previous point.
            Can be strung together to be a sort of 'chain'...
    
            moves with .move(), and is shown with .show()
    
            NOTE: requires a damper, 0.95 works well
        */
        constructor(x, y, fixed=false, prev_point, damper=0.9, point_distance=1) {
            this.x = x;
            this.y = y;
            this.starting_x = this.x;
            this.starting_y = this.y;
            this.x_vel = 0;
            this.y_vel = 0;
            this.x_accel = 0;
            this.y_accel = 0;
            this.fixed = fixed;
            this.prev_point = prev_point;
            this.damper = damper;
            this.point_distance = point_distance;
            this.spacing = 10;
            this.stopping_speed = 0.3;
        }
        
        update_prev(new_prev) {
            this.prev_point = new_prev;
        }
    
        move(x_accel = this.x_accel, y_accel = this.y_accel) {
            if(!this.fixed){
                if(mouseIsPressed){
                    let dx = mouseX - this.x;
                    let dy = mouseY - this.y;
                    let s = Math.abs(dx)+Math.abs(dy);
        
                    dx /= s + 0.000001; // avoid dividing by 0 ig
                    dy /= s + 0.000001; // avoid dividing by 0 ig
                    this.x_accel = dx;
                    this.y_accel = dy;
                } else {
                    let dx = this.starting_x - this.x;
                    let dy = this.starting_y - this.y;
                    let s = Math.abs(dx)+Math.abs(dy);
    
                    
        
                    dx /= s + 0.000001; // avoid dividing by 0 ig
                    dy /= s + 0.000001; // avoid dividing by 0 ig
                    
                    this.x_accel = dx;
                    this.y_accel = dy;
                }
                this.x_vel += this.x_accel;
                this.y_vel += this.y_accel;
    
                if(this.x_vel < this.stopping_speed && this.x_vel > -this.stopping_speed)this.x_vel = 0;
                if(this.y_vel < this.stopping_speed && this.y_vel > -this.stopping_speed)this.y_vel = 0;
    
                // damper the velocities
                this.x_vel *= this.damper;
                this.y_vel *= this.damper;
    
                
    
                
    
                this.x += this.x_vel;
                this.y += this.y_vel;
                
                // edge cases
                /*
                if(this.x > windowWidth) {
                    this.x = 1;
                } if (this.x < 0) {
                    this.x = windowWidth;
                } if (this.y > windowHeight) {
                    this.y = 0;
                } if (this.y < 0) {
                    this.y = windowHeight;
                }*/
            } else {
                
            }
        }
    
        show() {
            //stroke(this.x/windowWidth*255, this.y/windowHeight*255, 150);
            //fill(this.x/windowWidth*255, this.y/windowHeight*255);
            textSize(10);
            fill(255);
        }
    }`, width/2, 0);
    for(let i = 0; i < circles.length; i++) {
        fill(100);
        circle(circles[i][0], circles[i][1], 10);
    }

    for(let i = 0; i < num_cols*num_rows; i++) {
        points[i].move();
        points[i].show();
    }

    
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(bg);
}