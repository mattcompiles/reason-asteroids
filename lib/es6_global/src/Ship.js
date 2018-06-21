

import * as Vec from "./Vec.js";
import * as $$Math from "./Math.js";
import * as Utils from "./Utils.js";
import * as Bullet from "./Bullet.js";
import * as Controls from "./Controls.js";
import * as Draw_canvas from "./Draw_canvas.js";

var shipAngleModifier = $$Math.degreesToRadians(90);

function make() {
  return /* record */[
          /* position */Vec.make(75, 150),
          /* velocity */Vec.make(0, 0),
          /* thrust */Vec.make(0, 0),
          /* angle */$$Math.degreesToRadians(0),
          /* size : tuple */[
            36,
            60
          ]
        ];
}

function calcAngle(ship, param) {
  var left = param[/* left */0];
  var right = param[/* right */1];
  return /* record */[
          /* position */ship[/* position */0],
          /* velocity */ship[/* velocity */1],
          /* thrust */ship[/* thrust */2],
          /* angle */left !== 0 ? (
              right !== 0 ? ship[/* angle */3] : ship[/* angle */3] - 0.1
            ) : (
              right !== 0 ? ship[/* angle */3] + 0.1 : ship[/* angle */3]
            ),
          /* size */ship[/* size */4]
        ];
}

function calcThrust(ship, param) {
  var up = param[/* up */2];
  return /* record */[
          /* position */ship[/* position */0],
          /* velocity */ship[/* velocity */1],
          /* thrust */up !== 0 ? Vec.angle(Vec.length(ship[/* thrust */2], 0.1), ship[/* angle */3] - shipAngleModifier) : Vec.length(ship[/* thrust */2], 0),
          /* angle */ship[/* angle */3],
          /* size */ship[/* size */4]
        ];
}

function normalizeVelocity(velocity) {
  var vel = Vec.getLength(velocity);
  if (vel > 10) {
    return Vec.length(velocity, 10);
  } else if (vel < 0.01) {
    return Vec.length(velocity, 0);
  } else {
    return velocity;
  }
}

function calcVelocity(ship, param) {
  var up = param[/* up */2];
  return /* record */[
          /* position */ship[/* position */0],
          /* velocity */normalizeVelocity(up !== 0 ? Vec.add(ship[/* velocity */1], ship[/* thrust */2]) : Vec.multiply(ship[/* velocity */1], 0.94)),
          /* thrust */ship[/* thrust */2],
          /* angle */ship[/* angle */3],
          /* size */ship[/* size */4]
        ];
}

function calcPosition(ship, screenSize) {
  return /* record */[
          /* position */Utils.normalizePosition(screenSize, Vec.add(ship[/* position */0], ship[/* velocity */1])),
          /* velocity */ship[/* velocity */1],
          /* thrust */ship[/* thrust */2],
          /* angle */ship[/* angle */3],
          /* size */ship[/* size */4]
        ];
}

function update(ship, screenSize) {
  return calcPosition(calcVelocity(calcThrust(calcAngle(ship, Controls.activeInput), Controls.activeInput), Controls.activeInput), screenSize);
}

function shoot(ship, bullets) {
  return /* :: */[
          Bullet.make(ship[/* position */0], ship[/* angle */3]),
          bullets
        ];
}

function draw(ctx, param) {
  var size = param[/* size */4];
  var position = param[/* position */0];
  return Draw_canvas.triangle(ctx, size[1], size[0], position[/* x */0], position[/* y */1], param[/* angle */3]);
}

var friction = 0.94;

var turnVelocity = 0.1;

var maxVelocity = 10;

export {
  friction ,
  turnVelocity ,
  maxVelocity ,
  shipAngleModifier ,
  make ,
  calcAngle ,
  calcThrust ,
  normalizeVelocity ,
  calcVelocity ,
  calcPosition ,
  update ,
  shoot ,
  draw ,
  
}
/* shipAngleModifier Not a pure module */
