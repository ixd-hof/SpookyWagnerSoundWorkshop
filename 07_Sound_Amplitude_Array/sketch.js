var song;
var peaks;

function preload() {
  song = loadSound('assets/DJ_Spooky_Wagner_Parsifal_02.mp3');
}

function setup() {
  createCanvas(500, 500);
  song.loop();
  
  // extract 500 peaks in sound as array of numbers (0-1)
  // why 500? -> width
  peaks = song.getPeaks(width);
}

function draw() {
  background(255);

  // draw the peaks as lines from the center up
  // i is the position from left to right
  // and also the index of the array
  stroke(0);
  for (i = 0; i < width; i++) {
    line(i, height/2, i, height/2 - peaks[i]*100);
  }
  
  // draw a line at the current position of the sound
  // map values width to length of sound
  var position = map(song.currentTime(), 0, song.duration(), 0, width);
  stroke(255, 0, 100);
  line(position, 0, position, height);
  
  // finally draw a circle at the current peak
  var position_peaks = parseInt( map(song.currentTime(), 0, song.duration(), 0, peaks.length-1) );
  noFill();
  ellipse(position, height/2 - peaks[position_peaks]*100, 10, 10);
}