class Cell {
    /*
        Is either alive or dead
        
        Provide a list of neighbors, and it will either 
        persist as it is/isn't, come alive, or die.

        All cells will have the same set of rules:
            - if there are more than 3 neighbors, 
    */

    constructor(x, y, fixed=false, damper=0.9, point_distance=1) {
        
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
                this.x_accel = 0;
                this.y_accel = 0;
            }

            if(this.prev_point != undefined){
                // get distance between this point and the previous
                // let distance = Math.sqrt((this.prev_point.x - this.x)**2 + (this.prev_point.y - this.y)**2);
                let dx = this.prev_point.x - this.x;
                let dy = this.prev_point.y - this.y;
                let s = Math.abs(dx)+Math.abs(dy) + 0.000001;
                dx /= s;
                dy /= s;
                this.x_vel += (this.x_accel + dx*2) / 2;
                this.y_vel += (this.y_accel + dy*2) / 2;
                
            } else {
                this.x_vel += x_accel;
                this.y_vel += y_accel;
            }

            // damper the velocities
            if(mouseIsPressed) {
                this.x_vel *= this.damper+0.1;
                this.y_vel *= this.damper+0.1;
            } else {
                this.x_vel *= this.damper;
                this.y_vel *= this.damper;
            }

            

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
        } 
    }

    show() {
        push();
        rotate();
        circle(this.x, this.y, 10);
    }
}