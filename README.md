# oled-disp
This is package of oled(ssd1306) for Raspberrypi.
 - support hangul(kor) end eng. (hangul(kor): 8x8, eng : 5x8)
 - only test SPI, 128x64(ssd1306)

# Main functions
 - begin
 - clearDisplay
 - setCursor(x,y)
 - writeString(size, string, color, true) 
 - update()
 - drawBitmap()

# Example
const Oled = require('oled-disp');

oled.begin(function(){
  oled.clearDisplay();
  oled.setCursor(1, 1);
  oled.writeString(2, "안녕 Hi", 2, true);
});
