

import * as Vec from "./Vec.js";
import * as $$Math from "./Math.js";
import * as Draw_canvas from "./Draw_canvas.js";

var shipAngleModifier = $$Math.degreesToRadians(90);

function make(position, angle) {
  return /* record */[
          /* velocity */Vec.angle(Vec.make(10, 10), angle - shipAngleModifier),
          /* position */position,
          /* radius */2
        ];
}

function update(state) {
  return /* record */[
          /* velocity */state[/* velocity */0],
          /* position */Vec.add(state[/* position */1], state[/* velocity */0]),
          /* radius */state[/* radius */2]
        ];
}

function draw(ctx, param) {
  var position = param[/* position */1];
  return Draw_canvas.arc(ctx, position[/* x */0], position[/* y */1], param[/* radius */2], /* Fill */1);
}

var bulletVelocity = 10;

export {
  bulletVelocity ,
  shipAngleModifier ,
  make ,
  update ,
  draw ,
  
}
/* shipAngleModifier Not a pure module */
