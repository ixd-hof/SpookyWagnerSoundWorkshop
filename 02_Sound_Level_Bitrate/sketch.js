var song;

function preload() {
  song = loadSound('assets/DJ_Spooky_Wagner_Parsifal_01.mp3');
}

function setup() {
  song.loop();
  createCanvas(500, 500);
  background(100);
}

function draw() {
  // Volume
  var level = map(mouseY, 0, height, 1, 0);
  song.setVolume(level);
  background(level*255);
  rectMode(CENTER);
  rect(width/2, mouseY, 20, 20);
  
  // Pan left / right
  var pan = map(mouseX, 0, width, -1, 1);
  song.pan(pan);
  ellipse(mouseX, height/2, 20, 20);
  
  // Speed / Bitrate
  var speed = map(mouseY, 0.1, height, 2, 0);
  println(speed);
  song.rate(speed);
  
}
