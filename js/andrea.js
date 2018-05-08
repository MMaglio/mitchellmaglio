var allowedKeys = {
  65: 'a',
  78: 'n',
  68: 'd',
  82: 'r',
  69: 'e',
};

var andreaCode = ['a', 'n', 'd', 'r', 'e', 'a'];

var andreaCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = andreaCode[andreaCodePosition];

  if (key == requiredKey) {

    andreaCodePosition++;

    if (andreaCodePosition == andreaCode.length) {
      activateAndrea();
      andreaCodePosition = 0;
    }
  } else {
    andreaCodePosition = 0;
  }
});

function activateAndrea() {

  var audio = new Audio('audio/andrea.mp4');
  audio.play();

}
