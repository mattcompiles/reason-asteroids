let acceleration = 0.01;
let friction = 0.97;
let turnVelocity = 0.1;
let maxVelocity = 10.;
let shipAngleModifier = Math.degreesToRadians(90.);

let calcAngle = (state: GameState.t, {left, right}: Controls.input) => {
  ...state,
  shipAngle:
    switch (left, right) {
    | (true, false) => state.shipAngle -. turnVelocity
    | (false, true) => state.shipAngle +. turnVelocity
    | _ => state.shipAngle
    },
};

let calcThrust = (state: GameState.t, {up}: Controls.input) => {
  ...state,
  shipThrust:
    up ?
      Vec.length(state.shipThrust, 0.1)
      |. Vec.angle(state.shipAngle -. shipAngleModifier) :
      Vec.length(state.shipThrust, 0.),
};

let normalizeVelocity = velocity =>
  switch (Vec.getLength(velocity)) {
  | vel when vel > maxVelocity => Vec.length(velocity, maxVelocity)
  | vel when vel < 0.01 => Vec.length(velocity, 0.)
  | _ => velocity
  };

let calcVelocity = (state: GameState.t, {up}: Controls.input) => {
  ...state,
  shipVelocity:
    normalizeVelocity(
      up ?
        Vec.add(state.shipVelocity, state.shipThrust) :
        Vec.multiply(state.shipVelocity, friction),
    ),
};

let calcPosition = (state: GameState.t) => {
  ...state,
  shipPosition: Vec.add(state.shipPosition, state.shipVelocity),
};

let update = (state: GameState.t) => {
  let controls = Controls.activeInput;

  calcAngle(state, controls)
  |. calcThrust(controls)
  |. calcVelocity(controls)
  |. calcPosition;
};

let draw = (ctx, {shipPosition, shipSize, shipAngle}: GameState.t) => {
  let (width, height) = shipSize;

  Draw_canvas.triangle(
    ctx,
    ~x=shipPosition.x,
    ~y=shipPosition.y,
    ~angle=shipAngle,
    ~height,
    ~width,
  );
};