class MovingBox {
    constructor(moving_side, stationary_side, where_to_move, fill_color='rgb(0, 255, 100)', stroke_color='rgb(0, 255, 100)', stroke_weight=0, speed=0.01) {
        // moving side
        this.moving_side = moving_side;

        // stationary side
        this.stationary_side = stationary_side;

        // where to move
        this.where_to_move = where_to_move;
        
        //colors
        this.fill_color = fill_color;
        this.stroke_color = stroke_color;
        this.stroke_weight = stroke_weight;

        this.progress = 0; // 0 for here, 1 for there
        this.current_moving_side = moving_side;

        this.speed = speed;

        if (moving_side - where_to_move >= 0) {
            this.left = false;
        } else {
            this.left = true;
        }
    }

    lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    smooth_lerp(stationary_side, where_to_move, progress) {
        const smoothedT = 0.5 - 0.5 * Math.cos(progress * Math.PI);
        return (this.lerp(stationary_side, where_to_move, smoothedT));
    }

    move_forward() {
        if (this.progress < 1) {
            this.current_moving_side = this.smooth_lerp(this.moving_side, this.where_to_move, this.progress);
            this.progress += this.speed;
        } else {
            this.progress = 1;
            this.current_moving_side = this.where_to_move;
        }
    }

    move_backward() {
        if (this.progress > 0) {
            this.current_moving_side = this.smooth_lerp(this.moving_side, this.where_to_move, this.progress);
            this.progress -= 0.02;
        } else {
            this.progress = 0;
            this.current_moving_side = this.moving_side;
        }
    }

    show() {
        stroke(this.stroke_color);
        strokeWeight(this.stroke_weight);
        fill(this.fill_color);
        if (this.left) {
            // need to get width of square, stationary side is on the right, so moving side has to be first x
            let width = this.stationary_side - this.current_moving_side;
            rect(this.current_moving_side, 0, width, height);
        } else {
            rect(this.stationary_side, 0, this.current_moving_side, height);
        }
        //rect(this.current_moving_side, 0, this.stationary_side, height);
        fill('rgb(0, 0, 0)');
    }
}

