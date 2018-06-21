

import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";

function calcFps(state, timePassed) {
  var newTimeList = List.filter((function (time) {
            return +(time >= timePassed - 1000);
          }))(/* :: */[
        timePassed,
        state[/* updateTimes */6]
      ]);
  var newFps = List.length(newTimeList);
  var match = +(newFps === (state[/* fps */5] - 1 | 0) || newFps === (state[/* fps */5] + 1 | 0));
  var normalizedFps = match !== 0 ? state[/* fps */5] : newFps;
  var newrecord = state.slice();
  newrecord[/* fps */5] = normalizedFps;
  newrecord[/* updateTimes */6] = newTimeList;
  return newrecord;
}

export {
  calcFps ,
  
}
/* No side effect */
