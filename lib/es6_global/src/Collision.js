

import * as Vec from "./Vec.js";
import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as Ship from "./Ship.js";
import * as Asteroid from "./Asteroid.js";

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
    return /* tuple */[
            Asteroid.destroy(asteroid),
            match[1]
          ];
  } else {
    return /* tuple */[
            /* :: */[
              asteroid,
              /* [] */0
            ],
            bullets
          ];
  }
}

function checkBulletAsteroidCollisions(_asteroids, _safeAsteroids, _bullets) {
  while(true) {
    var bullets = _bullets;
    var safeAsteroids = _safeAsteroids;
    var asteroids = _asteroids;
    if (asteroids) {
      var match = checkAsteroidCollision(asteroids[0], bullets);
      _bullets = match[1];
      _safeAsteroids = List.append(safeAsteroids, match[0]);
      _asteroids = asteroids[1];
      continue ;
      
    } else {
      return /* tuple */[
              safeAsteroids,
              bullets
            ];
    }
  };
}

function checkShipAsteroidCollisions(asteroids, ship) {
  var match = List.exists((function (asteroid) {
          return detect(/* tuple */[
                      asteroid[/* position */0],
                      asteroid[/* collisionRadius */6]
                    ], /* tuple */[
                      ship[/* position */0],
                      ship[/* collisionRadius */7]
                    ]);
        }), asteroids);
  if (match !== 0) {
    return Ship.destroy(ship);
  } else {
    return ship;
  }
}

export {
  detect ,
  checkAsteroidCollision ,
  checkBulletAsteroidCollisions ,
  checkShipAsteroidCollisions ,
  
}
/* Ship Not a pure module */
