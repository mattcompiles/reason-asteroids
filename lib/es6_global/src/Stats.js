

import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";

function calcFps(state, timePassed) {
  var newTimeList = List.filter((function (time) {
            return +(time >= timePassed - 1000);
          }))(/* :: */[
        timePassed,
        state[/* updateTimes */4]
      ]);
  var newFps = List.length(newTimeList);
  var match = +(newFps === (state[/* fps */3] - 1 | 0) || newFps === (state[/* fps */3] + 1 | 0));
  var normalizedFps = match !== 0 ? state[/* fps */3] : newFps;
  return /* record */[
          /* shipPosition */state[/* shipPosition */0],
          /* shipAngle */state[/* shipAngle */1],
          /* shipSize */state[/* shipSize */2],
          /* fps */normalizedFps,
          /* updateTimes */newTimeList
        ];
}

export {
  calcFps ,
  
}
/* No side effect */
