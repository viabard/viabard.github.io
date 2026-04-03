class Point {
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
            this.x_vel += x_accel;
            this.y_vel += y_accel;

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
        circle(this.x, this.y, 10);
    }
}