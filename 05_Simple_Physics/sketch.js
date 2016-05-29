var fountain;

function setup() {
  createCanvas(500, 500);
    var t =
    {
        name: "test",
        colors: [[100, 100, 100]],
        lifetime: 600,
        angle: [330,360],
        x: 0,
        y: 0
    };
    of = new Fountain(null, t);
}

function draw()
{
  background(255);
  
  of.location.x = mouseX;
  of.location.y = mouseY;
  
  of.Draw();
  of.Create();
  of.Step();
}