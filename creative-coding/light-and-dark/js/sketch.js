//this variable will hold our shader object
let shapeShader;
let blobs = [];
let num_blobs = 50;

function preload(){
  theShader = loadShader('assets/onecolor.vert', 'assets/onecolor.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);
  for(let i = 0; i < num_blobs; i++){
    blobs.push(new MyBlob(windowWidth/2, windowHeight/2));
  }
}

function draw() {  
  
  // shader() sets the active shader with our shader
  shader(theShader);
  
  // lets send the resolution, mouse, and time to our shader
  // before sending mouse + time we modify the data so it's more easily usable by the shader
  theShader.setUniform('u_resolution', [width, height]);
  theShader.setUniform('u_mouse', [map(mouseX, 0, width, 0, 1), map(mouseY, 0, height, 0, 1)]);
  theShader.setUniform('u_time', frameCount * 0.01);
  theShader.setUniform('u_blobs', blobs.map(Object.values).flat());

  
  // rect gives us some geometry on the screen
  
  rect(0, 0);
  
  for(let i = 0; i < num_blobs; i++){
    blobs[i].move();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}