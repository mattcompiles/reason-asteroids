

import * as $$Math from "./Math.js";
import * as Controls from "./Controls.js";
import * as Draw_canvas from "./Draw_canvas.js";

function draw(ctx, param) {
  var shipSize = param[/* shipSize */2];
  var shipPosition = param[/* shipPosition */0];
  return Draw_canvas.triangle(ctx, shipSize[1], shipSize[0], shipPosition[0], shipPosition[1], param[/* shipAngle */1]);
}

function calcAngle(param, param$1) {
  var shipAngle = param[/* shipAngle */1];
  var left = param$1[/* left */0];
  var right = param$1[/* right */1];
  if (left !== 0) {
    if (right !== 0) {
      return shipAngle;
    } else {
      return shipAngle - 0.1;
    }
  } else if (right !== 0) {
    return shipAngle + 0.1;
  } else {
    return shipAngle;
  }
}

function normalizeAngle(a) {
  var match = +(a < 0);
  if (match !== 0) {
    return a * -1;
  } else {
    return a;
  }
}

function calcPosition(param, param$1) {
  var shipPosition = param[/* shipPosition */0];
  var up = param$1[/* up */2];
  if (up) {
    var angle = param[/* shipAngle */1] - $$Math.degreesToRadians(90);
    var speedX = 3 * Math.cos(angle);
    var speedY = 3 * Math.sin(angle);
    return /* tuple */[
            shipPosition[0] + speedX,
            shipPosition[1] + speedY
          ];
  } else {
    return shipPosition;
  }
}

function update(state) {
  var newAngle = calcAngle(state, Controls.activeInput);
  var newPosition = calcPosition(state, Controls.activeInput);
  return /* record */[
          /* shipPosition */newPosition,
          /* shipAngle */newAngle,
          /* shipSize */state[/* shipSize */2],
          /* fps */state[/* fps */3],
          /* updateTimes */state[/* updateTimes */4]
        ];
}

var speed = 3;

var turnSpeed = 0.1;

export {
  speed ,
  turnSpeed ,
  draw ,
  calcAngle ,
  normalizeAngle ,
  calcPosition ,
  update ,
  
}
/* No side effect */
