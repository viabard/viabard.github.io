class Wave {
    /*
        Takes starting location (x,y), direction (0 for x direction, 1 for y direction), speed (can be negative)
        amp_speed (how fast lines shoot), 
    */
    constructor(x, y, direction=0, speed=1, amplitude=1, amp_speed=1, color='rgb(0, 255, 100)', stroke_weight=1) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        if (this.direction === 0) {
            this.shooting_direction = 1;
        } else {
            this.shooting_direction = 0;
        }
        this.amplitude = amplitude;
        this.amp_speed = amp_speed;
        this.speed = speed;

        let lines = [];

        this.lines = lines;

        this.color = color;

        this.stroke_weight = stroke_weight;
    }

    isAlive() {
        if (this.lines.length === 0) {
            //console.log('dead wave')
            return false
        } else {
            return true
        }
    }

    move() {
        // move x or y based on direction
        if (this.direction === 0) {
            // move x
            this.x += this.speed;
        } else if (this.direction === 1) {
            // move y
            this.y += this.speed;
        }
        // if we are inside the canvas, generate a new shooting line
        let inside_canvas = this.x > 0 && this.x < width && this.y > 0 && this.y < height;
        if (inside_canvas) {
            this.lines.push(new ShootingLine(this.x, this.y, this.shooting_direction, this.amplitude, this.amp_speed, this.color, this.stroke_weight))
        }

        // now update all shooting lines, remove dead lines
        let lines_copy = [...this.lines];
        let n_spliced = 0;
        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].move();
            if (!this.lines[i].alive) {
                lines_copy.splice(i - n_spliced, 1);
                n_spliced++;
            }
        }
        this.lines = lines_copy;
    }

    show() {
        // show current state (draw lines)
        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].show();
        }
    }
}