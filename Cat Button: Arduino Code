const int buttonPin = 2;     // the number of the pushbutton pin
boolean previousButtonState = false;         // variable flag for when the pushbutton goes low

void setup() {
  pinMode(buttonPin, INPUT);    // initialize the pushbutton pin as an input:
  Serial.begin(9600);
}

void loop() {

  if (digitalRead(buttonPin) == 0 && previousButtonState == 0) {
    //do nothing

  }
  if (digitalRead(buttonPin) == 1 && previousButtonState == 0) {
    previousButtonState = true;
    //button is pressed

    Serial.print("x");
    
  }
  if (digitalRead(buttonPin) == 0 && previousButtonState == 1) {
    previousButtonState = false;
    //I just released
  }
  if (digitalRead(buttonPin) == 1 && previousButtonState == 1) {
    //do nothing
  }

//  Serial.println(previousButtonState);


}
