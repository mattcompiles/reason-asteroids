

import * as Vec from "./Vec.js";
import * as $$Math from "./Math.js";
import * as Controls from "./Controls.js";
import * as Draw_canvas from "./Draw_canvas.js";

var shipAngleModifier = $$Math.degreesToRadians(90);

function calcAngle(state, param) {
  var left = param[/* left */0];
  var right = param[/* right */1];
  var newrecord = state.slice();
  newrecord[/* shipAngle */3] = left !== 0 ? (
      right !== 0 ? state[/* shipAngle */3] : state[/* shipAngle */3] - 0.1
    ) : (
      right !== 0 ? state[/* shipAngle */3] + 0.1 : state[/* shipAngle */3]
    );
  return newrecord;
}

function calcThrust(state, param) {
  var up = param[/* up */2];
  var newrecord = state.slice();
  newrecord[/* shipThrust */2] = up !== 0 ? Vec.angle(Vec.length(state[/* shipThrust */2], 0.1), state[/* shipAngle */3] - shipAngleModifier) : Vec.length(state[/* shipThrust */2], 0);
  return newrecord;
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

function calcVelocity(state, param) {
  var up = param[/* up */2];
  var newrecord = state.slice();
  newrecord[/* shipVelocity */1] = normalizeVelocity(up !== 0 ? Vec.add(state[/* shipVelocity */1], state[/* shipThrust */2]) : Vec.multiply(state[/* shipVelocity */1], 0.97));
  return newrecord;
}

function calcPosition(state) {
  var newrecord = state.slice();
  newrecord[/* shipPosition */0] = Vec.add(state[/* shipPosition */0], state[/* shipVelocity */1]);
  return newrecord;
}

function update(state) {
  return calcPosition(calcVelocity(calcThrust(calcAngle(state, Controls.activeInput), Controls.activeInput), Controls.activeInput));
}

function draw(ctx, param) {
  var shipSize = param[/* shipSize */4];
  var shipPosition = param[/* shipPosition */0];
  return Draw_canvas.triangle(ctx, shipSize[1], shipSize[0], shipPosition[/* x */0], shipPosition[/* y */1], param[/* shipAngle */3]);
}

var acceleration = 0.01;

var friction = 0.97;

var turnVelocity = 0.1;

var maxVelocity = 10;

export {
  acceleration ,
  friction ,
  turnVelocity ,
  maxVelocity ,
  shipAngleModifier ,
  calcAngle ,
  calcThrust ,
  normalizeVelocity ,
  calcVelocity ,
  calcPosition ,
  update ,
  draw ,
  
}
/* shipAngleModifier Not a pure module */
