

import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as Ship from "./Ship.js";
import * as Asteroid from "./Asteroid.js";
import * as Controls from "./Controls.js";
import * as Collision from "./Collision.js";
import * as Pervasives from "../../../node_modules/bs-platform/lib/es6/pervasives.js";
import * as Draw_canvas from "./Draw_canvas.js";
import * as PerformanceStats from "./PerformanceStats.js";

var screenSize = /* tuple */[
  700,
  700
];

var initialState_000 = /* ship */Ship.make(screenSize);

var initialState_001 = /* performanceStats */PerformanceStats.make(/* () */0);

var initialState_003 = /* asteroids : :: */[
  Asteroid.make(/* Large */0, screenSize),
  /* :: */[
    Asteroid.make(/* Medium */1, screenSize),
    /* :: */[
      Asteroid.make(/* Small */2, screenSize),
      /* [] */0
    ]
  ]
];

var initialState = /* record */[
  initialState_000,
  initialState_001,
  /* screenSize */screenSize,
  initialState_003
];

function update(state) {
  var performanceStats = PerformanceStats.calcFps(state[/* performanceStats */1], window.performance.now());
  var match = Collision.checkBulletAsteroidCollisions(state[/* asteroids */3], /* [] */0, state[/* ship */0][/* bullets */6]);
  var asteroids = match[0];
  var ship = Ship.update(Collision.checkShipAsteroidCollisions(asteroids, state[/* ship */0]), match[1], state[/* screenSize */2]);
  var asteroids$1 = List.map((function (param) {
          return Asteroid.update(screenSize, param);
        }), asteroids);
  return /* record */[
          /* ship */ship,
          /* performanceStats */performanceStats,
          /* screenSize */state[/* screenSize */2],
          /* asteroids */asteroids$1
        ];
}

function draw(ctx, state) {
  Draw_canvas.clearFrame(ctx, state[/* screenSize */2]);
  Ship.draw(ctx, state[/* ship */0]);
  List.iter((function (param) {
          return Asteroid.draw(ctx, param);
        }), state[/* asteroids */3]);
  return Draw_canvas.fps(ctx, state[/* performanceStats */1][/* fps */0]);
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
