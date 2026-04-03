let background_color = 0 //rgb(210, 60, 130)
let current_lines = [];
let current_pos = [];
let num_lines;
let line_num = 40;
let line_speed = 3;
let l;

let collisions_dict = {};
let intersections = {};

function preload() {
    piano = new Object();
    piano['A0'] = loadSound("midi_piano/A0.mp3");
    piano['A1'] = loadSound("midi_piano/A1.mp3");
    piano['A2'] = loadSound("midi_piano/A2.mp3");
    piano['A3'] = loadSound("midi_piano/A3.mp3");
    piano['A4'] = loadSound("midi_piano/A4.mp3");
    piano['A5'] = loadSound("midi_piano/A5.mp3");
    piano['A6'] = loadSound("midi_piano/A6.mp3");
    piano['A7'] = loadSound("midi_piano/A7.mp3");

    piano['Ab1'] = loadSound("midi_piano/Ab1.mp3");
    piano['Ab2'] = loadSound("midi_piano/Ab2.mp3");
    piano['Ab3'] = loadSound("midi_piano/Ab3.mp3");
    piano['Ab4'] = loadSound("midi_piano/Ab4.mp3");
    piano['Ab5'] = loadSound("midi_piano/Ab5.mp3");
    piano['Ab6'] = loadSound("midi_piano/Ab6.mp3");
    piano['Ab7'] = loadSound("midi_piano/Ab7.mp3");

    piano['B0'] = loadSound("midi_piano/B0.mp3");
    piano['B1'] = loadSound("midi_piano/B1.mp3");
    piano['B2'] = loadSound("midi_piano/B2.mp3");
    piano['B3'] = loadSound("midi_piano/B3.mp3");
    piano['B4'] = loadSound("midi_piano/B4.mp3");
    piano['B5'] = loadSound("midi_piano/B5.mp3");
    piano['B6'] = loadSound("midi_piano/B6.mp3");
    piano['B7'] = loadSound("midi_piano/B7.mp3");

    piano['Bb0'] = loadSound("midi_piano/Bb0.mp3");
    piano['Bb1'] = loadSound("midi_piano/Bb1.mp3");
    piano['Bb2'] = loadSound("midi_piano/Bb2.mp3");
    piano['Bb3'] = loadSound("midi_piano/Bb3.mp3");
    piano['Bb4'] = loadSound("midi_piano/Bb4.mp3");
    piano['Bb5'] = loadSound("midi_piano/Bb5.mp3");
    piano['Bb6'] = loadSound("midi_piano/Bb6.mp3");
    piano['Bb7'] = loadSound("midi_piano/Bb7.mp3");

    piano['C1'] = loadSound("midi_piano/C1.mp3");
    piano['C2'] = loadSound("midi_piano/C2.mp3");
    piano['C3'] = loadSound("midi_piano/C3.mp3");
    piano['C4'] = loadSound("midi_piano/C4.mp3");
    piano['C5'] = loadSound("midi_piano/C5.mp3");
    piano['C6'] = loadSound("midi_piano/C6.mp3");
    piano['C7'] = loadSound("midi_piano/C7.mp3");
    piano['C8'] = loadSound("midi_piano/C8.mp3");

    piano['D1'] = loadSound("midi_piano/D1.mp3");
    piano['D2'] = loadSound("midi_piano/D2.mp3");
    piano['D3'] = loadSound("midi_piano/D3.mp3");
    piano['D4'] = loadSound("midi_piano/D4.mp3");
    piano['D5'] = loadSound("midi_piano/D5.mp3");
    piano['D6'] = loadSound("midi_piano/D6.mp3");
    piano['D7'] = loadSound("midi_piano/D7.mp3");

    piano['Db1'] = loadSound("midi_piano/Db1.mp3");
    piano['Db2'] = loadSound("midi_piano/Db2.mp3");
    piano['Db3'] = loadSound("midi_piano/Db3.mp3");
    piano['Db4'] = loadSound("midi_piano/Db4.mp3");
    piano['Db5'] = loadSound("midi_piano/Db5.mp3");
    piano['Db6'] = loadSound("midi_piano/Db6.mp3");
    piano['Db7'] = loadSound("midi_piano/Db7.mp3");
    piano['Db8'] = loadSound("midi_piano/Db8.mp3");

    piano['E1'] = loadSound("midi_piano/E1.mp3");
    piano['E2'] = loadSound("midi_piano/E2.mp3");
    piano['E3'] = loadSound("midi_piano/E3.mp3");
    piano['E4'] = loadSound("midi_piano/E4.mp3");
    piano['E5'] = loadSound("midi_piano/E5.mp3");
    piano['E6'] = loadSound("midi_piano/E6.mp3");
    piano['E7'] = loadSound("midi_piano/E7.mp3");

    piano['Eb1'] = loadSound("midi_piano/Eb1.mp3");
    piano['Eb2'] = loadSound("midi_piano/Eb2.mp3");
    piano['Eb3'] = loadSound("midi_piano/Eb3.mp3");
    piano['Eb4'] = loadSound("midi_piano/Eb4.mp3");
    piano['Eb5'] = loadSound("midi_piano/Eb5.mp3");
    piano['Eb6'] = loadSound("midi_piano/Eb6.mp3");
    piano['Eb7'] = loadSound("midi_piano/Eb7.mp3");

    piano['F1'] = loadSound("midi_piano/F1.mp3");
    piano['F2'] = loadSound("midi_piano/F2.mp3");
    piano['F3'] = loadSound("midi_piano/F3.mp3");
    piano['F4'] = loadSound("midi_piano/F4.mp3");
    piano['F5'] = loadSound("midi_piano/F5.mp3");
    piano['F6'] = loadSound("midi_piano/F6.mp3");
    piano['F7'] = loadSound("midi_piano/F7.mp3");

    piano['G1'] = loadSound("midi_piano/G1.mp3");
    piano['G2'] = loadSound("midi_piano/G2.mp3");
    piano['G3'] = loadSound("midi_piano/G3.mp3");
    piano['G4'] = loadSound("midi_piano/G4.mp3");
    piano['G5'] = loadSound("midi_piano/G5.mp3");
    piano['G6'] = loadSound("midi_piano/G6.mp3");
    piano['G7'] = loadSound("midi_piano/G7.mp3");

    piano['Gb1'] = loadSound("midi_piano/Gb1.mp3");
    piano['Gb2'] = loadSound("midi_piano/Gb2.mp3");
    piano['Gb3'] = loadSound("midi_piano/Gb3.mp3");
    piano['Gb4'] = loadSound("midi_piano/Gb4.mp3");
    piano['Gb5'] = loadSound("midi_piano/Gb5.mp3");
    piano['Gb6'] = loadSound("midi_piano/Gb6.mp3");
    piano['Gb7'] = loadSound("midi_piano/Gb7.mp3");

    vinyl = loadSound("vinyl-hiss.mp3")

    chordNums = new Object();
    
    chords = new Object();
    chords['I'] = [
        [piano['Ab4'], piano['B4'], piano['E5']],
        [piano['Ab3'], piano['B3'], piano['E4']],
        [piano['Ab2'], piano['B2'], piano['E3']],
        [piano['Ab5'], piano['B5'], piano['E6']]
    ];
    chordNums[0] = 'I';
    
    chords['Cmaj7'] = [
        [piano['G4'], piano['C4'], piano['B4'], piano['E4']],
        [piano['G3'], piano['C3'], piano['B3'], piano['E3']],
        [piano['G2'], piano['C2'], piano['B2'], piano['E2']],
        [piano['G5'], piano['C5'], piano['B5'], piano['E5']]
    ];
    chordNums[1] = 'Cmaj7';

    chords['Am'] = [
        [piano['A4'], piano['C4'], piano['E4']],
        [piano['A3'], piano['C3'], piano['E3']],
        [piano['A2'], piano['C2'], piano['E2']],
        [piano['A5'], piano['C5'], piano['E5']]
    ]
    chordNums[2] = 'Am';

    // make sure to change this if you have more chords
    n_chords = 3;
    // change the chord every x seconds
    every_x_seconds = 6;

    colors = new Object();
    colors['I'] = [
        'rgba(124, 106, 10)',
        'rgba(186, 189, 141)',
        'rgba(255, 218, 198)',
        'rgba(250, 149, 0)',
        'rgba(235, 100, 36)'
    ];

    colors['Cmaj7'] = [
        'rgba(4, 231, 98)',
        'rgba(245, 183, 0)',
        'rgba(0, 161, 228)',
        'rgba(220, 0, 115)',
        'rgba(137, 252, 0)'
    ];

    colors['Am'] = [
        'rgba(247, 37, 133)',
        'rgba(114, 9, 183',
        'rgba(58, 12, 163)',
        'rgba(67, 97, 238)',
        'rgba(76, 201, 240)'
    ];
}


const sleep = ms => new Promise(r => setTimeout(r, ms));
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function playChord(chord, rate=1) {
    for (const key of chord) {
        key.play();
        key.rate(rate);
        await sleep(100+42*(getRandomInt(10)+1));
    }
}

function playVinyl() {
    vinyl.play();
    vinyl.loop();
    userStartAudio();
}

function setup() {
    playVinyl();
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
    //userStartAudio();
}


function draw() {
    
    time = Date.now();
    time = Math.floor(time/1000);
    time = Math.floor(time/every_x_seconds);
    time = time % n_chords;
    current_chord = chords[chordNums[time]];
    background(background_color);
    fill('white');
    textSize(40);
    strokeWeight(1);
    text('Click anywhere for sound.', 10, 100);
    
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
                // make an intersection (expanding circle)
                // choose a color for the circle
                //let c = 'rgba(' + String(Math.floor((Math.random()*155+100)))+ ', ' + String(Math.floor((Math.random()*155+100))) + ', ' + String(Math.floor((Math.random()*155+100))) + ')';
                // grabbing a random color from the color palette for the current chord
                let c = colors[chordNums[time]][getRandomInt(Object.keys(colors[chordNums[time]]).length)];
                
                // choose a starting transparency
                let t = 0.8;
                // choose a speed
                let s = Math.random()*10+10;
                // choose a stroke weight
                let sw = Math.random()*200;
                intersections[[x, y]] = new Intersection(x, y, size = 1000, 
                    speed = s, 
                    starting_transparency = t, 
                    color = c,
                    stroke_weight = sw);
                //playChord(chords['I'][getRandomInt(4)], 1);
                current_chord[getRandomInt(Object.keys(current_chord).length)][getRandomInt(Object.keys(current_chord[0]).length)].play();
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