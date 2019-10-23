var serial; // variable to hold an instance of the serialport library
var portName = '/dev/tty.usbmodem14201';  // fill in your serial port name here 
var inData;                             // for incoming serial data
var currentText = "SLIDE THE FLASHLIGHT ON THE SPIRIT BOARD...IF YOU DARE. IF YOUR QUESTION DOESN'T MAKE SENSE, TRY AGAIN.";

function setup() {
  createCanvas(570, 650);
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);  // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
  
    song.loop()
}

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
  let inputString = serial.readStringUntil('\r\n');
  if (inputString.length > 0) {
      switch(inputString) {
        
      case "000000000":
        currentText = "SLIDE THE FLASHLIGHT ON THE SPIRIT BOARD...IF YOU DARE. IF YOUR QUESTION DOESN'T MAKE SENSE, TRY AGAIN."
        console.log("Reset");   
        break;      
          
      case "100010110":
        currentText = "I DIED ON A COLD WINDY DAY ON DECEMBER 12, 2005. MY FAT CAT MR. MITTENS SAT ON ME. 'TWAS QUITE THE NIGHT!"
        console.log("When did you die");   
        break;
        
      case "100010101":
        currentText = "WHAT A PECULIAR QUESTION! I FELT WHEN I WAS ALIVE. I ENJOYED FEELING. I STILL DO...KIND OF."
        console.log("When did you feel");
        break;   
        
      case "010010101": 
        currentText = "WHO DID I FEEL?! I FELT ALL SORTS OF PEOPLE WHEN I WAS ALIVE. I FELT BRITNEY SPEARS BY ACCIDENT IN A CHILI'S BATHROOM. IT'S A LONG STORY..."
        console.log("Who did you feel");
        break;
        
      case "010001100": 
        currentText = "MY NAME IS NATE, BUT MY FRIENDS CALL ME FIJI. YOU CAN CALL ME LOUISE. I WAS A PRIEST IN A SMALL TOWN IN MISSISSIPPI BEFORE I FOUND MY TRUE CALLING TO BE A FOLK SINGER. I WAS SUCCESSFUL FOR A VERY BRIEF PERIOD OF TIME."
        console.log("Who are you");
        break;
        
      case "001001100": 
        currentText = "WHERE AM I?! I AM IN NEITHER HELL NOR HEAVEN. I'M NOT IN PURGATORY EITHER. I AM IN THE WALLS, THE CEILING, AND THE AIR YOU BREATHE. I AM THE MOUISTURE IN YOUR BURGER KING WHOPPER."
        console.log("Where are you");
        break;
        
     case "001010110": 
        currentText = "WOW, WHAT A PERSONAL QUESTION. I DIED IN MY BED AT AGE 32. I STILL REMEMBER THE THREAD COUNT OF MY TEMPURPEDIC MATTRESS. 400 THREAD COUNT...OR WAS IT 500?"
        console.log("Where did you die");
        break;
        
     case "001010101": 
        currentText = "I AM HONOROED YOU ASKED SUCH A QUESTION. I FELT EVERY WAKING MINUTE OF MY LIFE. I FELT HAPPY, ANGRY, SAD, FRUSTRATED, EXCITED, AND EVERY OTHER EMOTION YOU CAN THINK OF. MY ADVICE FOR THE MORTALS: DO NOT HIDE HOW YOU FEEL!"
        console.log("Where did you feel");
        break;
        
      case "000101100": 
        currentText = "I'M DOING ALRIGHT, THANKS FOR ASKING. TO BE HONEST, I'VE BEEN BETTER. WHERE I AM, TIME GOES BY A LITTLE TOO SLOWLY. IN MY FREE TIME I ENJOY READING CHOOSE YOUR OWN ADVENTURE BOOKS AND LISTENING TO EXPERIMENTAL JAZZ."
        console.log("How are you");
        break;
        
      case "000110110": 
        currentText = "MY FAT CAT SAT ON ME. I ALWAYS KNEW MR. MITTENS WOULD BE THE DEATH OF ME. UNFORTUNATELY MY WIFE WAS NOT HOME TO PUSH THE CAT AWAY FROM MY FACE. SHE WENT ON A SKI TRIP SHE WON TO ALASKA. SHE NEVER SKIED SO AMAZING IN HER LIFE."
        console.log("How did you die");
        break;
        
      case "000110101": 
        currentText = "I'M SORRY, I MAY BE MISUNDERSTANDING YOUR QUESTION. WHEN I DIED, I DIDN'T FEEL ANYTHING. PERHAPS I FELT ALARMED. I DON'T REMEMBER EXACTLY. I CAN REMEMBER THE CAPITALS OF EVERY STATE THOUGH."
        console.log("How did you feel");
        break;
        
      case "100000000": 
        currentText = "WHEN..."
        console.log("WHEN...");
        break;   
  
      case "100010000": 
        currentText = "WHEN...DID..."
        console.log("WHEN...DID...");
        break;  
        
      case "100010100": 
        currentText = "WHEN...DID...YOU..."
        console.log("WHEN...DID...YOU...");
        break;  
        
      case "010000000": 
        currentText = "WHO..."
        console.log("WHO...");
        break;
        
      case "010010000": 
        currentText = "WHO...DID..."
        console.log("WHO...DID...");
        break;  
        
      case "010010100": 
        currentText = "WHO...DID...YOU..."
        console.log("WHO...DID...YOU...");
        break; 
        
     case "010001000": 
        currentText = "WHO...ARE..."
        console.log("WHO...ARE...");
        break;  
        
     case "001000000": 
        currentText = "WHERE..."
        console.log("WHERE...");
        break;  
        
     case "001001000": 
        currentText = "WHERE...ARE..."
        console.log("WHERE...ARE...");
        break;   
        
     case "001010000": 
        currentText = "WHERE...DID..."
        console.log("WHERE...DID...");
        break;    
        
     case "001010100": 
        currentText = "WHERE...DID...YOU..."
        console.log("WHERE...DID...YOU...");
        break; 
        
     case "000100000": 
        currentText = "HOW..."
        console.log("HOW...");
        break;  
        
     case "000101000": 
        currentText = "HOW...ARE..."
        console.log("HOW...ARE...");
        break;   
        
     case "000110000": 
        currentText = "HOW...DID..."
        console.log("HOW...DID...");
        break;  
        
     case "000110100": 
        currentText = "HOW...DID...YOU..."
        console.log("HOW...DID...YOU...");
        break;    
        
     }
  }
  // inData = Number(serial.read());
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}

function preload(){
  graveyardimage = loadImage('graveyard1.jpg');
  song = loadSound("Scary_Music.mp3");
}

function draw() {
  background(0);
  // fill(255);
  // text("sensor value: " + inData, 30, 30);
  fill('yellow');
  image(graveyardimage, 0, height/1000, graveyardimage.width/1.5,     graveyardimage.height / 1.5);
  textAlign(CENTER, CENTER)
  textSize(35);
  strokeWeight(4);
  stroke(0);
  textFont('Nanum Pen Script');
  text(currentText, 73, 0, width/1.35, height);
}
