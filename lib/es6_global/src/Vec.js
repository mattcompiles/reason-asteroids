


function make(x, y) {
  return /* float array */[
          x,
          y
        ];
}

function add(a, b) {
  return /* float array */[
          a[/* x */0] + b[/* x */0],
          a[/* y */1] + b[/* y */1]
        ];
}

function multiply(a, value) {
  return /* float array */[
          a[/* x */0] * value,
          a[/* y */1] * value
        ];
}

function getAngle(param) {
  return Math.atan2(param[/* y */1], param[/* x */0]);
}

function getLength(param) {
  var y = param[/* y */1];
  var x = param[/* x */0];
  return Math.sqrt(x * x + y * y);
}

function length(vec, length$1) {
  var angle = getAngle(vec);
  return /* float array */[
          Math.cos(angle) * length$1,
          Math.sin(angle) * length$1
        ];
}

function angle(vec, angle$1) {
  var length = getLength(vec);
  return /* float array */[
          Math.cos(angle$1) * length,
          Math.sin(angle$1) * length
        ];
}

export {
  make ,
  add ,
  multiply ,
  getAngle ,
  getLength ,
  length ,
  angle ,
  
}
/* No side effect */
