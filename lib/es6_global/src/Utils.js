


function normalizePosition(screenSize, position) {
  var height = screenSize[1];
  var width = screenSize[0];
  var x = position[/* x */0];
  var y = position[/* y */1];
  return /* float array */[
          x > width ? 0 : (
              x < 0 ? width : x
            ),
          y > height ? 0 : (
              y < 0 ? height : y
            )
        ];
}

function outOfScreen(screenSize, param) {
  var y = param[/* y */1];
  var x = param[/* x */0];
  if (x > screenSize[0] || x < 0 || y > screenSize[1]) {
    return /* true */1;
  } else {
    return +(y < 0);
  }
}

export {
  normalizePosition ,
  outOfScreen ,
  
}
/* No side effect */
