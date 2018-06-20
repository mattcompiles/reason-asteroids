


function circle(ctx, x, y, r) {
  ctx.ellipse(x, y, r, r, 0.0, 0.0, 2.0 * (Math.PI));
  return /* () */0;
}

function moveToPos(ctx, param) {
  ctx.moveTo(param[0], param[1]);
  return /* () */0;
}

function lineToPos(ctx, param) {
  ctx.lineTo(param[0], param[1]);
  return /* () */0;
}

function line(ctx, param, param$1) {
  ctx.beginPath();
  ctx.moveTo(param[0], param[1]);
  ctx.lineTo(param$1[0], param$1[1]);
  ctx.stroke();
  return /* () */0;
}

export {
  circle ,
  moveToPos ,
  lineToPos ,
  line ,
  
}
/* No side effect */
