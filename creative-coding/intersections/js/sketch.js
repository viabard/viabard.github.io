let background_color = 0 //rgb(210, 60, 130)
let current_lines = [];
let current_pos = [];
let num_lines;
let line_num = 50;
let line_speed = 2;
let l;

let collisions_dict = {};
let intersections = {};

function setup() {
    createCanvas(windowWidth, windowHeight);
    l = Math.min(windowWidth, windowHeight);
    num_lines = Math.floor(Math.max(windowWidth, windowHeight)/line_num);
    background(background_color);
    for(let i = 0; i < num_lines; i++) {
        let temp_x = Math.random()*width;
        let temp_y = Math.random()*height;
        let temp_length = Math.random()*200+500;
        let temp_direction = Math.floor(Math.random()*5);
        let temp_line_speed = Math.random()*line_speed + line_speed/2;
        current_lines.push(new ShootingLine(temp_x, temp_y, temp_direction, temp_length, temp_line_speed, 'rgb(255, 255, 255)', 2));
    }
}

function draw() {
    background(background_color);
    for(let i = 0; i < current_lines.length; i++) {
        
        if(current_lines[i].alive) {
            current_lines[i].move();
            current_lines[i].show();
        } else {
            let temp_x = Math.random()*width;
            let temp_y = Math.random()*height;
            let temp_length = Math.random()*l*0.75+l/4;
            let temp_direction = Math.floor(Math.random()*5);
            let temp_line_speed = Math.random()*line_speed + line_speed/2;
            current_lines[i] = new ShootingLine(temp_x, temp_y, temp_direction, temp_length, temp_line_speed, 'rgb(255, 255, 255)', 2);
        }
        

        // console.log(Object.keys(collisions_dict).length);

    }
    find_collisions();
    // create intersections
    for(let [key, value] of Object.entries(collisions_dict)) {
        // keys are x values, values are lists of y values 
        for(let i = 0; i < value.length; i++) {
            let x = key;
            let y = value[i];
            if([x, y] in intersections){
                //do nothing
            } else {
                let c = 'rgba(' + String(Math.floor((Math.random()*155+100)))+ ', ' + String(Math.floor((Math.random()*155+100))) + ', ' + String(Math.floor((Math.random()*155+100))) + ')';
                intersections[[x, y]] = new Intersection(x, y, 1000, Math.random()*10+5, Math.random()*0.2+0.8, c, Math.random()*200);
            }
        }
    }
    // move intersections
    for(let [key, value] of Object.entries(intersections)) {
        // keys are x,y values and values are intersection objects
        if(value.alive){
            value.move_and_show();
        } else {

        }
    }
      
}

function find_collisions() {
    collisions_dict = {};
    for(let i = 0; i < current_lines.length; i++) {
        let current_line = current_lines[i];
        for(let j = 0; j < current_lines.length; j++){
            let other_line = current_lines[j];
            if(j!=i && current_line.horizontal != other_line.horizontal) {

                if(!current_line.horizontal) {
                    current_line = current_lines[j];
                    other_line = current_lines[i];
                }

                let l1_x1 = Math.min(current_line.x1, current_line.x2);
                let l1_x2 = Math.max(current_line.x1, current_line.x2);

                let l1_y1 = Math.min(current_line.y1, current_line.y2);
                // let l1_y2 = Math.max(current_line.y1, current_line.y2);

                let l2_x1 = Math.min(other_line.x1, other_line.x2);
                // let l2_x2 = Math.max(other_line.x1, other_line.x2);

                let l2_y1 = Math.min(other_line.y1, other_line.y2);
                let l2_y2 = Math.max(other_line.y1, other_line.y2);
                
                if(l2_y2 > l1_y1 && l2_y1 < l1_y1 && l1_x1 < l2_x1 && l1_x2 > l2_x1) {
                    // collision
                    if(l2_x1 in collisions_dict) {
                        collisions_dict[l2_x1].push(l1_y1);
                    } else {
                        collisions_dict[l2_x1] = [l1_y1];
                    }
                }
            }
        }
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    l = Math.min(windowWidth, windowHeight);
    num_lines = Math.floor(Math.max(windowWidth, windowHeight)/line_num);
    
}