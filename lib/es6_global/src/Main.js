

import * as $$Math from "./Math.js";
import * as Ship from "./Ship.js";
import * as Stats from "./Stats.js";
import * as Controls from "./Controls.js";
import * as Pervasives from "../../../node_modules/bs-platform/lib/es6/pervasives.js";
import * as Draw_canvas from "./Draw_canvas.js";

var initialState_000 = /* shipPosition : tuple */[
  75,
  150
];

var initialState_001 = /* shipAngle */$$Math.degreesToRadians(0);

var initialState_002 = /* shipSize : tuple */[
  36,
  60
];

var initialState = /* record */[
  initialState_000,
  initialState_001,
  initialState_002,
  /* fps */0,
  /* updateTimes : [] */0
];

function update(state) {
  return Ship.update(Stats.calcFps(state, window.performance.now()));
}

function draw(ctx, state) {
  Draw_canvas.clearFrame(ctx);
  Ship.draw(ctx, state);
  return Draw_canvas.fps(ctx, state[/* fps */3]);
}

function updateLoop(canvas, state, _) {
  var newState = update(state);
  draw(canvas, newState);
  requestAnimationFrame((function (param) {
          return updateLoop(canvas, newState, param);
        }));
  return /* () */0;
}

function run() {
  var match = document.getElementById("canvas");
  var canvas = match !== null ? match : (console.log("cant find canvas"), Pervasives.failwith("fail"));
  var context = canvas.getContext("2d");
  document.addEventListener("keydown", Controls.keydown, /* true */1);
  document.addEventListener("keyup", Controls.keyup, /* true */1);
  return updateLoop(context, initialState, 0.0);
}

window.onload = (function () {
    run(/* () */0);
    return /* true */1;
  });

export {
  initialState ,
  update ,
  draw ,
  updateLoop ,
  run ,
  
}
/* initialState Not a pure module */
