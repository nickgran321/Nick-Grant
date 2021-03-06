var serial; // variable to hold an instance of the serialport library
var portName = '/dev/tty.usbmodem14201'; // fill in your serial port name here

var currentData = 0;


function setup() {
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.list(); // list the serial ports
  serial.on('connected', serverConnected); // callback for connecting to the server
  // serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  // serial.on('error', serialError);    // callback for errors
  // serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port

  createCanvas(600, 400);


  //meow button
  buttonSound = loadSound('Cat_Meow.mp3');


  //create reset button
  // var button = createButton("reset");
  // button.mousePressed(resetSketch);

  //image list
  emergingcat = loadImage('cat_emerging.png');
  blueeyedcat = loadImage('blue-eyes.png');
  catfood = loadImage('cat-food.png');
  scaredycat = loadImage('scaredy-cat.png');
  cutecat = loadImage('cute-cat.png');
  dopeycat = loadImage('dopey-cat.png');
  surprisedcat = loadImage('suprised-cat.png');
  CPOne = loadImage('CPOne.png')
  CPTwo = loadImage('CPTwo.png')
  CPThree = loadImage('CPThree.png')
  CPFour = loadImage('CPFour.png')
  CPFive = loadImage('CPFive.png')
  CPSix = loadImage('CPSix.png')
  CPSeven = loadImage('CPSeven.png')
  CPEight = loadImage('CPEight.png')
  CPNine = loadImage('CPNine.png')
  CPTen = loadImage('CPTen.png')
  CPEleven = loadImage('CPEleven.png')
  CPTwelve = loadImage('CPTwelve.png')
  CPThirteen = loadImage('CPThirteen.png')
  CPFourteen = loadImage('CPFourteen.png')
  CPFifteen = loadImage('CPFifteen.png')
  CPSixteen = loadImage('CPSixteen.png')
  CPSeventeen = loadImage('CPSeventeen.png')
  CPEighteen = loadImage('CPEighteen.png')
  CPNineteen = loadImage('CPNineteen.png')
  CPTwenty = loadImage('CPTwenty.png')
  CPTwentyone = loadImage('CPTwentyone.png')
  CPTwentytwo = loadImage('CPTwentytwo.png')
  CPTwentythree = loadImage('CPTwentythree.png')
  CPTwentyfour = loadImage('CPTwentyfour.png')



  //setup reset button
  // resetSketch()

}

// Serial Communication: We are connected and ready to go
function serverConnected() {
  print("We are connected!");
}

// Serial Communication: Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (let i = 0; i < thelist.length; i++) {
    // Display in the console
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is open!");
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  currentData = serial.read();
  // state = currentData;
  // console.log(currentData);
}

//defines state for text
let texton = true;

//defines state for button
let state = false;
state = currentData;
console.log(currentData);

//meow sound
let buttonSound;

//defines ellipse coordinates
let x = 300;
let y = 200;
let d = 50;

//setup random colors for background
let r;
let g;
let b;
let col = {
  r: 255,
  g: 255,
  b: 255,
}

//makes reset button work
// function resetSketch() {
//   background(255);
//   texton = true;
// }


// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + " " + portList[i]);
  }
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  let inData = serial.readString();
  if (inData == "x"){
  changeBackground();
  }
}

function draw() {
  fill(255, 0, 0);
  strokeWeight(5);
  stroke(0);
  ellipse(x, y, d, d);
  //button

  noStroke();
  let buttontext = 'Do NOT click the button.';
  push();
  fill(0);
  textSize(20);
  textAlign(CENTER);
  if (texton) {
    text(buttontext, 300, 300);
    pop();
  }
  //button text
}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < d / 2) {
  changeBackground ();
  }
}

function changeBackground() {
  state = !state;
  texton = false
  //mouse clicked on the button

  //randomize scenarios:
  r = int(random(1, 15));
  console.log(r);


  //play cat meow
  buttonSound.play();


  //setup random colors for backgrounds
  col.r = random(0, 255)
  col.g = random(0, 255)
  col.b = random(0, 255)



  if (r == 1) {
    background(col.r, col.g, col.b);
    image(emergingcat, 0, 0, 0);
  }

  if (r == 2) {
    background(col.r, col.g, col.b);
    image(blueeyedcat, 100, 0, 0);
  }

  if (r == 3) {
    background(col.r, col.g, col.b);
    image(catfood, 0, 0, 0);
  }

  if (r == 4) {
    background(col.r, col.g, col.b);
    image(scaredycat, 0, 0, 0);
  }

  if (r == 5) {
    background(col.r, col.g, col.b);
    image(cutecat, 250, 0, 0);
  }

  if (r == 6) {
    background(col.r, col.g, col.b);
    image(dopeycat, 35, 0, 0);
  }

  if (r == 7) {
    background(col.r, col.g, col.b);
    image(surprisedcat, 130, 0, 0);
  }

  if (r == 8) {
    push();
    background(col.r, col.g, col.b);
    textSize(50);
    textAlign(CENTER);
    fill(col.r * 2, col.g * 2, col.b * 2);
    strokeWeight(1);
    stroke(0);
    text("Do you like cats?", 300, 100);
    pop();
  }

  if (r == 9) {
    background(col.r, col.g, col.b);
    push();
    textSize(50);
    textAlign(CENTER);
    fill(col.r * 2, col.g * 2, col.b * 2);
    strokeWeight(1);
    stroke(0);
    text("Do you like cats?", 300, 350);
    pop();
  }

  if (r == 10) {
    background(col.r, col.g, col.b);
    image(CPOne, 5, height / 2, CPOne.width / 2, CPOne.height / 2);
    image(CPTwo, 350, height / 2, CPTwo.width / 2, CPTwo.height / 2);
    image(CPThree, 420, height / 10, CPThree.width / 3, CPThree.height / 3);
    image(CPFour, 50, height / 15, CPFour.width / 3, CPFour.height / 3);
    image(CPFive, 250, height / 5, CPFive.width / 3, CPFive.height / 3);
  }

  if (r == 11) {
    background(col.r, col.g, col.b);
    image(CPSix, -45, height * 0.5, CPSix.width / 2.5, CPSix.height / 2.5);
    image(CPSeven, 300, height / 2, CPSeven.width / 2, CPSeven.height / 2);
    image(CPEight, 300, height / 10, CPEight.width / 2, CPEight.height / 2);
    image(CPNine, -20, height / 15, CPNine.width / 3, CPNine.height / 3);
    image(CPTen, 200, height / 10, CPTen.width / 3, CPTen.height / 3);
  }

  if (r == 12) {
    background(col.r, col.g, col.b);
    image(CPEleven, 15, height * 0.6, CPEleven.width / 3, CPEleven.height / 3);
    image(CPTwelve, 250, height / 2, CPTwelve.width / 2, CPTwelve.height / 2);
    image(CPThirteen, 420, height / 6, CPThirteen.width / 3, CPThirteen.height / 3);
    image(CPFourteen, 0, height / 35, CPFourteen.width / 3, CPFourteen.height / 3);
    image(CPFifteen, 10, height / 4, CPFifteen.width / 3, CPFifteen.height / 3);
  }

  if (r == 13) {
    background(col.r, col.g, col.b);
    image(CPSixteen, 150, height * 0.6, CPSixteen.width / 3, CPSixteen.height / 3);
    image(CPSeventeen, 350, height / 2, CPSeventeen.width / 2, CPSeventeen.height / 2);
    image(CPEighteen, 400, height / 10, CPEighteen.width / 3, CPEighteen.height / 3);
    image(CPNineteen, 100, height / 35, CPNineteen.width / 2, CPNineteen.height / 2);
    image(CPTwenty, -60, height / 2.5, CPTwenty.width / 2, CPTwenty.height / 2);
  }

  if (r == 14) {
    background(col.r, col.g, col.b);
    image(CPTwentyone, 0, height / 2, CPTwentyone.width / 2, CPTwentyone.height / 2);
    image(CPTwentytwo, 300, height / 2, CPTwentytwo.width / 2, CPTwentytwo.height / 2);
    image(CPTwentythree, 350, height / 100, CPTwentythree.width / 2, CPTwentythree.height / 2);
    image(CPTwentyfour, 50, height / 35, CPTwentyfour.width / 2, CPTwentyfour.height / 2);
  }
}
