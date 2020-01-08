const Oled = require('oled-disp');
const oled = new Oled({ width: 128, height: 64, dcPin: 23, rstPin : 24});

oled.begin(function(){
  oled.clearDisplay();
  
  // hangul(kor) and eng
  oled.setCursor(1, 1);
  oled.writeString(2, "안녕,Hi", 2, true);
 
  // install png-to-lcd and only 128x64 png file
  /*
  const png = require('png-to-lcd');
  png("test.png", false, function(err, data){
    oled.buffer = data
    oled.update()
  });
  */
});
