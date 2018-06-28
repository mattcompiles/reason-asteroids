

import * as Vec from "./Vec.js";
import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as $$Math from "./Math.js";
import * as Utils from "./Utils.js";
import * as Draw_canvas from "./Draw_canvas.js";

function makeParticles(position, _particlesLeft, _particles) {
  while(true) {
    var particles = _particles;
    var particlesLeft = _particlesLeft;
    if (particlesLeft === 0) {
      return particles;
    } else {
      _particles = /* :: */[
        /* record */[
          /* position */position,
          /* radius */$$Math.random(5, 8),
          /* velocity */Utils.randomVelocity($$Math.random(0.5, 2))
        ],
        particles
      ];
      _particlesLeft = particlesLeft - 1 | 0;
      continue ;
      
    }
  };
}

function makeAsteroidExplosion(position) {
  return makeParticles(position, 15, /* [] */0);
}

function update(param) {
  var velocity = param[/* velocity */2];
  return /* record */[
          /* position */Vec.add(param[/* position */0], velocity),
          /* radius */param[/* radius */1] - 0.2,
          /* velocity */velocity
        ];
}

function updateParticles(particles) {
  return List.filter((function (param) {
                  return +(param[/* radius */1] > 0);
                }))(List.map(update, particles));
}

function draw(ctx, param) {
  var position = param[/* position */0];
  return Draw_canvas.arc(ctx, position[/* x */0], position[/* y */1], param[/* radius */1], /* Stroke */0);
}

var asteroidExplosionParticles = 15;

export {
  asteroidExplosionParticles ,
  makeParticles ,
  makeAsteroidExplosion ,
  update ,
  updateParticles ,
  draw ,
  
}
/* Math Not a pure module */
