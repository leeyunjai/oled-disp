const Oled = require('oled-disp');
const oled = new Oled({ width: 128, height: 64, dcPin: 23, rstPin : 24});

oled.begin(function(){
  oled.clearDisplay();
  oled.setCursor(1, 1);
  oled.writeString(2, "안녕,Hi", 2, true);
});
