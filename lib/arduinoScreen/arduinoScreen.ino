
// include the library code:
#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
String input;

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("Gimme a subject");
  Serial.begin(9600);
}

void loop() {
  lcd.setCursor(0,1);
  
  if (Serial.available() > 0 ) {
    lcd.clear();
    input = Serial.readString();
    lcd.print(input);
    delay(1000);
    
    for (int positionCounter = 0; positionCounter < input.length() - 16; positionCounter++) {
      lcd.scrollDisplayLeft();
      delay(500);
    }

    delay(600);
    lcd.clear();

   }
 }

