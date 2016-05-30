var song, mic;
var amplitude;

var filteringFactor = 0.3;

var filtered_y = 0;

function preload() {
  song = loadSound('assets/DJ_Spooky_Wagner_Parsifal_02.mp3');
}

function setup() {
  //mic = new p5.AudioIn();
  //mic.start();
  
  song.loop();
  amplitude = new p5.Amplitude();
  createCanvas(500, 500);
  background(100);
}

function draw() {
  background(100);
  
  var level = amplitude.getLevel();
  var position_y = map(level, 0, 1, height, 0);
  filtered_y = position_y * filteringFactor + filtered_y * (1.0 - filteringFactor);
  
  stroke(255);
  noFill();
  //ellipse(width / 2, position_y, 50, 50);
  
  stroke(200);
  ellipse(width / 2, filtered_y, 50, 50);
}