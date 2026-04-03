let lines = [];
let collisions_dict = {};
let collisions = new Set();
let rectangles = new Set();
let rectangles_dict = {};

let sides = new Set();
let sides_dict = {};

let num_lines = 60;
let min_line_length = 1000;
let max_line_length = 1000;
let min_line_speed = 0.1;
let max_line_speed = 0.5;


function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < num_lines; i++) {
        lines.push(new ShootingLine(Math.random()*windowWidth, Math.random()*windowHeight,Math.floor(Math.random() * 4)+1, Math.random() * max_line_length + min_line_length, Math.random() * max_line_speed + min_line_speed));
    }
    rectMode(CORNERS);
}

function draw() {
    background(255, 255, 255);
    for(let i = 0; i < num_lines; i++) {
        let current_line = lines[i];
        if(current_line.alive) {
            current_line.move();
            current_line.show();
        } else {
            lines[i] = new ShootingLine(Math.random()*windowWidth, Math.random()*windowHeight,Math.floor(Math.random() * 4)+1, Math.random() * max_line_length + min_line_length, Math.random() * max_line_speed + min_line_speed);
        }
        find_collisions();
        show_rectangles();
    }
}

function find_collisions() {
    sides = new Set();
    rectangles = new Set();
    collisions_dict = {};
    let sides_dict = {};
    for(let i = 0; i < num_lines; i++) {
        let current_line = lines[i];
        for(let j = 0; j < num_lines; j++){
            let other_line = lines[j];
            if(j!=i && current_line.horizontal != other_line.horizontal) {

                if(!current_line.horizontal) {
                    current_line = lines[j];
                    other_line = lines[i];
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
                        let smaller = Math.min(collisions_dict[l2_x1][0], l1_y1);
                        let bigger = Math.max(collisions_dict[l2_x1][0], l1_y1);
                        let skey = String([smaller, bigger]);
                        if(skey in sides_dict) {
                            let x1 = Math.min(sides_dict[skey], l2_x1);
                            let x2 = Math.max(sides_dict[skey], l2_x1);

                            let y1 = smaller;
                            let y2 = bigger;

                            let rect = String([x1, y1, x2, y2]);

                            if(!(rectangles.has(rect))) {
                                if(!(rect in rectangles_dict)){
                                    rectangles_dict[rect] = new Rectangle(x1, y1, x2, y2);
                                }
                                rectangles.add(rect);
                            }
                        } else {
                            sides_dict[skey] = l2_x1;
                        }
                    } else {
                        collisions_dict[l2_x1] = [l1_y1];
                    }
                }
            }
        }
    }
}


function show_rectangles() {
    for(let property in rectangles_dict) {
        if(rectangles.has(property)) {
            rectangles_dict[property].show();
        } else {
            delete rectangles_dict[property];
        }
        
    }
}

function mouseClicked() {
    //console.log(collisions_dict);
    //console.log(collisions);
    //console.log(sides);
    //console.log(rectangles_dict);
    //console.log(rectangles_dict);
    //console.log(sides_dict);
}

