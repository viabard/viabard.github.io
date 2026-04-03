class ShootingLine {
    constructor(x, y, direction, length, speed=10) {
        
        this.length = length;
        this.speed = speed;

        this.x_dir;
        this.y_dir;

        if(direction == 1) {
            // right
            this.x_dir = 1;
            this.y_dir = 0;
        } else if(direction == 2) {
            // down
            this.x_dir = 0;
            this.y_dir = -1;
        } else if(direction == 3) {
            // left
            this.x_dir = -1;
            this.y_dir = 0;
        } else if(direction == 4) {
            // up
            this.x_dir = 0;
            this.y_dir = 1;
        }

        this.current_move = 0;
        this.alive = true;
        this.adjust = 0;
        this.x1 = x;
        this.x2 = x;
        this.y1 = y;
        this.y2 = y;
        this.horizontal = Math.abs(this.x_dir) == 1;
    }

    move() {
        this.current_move += this.speed;
        if(this.current_move < this.length) {
            this.x2 += this.x_dir*this.speed; 
            this.y2 += this.y_dir*this.speed; 
        } else if(this.current_move >= this.length && this.current_move < this.length*2) {
            this.x1 += this.x_dir*this.speed; 
            this.y1 += this.y_dir*this.speed;
        } else {
            this.alive = false;
            this.x1 = this.x2;
            this.y1 = this.y2;
        }
    }

    show() {
        stroke(0);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}