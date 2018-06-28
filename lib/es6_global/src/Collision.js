

import * as Vec from "./Vec.js";
import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as Ship from "./Ship.js";
import * as Asteroid from "./Asteroid.js";
import * as Particle from "./Particle.js";
import * as Pervasives from "../../../node_modules/bs-platform/lib/es6/pervasives.js";

function detect(a, b) {
  var posB = b[0];
  var posA = a[0];
  var diffVec = Vec.make(posA[/* x */0] - posB[/* x */0], posA[/* y */1] - posB[/* y */1]);
  return +(Vec.getLength(diffVec) < a[1] + b[1]);
}

function checkAsteroidCollision(asteroid, bullets) {
  var match = List.partition((function (bullet) {
          return detect(/* tuple */[
                      asteroid[/* position */0],
                      asteroid[/* collisionRadius */6]
                    ], /* tuple */[
                      bullet[/* position */1],
                      bullet[/* radius */2]
                    ]);
        }), bullets);
  var match$1 = List.length(match[0]);
  if (match$1 !== 0) {
    var match$2 = asteroid[/* sizeType */2];
    var tmp;
    switch (match$2) {
      case 0 : 
          tmp = 10;
          break;
      case 1 : 
          tmp = 25;
          break;
      case 2 : 
          tmp = 50;
          break;
      
    }
    return /* tuple */[
            Asteroid.destroy(asteroid),
            match[1],
            Particle.makeAsteroidExplosion(asteroid[/* position */0]),
            tmp
          ];
  } else {
    return /* tuple */[
            /* :: */[
              asteroid,
              /* [] */0
            ],
            bullets,
            /* [] */0,
            0
          ];
  }
}

function checkBulletAsteroidCollisions(_asteroids, _safeAsteroids, _bullets, _particles, _score) {
  while(true) {
    var score = _score;
    var particles = _particles;
    var bullets = _bullets;
    var safeAsteroids = _safeAsteroids;
    var asteroids = _asteroids;
    if (asteroids) {
      var match = checkAsteroidCollision(asteroids[0], bullets);
      _score = score + match[3] | 0;
      _particles = Pervasives.$at(particles, match[2]);
      _bullets = match[1];
      _safeAsteroids = Pervasives.$at(safeAsteroids, match[0]);
      _asteroids = asteroids[1];
      continue ;
      
    } else {
      return /* tuple */[
              safeAsteroids,
              bullets,
              particles,
              score
            ];
    }
  };
}

function checkShipAsteroidCollisions(asteroids, ship) {
  var match = List.partition((function (asteroid) {
          return detect(/* tuple */[
                      asteroid[/* position */0],
                      asteroid[/* collisionRadius */6]
                    ], /* tuple */[
                      ship[/* position */0],
                      ship[/* collisionRadius */7]
                    ]);
        }), asteroids);
  var hitAsteroids = match[0];
  var match$1 = ship[/* activeState */8];
  if (match$1 !== 0) {
    return /* tuple */[
            asteroids,
            ship
          ];
  } else if (hitAsteroids) {
    return /* tuple */[
            Pervasives.$at(Asteroid.destroy(hitAsteroids[0]), Pervasives.$at(hitAsteroids[1], match[1])),
            Ship.destroy(ship)
          ];
  } else {
    return /* tuple */[
            asteroids,
            ship
          ];
  }
}

function checkCollisions(state) {
  var match = checkBulletAsteroidCollisions(state[/* asteroids */3], /* [] */0, state[/* ship */0][/* bullets */6], state[/* particles */4], 0);
  var asteroids = match[0];
  var match$1 = state[/* ship */0][/* invincableFrames */11] === 0 ? checkShipAsteroidCollisions(asteroids, state[/* ship */0]) : /* tuple */[
      asteroids,
      state[/* ship */0]
    ];
  var newrecord = match$1[1].slice();
  return /* record */[
          /* ship */(newrecord[/* bullets */6] = match[1], newrecord),
          /* performanceStats */state[/* performanceStats */1],
          /* screenSize */state[/* screenSize */2],
          /* asteroids */match$1[0],
          /* particles */match[2],
          /* wave */state[/* wave */5],
          /* score */state[/* score */6] + match[3] | 0,
          /* framesBetweenWave */state[/* framesBetweenWave */7]
        ];
}

export {
  detect ,
  checkAsteroidCollision ,
  checkBulletAsteroidCollisions ,
  checkShipAsteroidCollisions ,
  checkCollisions ,
  
}
/* Ship Not a pure module */
