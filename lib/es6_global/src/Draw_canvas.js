

import * as $$Math from "./Math.js";
import * as Caml_int32 from "../../../node_modules/bs-platform/lib/es6/caml_int32.js";

function triangle(ctx, height, width, x, y, angle) {
  var y1 = y - height / 2;
  var x2 = x + width / 2;
  var y2 = y + height / 2;
  var x3 = x - width / 2;
  var x1r = (x - x) * Math.cos(angle) - (y1 - y) * Math.sin(angle) + x;
  var y1r = (x - x) * Math.sin(angle) + (y1 - y) * Math.cos(angle) + y;
  var x2r = (x2 - x) * Math.cos(angle) - (y2 - y) * Math.sin(angle) + x;
  var y2r = (x2 - x) * Math.sin(angle) + (y2 - y) * Math.cos(angle) + y;
  var x3r = (x3 - x) * Math.cos(angle) - (y2 - y) * Math.sin(angle) + x;
  var y3r = (x3 - x) * Math.sin(angle) + (y2 - y) * Math.cos(angle) + y;
  ctx.beginPath();
  ctx.moveTo(x1r, y1r);
  ctx.lineTo(x2r, y2r);
  ctx.lineTo(x3r, y3r);
  ctx.closePath();
  ctx.stroke();
  return /* () */0;
}

function fps(canvas, fps$1) {
  canvas.font = "20px Arial";
  canvas.fillText(String(fps$1), 10, 50);
  return /* () */0;
}

function gameOver(canvas, param) {
  canvas.font = "40px Arial";
  canvas.fillText("GAME OVER", param[0] / 2, param[1] / 2);
  return /* () */0;
}

function lives(canvas, lives$1) {
  for(var i = 1; i <= lives$1; ++i){
    triangle(canvas, 30, 30, Caml_int32.imul(i, 40), 40, $$Math.degreesToRadians(0));
  }
  return /* () */0;
}

function wave(canvas, wave$1, param) {
  canvas.font = "22px Arial";
  canvas.fillText("Wave " + String(wave$1), param[0] - 100, 40);
  return /* () */0;
}

function clearFrame(ctx, screenSize) {
  ctx.clearRect(0, 0, screenSize[0], screenSize[1]);
  return /* () */0;
}

export {
  triangle ,
  fps ,
  gameOver ,
  lives ,
  wave ,
  clearFrame ,
  
}
/* Math Not a pure module */
