var song;
var fft;

function preload() {
  song = loadSound('assets/DJ_Spooky_Wagner_Parsifal_02.mp3');
}

function setup() {
  song.loop();
  fft = new p5.FFT();
  fft.setInput(song);

  createCanvas(500, 500);
  background(100);
}

function draw() {
  background(100);

  var spectrum = fft.analyze();

  noFill();
  stroke(255);
  beginShape(LINES);
  for (i = 0; i < spectrum.length; i++) {
    var y = map(spectrum[i], 0, 255, height, 0);
    ellipse(i, y, 5, 5);
  }
  endShape();
}