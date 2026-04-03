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
        text(`(${this.x.toFixed(0)}, ${this.y.toFixed(0)})`, this.x-this.spacing, this.y);

        fill(`rgb(255, ${Math.floor(map(Math.abs(this.x_vel), 0, 9, 255, 0))}, ${Math.floor(map(Math.abs(this.x_vel), 0, 9, 255, 0))})`);
        text(`x_vel: ${this.x_vel.toFixed(1)}`, this.x-this.spacing*2, this.y+this.spacing*1);

        fill(`rgb(255, ${Math.floor(map(Math.abs(this.y_vel), 0, 9, 255, 0))}, ${Math.floor(map(Math.abs(this.y_vel), 0, 9, 255, 0))})`);
        text(`y_vel: ${this.y_vel.toFixed(1)}`, this.x+this.spacing*3, this.y+this.spacing*1);

        fill(`rgb(255, ${Math.floor(map(Math.abs(this.x_accel), 0, 1, 255, 0))}, ${Math.floor(map(Math.abs(this.x_accel), 0, 1, 255, 0))})`);
        text(`x_acc: ${this.x_accel.toFixed(1)}`, this.x-this.spacing*2, this.y+this.spacing*2);

        fill(`rgb(255, ${Math.floor(map(Math.abs(this.y_vel), 0, 9, 255, 0))}, ${Math.floor(map(Math.abs(this.y_vel), 0, 9, 255, 0))})`);
        text(`y_acc: ${this.y_vel.toFixed(1)}`, this.x+this.spacing*3, this.y+this.spacing*2);
    }
}