var song, mic;
var amplitude;

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
  //var level = mic.getLevel();
  var size = map(level, 0, 1, 0, 200);
  ellipse(width / 2, height / 2, size, size);
}