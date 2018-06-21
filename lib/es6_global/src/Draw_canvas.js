


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

function clearFrame(ctx, screenSize) {
  ctx.clearRect(0, 0, screenSize[0], screenSize[1]);
  return /* () */0;
}

export {
  triangle ,
  fps ,
  clearFrame ,
  
}
/* No side effect */
