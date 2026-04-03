class Intersection {
    // a rippple starting at an intersection 
    constructor(x, y, size=1000, speed=10, starting_transparency=1.0, color='rgba(0, 0, 0)', stroke_weight=200) {
        this.x = x;
        this.y = y;
        this.max_size = size;
        this.size = 0;
        this.speed = speed;
        this.starting_transparency = starting_transparency;
        this.stroke_weight = stroke_weight;
        this.color = color;

        this.moved = 0;
        this.alive = true;
        this.num_moves = Math.floor(size/speed);
    }

    move_and_show() {
        if(this.moved > this.num_moves) {
            this.alive = false;
        } else {
            noFill();
            strokeWeight(this.stroke_weight);
            let temp_color = this.color.slice(0, -1) + ', ' + String(map(this.moved, 0, this.num_moves, this.starting_transparency, 0)) + ')';
            stroke(temp_color);
            circle(this.x, this.y, this.size);
            this.size += this.speed;
            this.moved += 1;
        }
    }

}