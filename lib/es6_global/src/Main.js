

import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as Ship from "./Ship.js";
import * as Asteroid from "./Asteroid.js";
import * as Controls from "./Controls.js";
import * as Particle from "./Particle.js";
import * as Collision from "./Collision.js";
import * as Pervasives from "../../../node_modules/bs-platform/lib/es6/pervasives.js";
import * as Draw_canvas from "./Draw_canvas.js";
import * as PerformanceStats from "./PerformanceStats.js";

var screenSize = /* tuple */[
  700,
  700
];

var initialState_000 = /* ship */Ship.make(screenSize, /* None */0, /* () */0);

var initialState_001 = /* performanceStats */PerformanceStats.make(/* () */0);

var initialState_003 = /* asteroids : :: */[
  Asteroid.make(/* Large */0, screenSize),
  /* :: */[
    Asteroid.make(/* Large */0, screenSize),
    /* :: */[
      Asteroid.make(/* Large */0, screenSize),
      /* [] */0
    ]
  ]
];

var initialState = /* record */[
  initialState_000,
  initialState_001,
  /* screenSize */screenSize,
  initialState_003,
  /* particles : [] */0,
  /* wave */1,
  /* score */0,
  /* framesBetweenWave */0
];

function updateWave(state) {
  var match = Collision.checkCollisions(state);
  var screenSize = match[/* screenSize */2];
  var ship = Ship.update(match[/* ship */0], screenSize);
  var asteroids = List.map((function (param) {
          return Asteroid.update(screenSize, param);
        }), match[/* asteroids */3]);
  var particles = Particle.updateParticles(match[/* particles */4]);
  return /* record */[
          /* ship */ship,
          /* performanceStats */state[/* performanceStats */1],
          /* screenSize */state[/* screenSize */2],
          /* asteroids */asteroids,
          /* particles */particles,
          /* wave */state[/* wave */5],
          /* score */match[/* score */6],
          /* framesBetweenWave */state[/* framesBetweenWave */7]
        ];
}

function update(state) {
  var performanceStats = PerformanceStats.calcFps(state[/* performanceStats */1], window.performance.now());
  var match = List.length(state[/* asteroids */3]);
  var match$1 = state[/* framesBetweenWave */7];
  var newState;
  if (match !== 0) {
    newState = updateWave(state);
  } else if (match$1 > 100) {
    newState = /* record */[
      /* ship */Ship.resetPosition(state[/* ship */0], state[/* screenSize */2]),
      /* performanceStats */state[/* performanceStats */1],
      /* screenSize */state[/* screenSize */2],
      /* asteroids */Asteroid.makeMany(/* Large */0, state[/* screenSize */2], state[/* wave */5] + 3 | 0, /* [] */0),
      /* particles */state[/* particles */4],
      /* wave */state[/* wave */5] + 1 | 0,
      /* score */state[/* score */6],
      /* framesBetweenWave */0
    ];
  } else {
    var newrecord = updateWave(state).slice();
    newrecord[/* framesBetweenWave */7] = match$1 + 1 | 0;
    newState = newrecord;
  }
  var newrecord$1 = newState.slice();
  newrecord$1[/* performanceStats */1] = performanceStats;
  return newrecord$1;
}

function draw(ctx, state) {
  Draw_canvas.clearFrame(ctx, state[/* screenSize */2]);
  var match = state[/* ship */0][/* activeState */8];
  switch (match) {
    case 0 : 
        Ship.draw(ctx, state[/* ship */0]);
        break;
    case 1 : 
        break;
    case 2 : 
        Draw_canvas.gameOver(ctx, state[/* screenSize */2]);
        break;
    
  }
  List.iter((function (param) {
          return Asteroid.draw(ctx, param);
        }), state[/* asteroids */3]);
  List.iter((function (param) {
          return Particle.draw(ctx, param);
        }), state[/* particles */4]);
  Draw_canvas.lives(ctx, state[/* ship */0][/* lives */10]);
  return Draw_canvas.score(ctx, state[/* score */6], screenSize);
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
  updateWave ,
  update ,
  draw ,
  updateLoop ,
  run ,
  
}
/* initialState Not a pure module */
