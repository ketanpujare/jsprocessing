// Train Manager Game
var signals = [];

function setup() {
  createCanvas(900, 400);
  frameRate(10)
  ts = new TrainStrcture();
  for (let s = 30; s < width; s += 30) {
    signals.push(new Signal(s, 21, false))
  }
  // signal = new Signal(30, 21, false)
  // signals.push(signal)
  tsignals = signals
  t1 = new Train(color('#1b6bf5'), 23, tsignals);
}

function draw() {
  background('#474545');
  // background(255);
  ts.trainStrShow();
  for (let s = 0; s < signals.length; s++) {
    signals[s].signalShow();
  }
  // signal.signalShow();
  t1.trainUpdate();
  t1.trainShow();

}

function mousePressed() {
  for (let s = 0; s < signals.length; s++) {
    let d = dist(mouseX, mouseY, signals[s].x, signals[s].y);
    if (d < signals[s].r) {
      console.log(signals[s].status)
      signals[s].status = !signals[s].status
    }
  }
}