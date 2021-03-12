var bird;
var pipes=[];
var backgroundIMG;
var image1;


function preload(){
  backgroundIMG = loadImage("Background.png");
  image1=loadImage("Pipe upwards.png");
  image2=loadImage("Pipe downwards.png");
  image3=loadImage("Flappy Bird -1.jpg");
}

function setup() {
  createCanvas(500, windowHeight);
bird = new Bird();
pipes.push(new Pipe());   
}

function draw() {
  background(backgroundIMG);
  
  for (var i = pipes.length - 1;i>=0;i--){
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)){
      console.log("HIT");
    }
    if(bird.hitsBottom()){
      console.log("hit bottom");
    }
    if(pipes[i].offscreen()){
      pipes.splice(i,1);
    }
  }

  bird.update();
  bird.show();
  
  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  if(mouseIsPressed) {
    bird.up();
  }
}

function keyPressed (){
  if (keyCode == 32) {
    bird.up();
    //console.log("SPACE");
  }
}
function windowResized(){
  resizeCanvas(500,windowHeight);
}