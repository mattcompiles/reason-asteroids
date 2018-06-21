


var doublePI = Math.PI * 2;

function degreesToRadians(angle) {
  return angle * (Math.PI / 180);
}

function random(min, max) {
  return Math.random() * max + min;
}

export {
  doublePI ,
  degreesToRadians ,
  random ,
  
}
/* doublePI Not a pure module */
