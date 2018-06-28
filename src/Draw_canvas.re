open Canvas;

type drawType =
  | Stroke
  | Fill;

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
  setStrokeStyle(ctx, "#fff");
  stroke(ctx);
};

let fps = (canvas, ~fps) => {
  setFont(canvas, "20px Arial");
  setFillStyle(canvas, "#fff");
  fillText(canvas, string_of_int(fps), 10., 50.);
};

let gameOver = (canvas, (width, height)) => {
  setFont(canvas, "40px Arial");
  setFillStyle(canvas, "#fff");
  fillText(canvas, "GAME OVER", width /. 2., height /. 2.);
};

let lives = (canvas, lives) =>
  for (i in 1 to lives) {
    triangle(
      canvas,
      ~height=30.,
      ~width=30.,
      ~x=float_of_int(i * 40),
      ~y=40.,
      ~angle=Math.degreesToRadians(0.),
    );
  };

let score = (canvas, score, (width, _)) => {
  setFont(canvas, "22px Arial");
  setFillStyle(canvas, "#fff");
  fillText(canvas, "Score " ++ string_of_int(score), width -. 150., 40.);
};

let clearFrame = (ctx, screenSize) => {
  let (x, y) = screenSize;
  Canvas.clearRect(ctx, 0., 0., x, y);
};

let arc = (ctx, x, y, radius, drawType) => {
  beginPath(ctx);
  arc(ctx, x, y, radius, 0., Math.doublePI);

  switch (drawType) {
  | Fill =>
    setFillStyle(ctx, "#fff");
    fill(ctx);
  | Stroke =>
    setStrokeStyle(ctx, "#fff");
    stroke(ctx);
  };
};