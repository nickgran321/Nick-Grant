int questionsArray[] = {0, 0, 0, 0, 0, 0, 0, 0, 0};
int reading = 0;
int restartReading = 0;
int restart = 0;
boolean previousState[] = {0, 0, 0, 0, 0, 0, 0, 0, 0};

void setup() {

  Serial.begin(9600);
}

void loop() {
  restart = digitalRead(11);
  for (int i = 0; i < 9; i++) {
    reading = digitalRead(i + 2);
    if (reading == 1) {
      questionsArray[i] = reading;

    if (digitalRead(i + 2) == 0 && previousState [i] == 0) {
    //do nothing

  }
    if (digitalRead(i + 2) == 1 && previousState [i] == 0) {
    previousState[i] = true;
    //button is pressed
    }
    delay(10);
  }
  

  Serial.print (questionsArray[i]); 
  }
  Serial.println();


  //
  restartReading = digitalRead(11);
  if ( restartReading == 1) {// when the 11th photosensor is activated
//    stateChange = true;
    Serial.println ("reset");
    //Then we push the array which represents the questions into p5
    for (int j = 0; j < 9; j++) {
      questionsArray[j] = {false};
      //Serial.println (questionsArray[j]);
    }
    //    delay(50);
    //    //Serial.write (array)
    //  }
    //After we push the value into p5, we reset the array to 0 and wait for the user to start again

  }
    
}
