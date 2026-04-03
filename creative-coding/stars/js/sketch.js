class Star{
    constructor(x, y, size = 1, twinkle_speed = 1, opacity = 1){
        this.x = x;
        this.starting_x = x;
        this.y = y;
        this.starting_y = y;
        this.x_vel = 0;
        this.y_vel = 0;
        this.size = size;
        this.twinkle_speed = twinkle_speed; 
        this.opacity = opacity; // 0 to 1

        this.x_scroll = 0.1;

        // twinkle setup
        this.twinkle_number = Math.floor(80/this.twinkle_speed);
        this.twinkle_gradient = [];
        let twinkle_offset = 0.4;
        for(let i = 0; i < this.twinkle_number; i++){
            this.twinkle_gradient.push((i/this.twinkle_number*this.opacity) + twinkle_offset);
        }
        for(let i = this.twinkle_number; i > 0; i--){
            this.twinkle_gradient.push((i/this.twinkle_number*this.opacity) + twinkle_offset);
        }

        this.twinkle_status = Math.floor(this.twinkle_number*2 * Math.random());
    }

    twinkle(twinkle_speed){
        this.opacity = this.twinkle_gradient[(this.twinkle_status++ + twinkle_speed)%(this.twinkle_number*2)];
    }

    move(x_vel = this.x_vel, y_vel = this.y_vel){
        dbz: if(mouseIsPressed){
            let dx = mouseX - this.x;
            let dy = mouseY - this.y;
            let s = Math.abs(dx)+Math.abs(dy);
            if(s < 1){
                this.x = this.starting_x;
                this.y = this.starting_y;
                break dbz
            }
            dx /= s;
            dy /= s;
            this.x_vel = dx;
            this.y_vel = dy;
        }else{
            this.x_vel = this.x_scroll;
            this.y_vel = 0;
        }

        this.x += x_vel;
        this.y += y_vel; // a positive increase in y should make the object go up imo
        if(this.x > windowWidth){this.x = 0};
        if(this.y > windowHeight){this.y = 0};

    
    }

    show(twinkle_speed = this.twinkle_speed){
        this.twinkle(twinkle_speed); // change opacity
        this.move(); // move ..?

        push();
        translate(this.x, this.y);
        fill(`rgba(255,255,255,${this.opacity})`);
        noStroke();
        circle(0, 0, this.size);
        pop();
    }
    
}

let stars = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let windowSize = windowWidth*windowHeight;
    let density = 0.0005; // one star every 100 or so pixels
    let num_stars = density * windowSize;
    for(let i = 0; i < num_stars; i++){
        let rand_size = 1 + 2 * Math.random();
        let rand_x = Math.random() * windowWidth;
        let rand_y = Math.random() * windowHeight;
        let rand_opacity = 0.2 + 0.8 * Math.random();
        let rand_twinkle_speed = Math.floor(1 + 4 * Math.random());
        stars.push(new Star(rand_x, rand_y, rand_size, rand_twinkle_speed, rand_opacity));
    }
}

function draw() {
    background(0, 0, 0);
    for(let i = 0; i < stars.length; i++){
        stars[i].show();
    }
}