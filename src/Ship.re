let speed = 3.;
let turnSpeed = 0.1;

let draw = (ctx, {shipPosition, shipSize, shipAngle}: GameState.t) => {
  let (x, y) = shipPosition;
  let (width, height) = shipSize;

  Draw_canvas.triangle(ctx, ~x, ~y, ~angle=shipAngle, ~height, ~width);
};

let calcAngle = ({shipAngle}: GameState.t, {left, right}: Controls.input) =>
  switch (left, right) {
  | (true, false) => shipAngle -. turnSpeed
  | (false, true) => shipAngle +. turnSpeed
  | _ => shipAngle
  };

let normalizeAngle = a => a < 0. ? a *. (-1.) : a;

let calcPosition =
    ({shipAngle, shipPosition}: GameState.t, {up}: Controls.input) =>
  if (up) {
    let angle = shipAngle -. Math.degreesToRadians(90.);
    let speedX = speed *. Js.Math.cos(angle);
    let speedY = speed *. Js.Math.sin(angle);

    let (x, y) = shipPosition;

    (x +. speedX, y +. speedY);
  } else {
    shipPosition;
  };

let update = (state: GameState.t) => {
  let controls: Controls.input = Controls.activeInput;

  let newAngle = calcAngle(state, controls);
  let newPosition = calcPosition(state, controls);

  {...state, shipAngle: newAngle, shipPosition: newPosition};
};