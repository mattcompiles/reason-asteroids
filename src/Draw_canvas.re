open Canvas;

let triangle = (ctx, ~height, ~width, ~x, ~y, ~angle) => {
  let x1 = x;
  let y1 = y -. height /. 2.;
  let x2 = x +. width /. 2.;
  let y2 = y +. height /. 2.;
  let x3 = x -. width /. 2.;
  let y3 = y2;

  let x1r =
    (x1 -. x) *. Js.Math.cos(angle) -. (y1 -. y) *. Js.Math.sin(angle) +. x;
  let y1r =
    (x1 -. x) *. Js.Math.sin(angle) +. (y1 -. y) *. Js.Math.cos(angle) +. y;

  let x2r =
    (x2 -. x) *. Js.Math.cos(angle) -. (y2 -. y) *. Js.Math.sin(angle) +. x;
  let y2r =
    (x2 -. x) *. Js.Math.sin(angle) +. (y2 -. y) *. Js.Math.cos(angle) +. y;

  let x3r =
    (x3 -. x) *. Js.Math.cos(angle) -. (y3 -. y) *. Js.Math.sin(angle) +. x;
  let y3r =
    (x3 -. x) *. Js.Math.sin(angle) +. (y3 -. y) *. Js.Math.cos(angle) +. y;

  beginPath(ctx);
  moveTo(ctx, x1r, y1r);
  lineTo(ctx, x2r, y2r);
  lineTo(ctx, x3r, y3r);
  closePath(ctx);
  stroke(ctx);
};

let fps = (canvas, ~fps) => {
  setFont(canvas, "20px Arial");
  fillText(canvas, string_of_int(fps), 10., 50.);
};

let clearFrame = ctx => Canvas.clearRect(ctx, 0., 0., 1024., 512.);