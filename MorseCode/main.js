var Gpio = require('onoff').Gpio,
   led = new Gpio(4, 'out');

   

var text = "sos"

var MorseCode = {
   pattern: {
      'a': '._',
      'b': '_...',
      'c': '_._.',
      'd': '_..',
      'e': '.',
      'f': '.._.',
      'g': '__.',
      'h': '....',
      'i': '..',
      'j': '.___',
      'k': '_._',
      'l': '._..',
      'm': '__',
      'n': '_.',
      'o': '___',
      'p': '.__.',
      'q': '__._',
      'r': '._.',
      's': '...',
      't': '_',
      'u': '.._',
      'v': '..._',
      'w': '.__',
      'x': '_.._',
      'y': '_.__',
      'z': '__..',
      '1': '.____',
      '2': '..___',
      '3': '...__',
      '4': '...._',
      '5': '.....',
      '6': '_....',
      '7': '__...',
      '8': '___..',
      '9': '____.',
      '0': '_____'
   },
   active: function(t) {
      led.writeSync(1);
   },
   inactive: function() {
      led.writeSync(0);
   }
}

var _t = text.split('');

for(var i = 0; i < _t.length; i++) {
   var _l = _t[i];
      var _c = MorseCode.pattern[_l].split('');
      sleep(4);
      console.log('Literka '+ _l);
      for(var j = 0; j < _c.length; j++) {
         console.log("Kod morse'a  "+ _c[j]);
         MorseCode.active();
         if(_c[j] == '.') {
            sleep(1);
            MorseCode.inactive();
            sleep(2);
         }
         else {
            sleep(500);
            MorseCode.inactive();
            sleep(2);
         }
      }
   
};