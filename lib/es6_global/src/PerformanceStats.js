

import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";

function make() {
  return /* record */[
          /* fps */0,
          /* updateTimes : [] */0
        ];
}

function calcFps(param, timePassed) {
  var fps = param[/* fps */0];
  var newTimeList = List.filter((function (time) {
            return +(time >= timePassed - 1000);
          }))(/* :: */[
        timePassed,
        param[/* updateTimes */1]
      ]);
  var newFps = List.length(newTimeList);
  var match = +(newFps === (fps - 1 | 0) || newFps === (fps + 1 | 0));
  var normalizedFps = match !== 0 ? fps : newFps;
  return /* record */[
          /* fps */normalizedFps,
          /* updateTimes */newTimeList
        ];
}

export {
  make ,
  calcFps ,
  
}
/* No side effect */
