

import * as Vec from "./Vec.js";
import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as $$Math from "./Math.js";
import * as Ship from "./Ship.js";
import * as $$Array from "../../../node_modules/bs-platform/lib/es6/array.js";
import * as Stats from "./Stats.js";
import * as Bullet from "./Bullet.js";
import * as Asteroid from "./Asteroid.js";
import * as Controls from "./Controls.js";
import * as Pervasives from "../../../node_modules/bs-platform/lib/es6/pervasives.js";
import * as Draw_canvas from "./Draw_canvas.js";

var screenSize = /* tuple */[
  700,
  700
];

var initialState_000 = /* shipPosition */Vec.make(75, 150);

var initialState_001 = /* shipVelocity */Vec.make(0, 0);

var initialState_002 = /* shipThrust */Vec.make(0, 0);

var initialState_003 = /* shipAngle */$$Math.degreesToRadians(0);

var initialState_004 = /* shipSize : tuple */[
  36,
  60
];

var initialState_007 = /* screenSize : tuple */[
  700,
  700
];

var initialState_008 = /* asteroids : array */[
  Asteroid.make(/* Large */0, screenSize),
  Asteroid.make(/* Large */0, screenSize),
  Asteroid.make(/* Large */0, screenSize)
];

var initialState = /* record */[
  initialState_000,
  initialState_001,
  initialState_002,
  initialState_003,
  initialState_004,
  /* fps */0,
  /* updateTimes : [] */0,
  initialState_007,
  initialState_008,
  /* bullets : [] */0
];

function update(state) {
  var newState = Ship.update(Stats.calcFps(state, window.performance.now()));
  var asteroids = $$Array.map((function (param) {
          return Asteroid.update(screenSize, param);
        }), newState[/* asteroids */8]);
  var match = Controls.activeInput[/* shoot */3];
  var bullets = match !== 0 ? List.map(Bullet.update, Ship.shoot(newState)) : List.map(Bullet.update, newState[/* bullets */9]);
  var newrecord = newState.slice();
  newrecord[/* asteroids */8] = asteroids;
  newrecord[/* bullets */9] = bullets;
  return newrecord;
}

function draw(ctx, state) {
  Draw_canvas.clearFrame(ctx, state);
  Ship.draw(ctx, state);
  $$Array.iter((function (param) {
          return Asteroid.draw(ctx, param);
        }), state[/* asteroids */8]);
  List.iter((function (param) {
          return Bullet.draw(ctx, param);
        }), state[/* bullets */9]);
  return Draw_canvas.fps(ctx, state[/* fps */5]);
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
  screenSize ,
  initialState ,
  update ,
  draw ,
  updateLoop ,
  run ,
  
}
/* initialState Not a pure module */
