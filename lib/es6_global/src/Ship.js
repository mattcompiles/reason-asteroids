

import * as Vec from "./Vec.js";
import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as $$Math from "./Math.js";
import * as Utils from "./Utils.js";
import * as Bullet from "./Bullet.js";
import * as Controls from "./Controls.js";
import * as Draw_canvas from "./Draw_canvas.js";

var shipAngleModifier = $$Math.degreesToRadians(90);

function make(param, $staropt$star, _) {
  var lives = $staropt$star ? $staropt$star[0] : 3;
  return /* record */[
          /* position */Vec.make(param[0] / 2, param[1] / 2),
          /* velocity */Vec.make(0, 0),
          /* thrust */Vec.make(0, 0),
          /* angle */$$Math.degreesToRadians(0),
          /* size : tuple */[
            30,
            30
          ],
          /* bulletDelay */0,
          /* bullets : [] */0,
          /* collisionRadius */15,
          /* activeState : Living */0,
          /* framesDead */0,
          /* lives */lives,
          /* invincableFrames */100
        ];
}

function calcAngle(ship, param) {
  var left = param[/* left */0];
  var right = param[/* right */1];
  var newrecord = ship.slice();
  newrecord[/* angle */3] = left !== 0 ? (
      right !== 0 ? ship[/* angle */3] : ship[/* angle */3] - 0.1
    ) : (
      right !== 0 ? ship[/* angle */3] + 0.1 : ship[/* angle */3]
    );
  return newrecord;
}

function calcThrust(ship, param) {
  var up = param[/* up */2];
  var newrecord = ship.slice();
  newrecord[/* thrust */2] = up !== 0 ? Vec.angle(Vec.length(ship[/* thrust */2], 0.1), ship[/* angle */3] - shipAngleModifier) : Vec.length(ship[/* thrust */2], 0);
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

function calcVelocity(ship, param) {
  var up = param[/* up */2];
  var newrecord = ship.slice();
  newrecord[/* velocity */1] = normalizeVelocity(up !== 0 ? Vec.add(ship[/* velocity */1], ship[/* thrust */2]) : Vec.multiply(ship[/* velocity */1], 0.94));
  return newrecord;
}

function calcPosition(ship, screenSize) {
  var newrecord = ship.slice();
  newrecord[/* position */0] = Utils.normalizePosition(screenSize, Vec.add(ship[/* position */0], ship[/* velocity */1]));
  return newrecord;
}

function isArmed(ship) {
  return +(ship[/* bulletDelay */5] > 8);
}

function calcWeaponState(ship, input) {
  var match = input[/* shoot */3];
  var exit = 0;
  if (match !== 0 && ship[/* bulletDelay */5] > 8) {
    var newrecord = ship.slice();
    newrecord[/* bulletDelay */5] = 0;
    newrecord[/* bullets */6] = /* :: */[
      Bullet.make(ship[/* position */0], ship[/* angle */3]),
      ship[/* bullets */6]
    ];
    return newrecord;
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (ship[/* bulletDelay */5] <= 8) {
      var newrecord$1 = ship.slice();
      newrecord$1[/* bulletDelay */5] = ship[/* bulletDelay */5] + 1 | 0;
      return newrecord$1;
    } else {
      return ship;
    }
  }
  
}

function removeOldBullets(ship, screenSize) {
  var newrecord = ship.slice();
  newrecord[/* bullets */6] = List.filter((function (bullet) {
            return 1 - Utils.outOfScreen(screenSize, bullet[/* position */1]);
          }))(ship[/* bullets */6]);
  return newrecord;
}

function updateBullets(ship) {
  var newrecord = ship.slice();
  newrecord[/* bullets */6] = List.map(Bullet.update, ship[/* bullets */6]);
  return newrecord;
}

function handleDeadState(ship, screenSize) {
  var match = ship[/* activeState */8];
  var match$1 = ship[/* framesDead */9];
  var exit = 0;
  switch (match) {
    case 0 : 
        return ship;
    case 1 : 
        if (match$1 > 100) {
          return make(screenSize, /* Some */[ship[/* lives */10] - 1 | 0], /* () */0);
        } else {
          exit = 1;
        }
        break;
    case 2 : 
        exit = 1;
        break;
    
  }
  if (exit === 1) {
    var newrecord = ship.slice();
    newrecord[/* framesDead */9] = match$1 + 1 | 0;
    return newrecord;
  }
  
}

function updateInvincableFrames(ship) {
  var newrecord = ship.slice();
  var match = +(ship[/* invincableFrames */11] > 0);
  newrecord[/* invincableFrames */11] = match !== 0 ? ship[/* invincableFrames */11] - 1 | 0 : ship[/* invincableFrames */11];
  return newrecord;
}

function update(ship, screenSize) {
  return updateInvincableFrames(handleDeadState(calcWeaponState(removeOldBullets(updateBullets(calcPosition(calcVelocity(calcThrust(calcAngle(ship, Controls.activeInput), Controls.activeInput), Controls.activeInput), screenSize)), screenSize), Controls.activeInput), screenSize));
}

function destroy(ship) {
  var newrecord = ship.slice();
  var match = +(ship[/* lives */10] > 0);
  newrecord[/* activeState */8] = match !== 0 ? /* Dead */1 : /* GameOver */2;
  return newrecord;
}

function resetPosition(ship, param) {
  var newrecord = ship.slice();
  newrecord[/* position */0] = Vec.make(param[0] / 2, param[1] / 2);
  return newrecord;
}

function draw(ctx, param) {
  var size = param[/* size */4];
  var position = param[/* position */0];
  Draw_canvas.triangle(ctx, size[1], size[0], position[/* x */0], position[/* y */1], param[/* angle */3]);
  return List.iter((function (param) {
                return Bullet.draw(ctx, param);
              }), param[/* bullets */6]);
}

var friction = 0.94;

var turnVelocity = 0.1;

var maxVelocity = 10;

var invincableFrames = 100;

export {
  friction ,
  turnVelocity ,
  maxVelocity ,
  shipAngleModifier ,
  invincableFrames ,
  make ,
  calcAngle ,
  calcThrust ,
  normalizeVelocity ,
  calcVelocity ,
  calcPosition ,
  isArmed ,
  calcWeaponState ,
  removeOldBullets ,
  updateBullets ,
  handleDeadState ,
  updateInvincableFrames ,
  update ,
  destroy ,
  resetPosition ,
  draw ,
  
}
/* shipAngleModifier Not a pure module */
