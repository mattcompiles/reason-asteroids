

import * as Vec from "./Vec.js";

function detect(a, b) {
  var posB = b[0];
  var posA = a[0];
  var diffVec = Vec.make(posA[/* x */0] - posB[/* x */0], posA[/* y */1] - posB[/* y */1]);
  return +(Vec.getLength(diffVec) < a[1] + b[1]);
}

export {
  detect ,
  
}
/* No side effect */
