


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

export {
  normalizePosition ,
  
}
/* No side effect */
