let friction = 0.94;
let turnVelocity = 0.1;
let maxVelocity = 10.;
let shipAngleModifier = Math.degreesToRadians(90.);

type t = {
  position: Vec.t,
  velocity: Vec.t,
  thrust: Vec.t,
  angle: float,
  size: (float, float),
};

let make = () => {
  position: Vec.make(75., 150.),
  velocity: Vec.make(0., 0.),
  thrust: Vec.make(0., 0.),
  angle: Math.degreesToRadians(0.),
  size: (36., 60.),
};

let calcAngle = (ship, {left, right}: Controls.input) => {
  ...ship,
  angle:
    switch (left, right) {
    | (true, false) => ship.angle -. turnVelocity
    | (false, true) => ship.angle +. turnVelocity
    | _ => ship.angle
    },
};

let calcThrust = (ship, {up}: Controls.input) => {
  ...ship,
  thrust:
    up ?
      Vec.length(ship.thrust, 0.1)
      |. Vec.angle(ship.angle -. shipAngleModifier) :
      Vec.length(ship.thrust, 0.),
};

let normalizeVelocity = velocity =>
  switch (Vec.getLength(velocity)) {
  | vel when vel > maxVelocity => Vec.length(velocity, maxVelocity)
  | vel when vel < 0.01 => Vec.length(velocity, 0.)
  | _ => velocity
  };

let calcVelocity = (ship, {up}: Controls.input) => {
  ...ship,
  velocity:
    normalizeVelocity(
      up ?
        Vec.add(ship.velocity, ship.thrust) :
        Vec.multiply(ship.velocity, friction),
    ),
};

let calcPosition = (ship, screenSize) => {
  ...ship,
  position:
    Vec.add(ship.position, ship.velocity)
    |> Utils.normalizePosition(screenSize),
};

let update = (ship, screenSize) => {
  let controls = Controls.activeInput;

  calcAngle(ship, controls)
  |. calcThrust(controls)
  |. calcVelocity(controls)
  |. calcPosition(screenSize);
};

let shoot = (ship, bullets) => [
  Bullet.make(ship.position, ship.angle),
  ...bullets,
];

let draw = (ctx, {position, angle, size}) => {
  let (width, height) = size;

  Draw_canvas.triangle(
    ctx,
    ~x=position.x,
    ~y=position.y,
    ~angle,
    ~height,
    ~width,
  );
};