var fountain;
var song;
var amplitude;

function preload() {
  song = loadSound('assets/DJ_Spooky_Wagner_Parsifal_02.mp3');
}

function setup() {
  createCanvas(500, 500);
  song.loop();
  amplitude = new p5.Amplitude();

  var t = {
    name: "test",
    colors: [
      [100, 100, 100]
    ],
    lifetime: 600,
    angle: [330, 360],
    x: 0,
    y: 0
  };
  of = new Fountain(null, t);
}

function draw() {
  background(255);
  
  var level = map(amplitude.getLevel(), 0, 1, 0, height);

  of.location.x = width/2;
  of.location.y = level;

  of.Draw();
  of.Create();
  of.Step();
}