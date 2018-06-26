type activeState =
  | Living
  | Dead
  | GameOver;

type t = {
  position: Vec.t,
  velocity: Vec.t,
  thrust: Vec.t,
  angle: float,
  size: (float, float),
  bulletDelay: int,
  bullets: list(Bullet.t),
  collisionRadius: float,
  activeState,
  framesDead: int,
  lives: int,
};

let friction = 0.94;
let turnVelocity = 0.1;
let maxVelocity = 10.;
let shipAngleModifier = Math.degreesToRadians(90.);

let make = ((width, height), ~lives=3, ()) => {
  position: Vec.make(width /. 2., height /. 2.),
  velocity: Vec.make(0., 0.),
  thrust: Vec.make(0., 0.),
  angle: Math.degreesToRadians(0.),
  size: (30., 30.),
  bulletDelay: 0,
  bullets: [],
  collisionRadius: 15.,
  activeState: Living,
  framesDead: 0,
  lives,
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

let isArmed = ship => ship.bulletDelay > 8;

let calcWeaponState = (ship, input: Controls.input) =>
  switch (input.shoot) {
  | true when isArmed(ship) => {
      ...ship,
      bulletDelay: 0,
      bullets: [Bullet.make(ship.position, ship.angle), ...ship.bullets],
    }
  | _ when ! isArmed(ship) => {...ship, bulletDelay: ship.bulletDelay + 1}
  | _ => ship
  };

let removeOldBullets = (ship, screenSize) => {
  ...ship,
  bullets:
    List.filter(
      (bullet: Bullet.t) => ! Utils.outOfScreen(screenSize, bullet.position),
      ship.bullets,
    ),
};

let updateBullets = ship => {
  ...ship,
  bullets: List.map(Bullet.update, ship.bullets),
};

let handleDeadState = (ship, screenSize) =>
  switch (ship.activeState, ship.framesDead) {
  | (Living, _) => ship
  | (Dead, framesDead) when framesDead > 100 =>
    make(screenSize, ~lives=ship.lives - 1, ())
  | (_, framesDead) => {...ship, framesDead: framesDead + 1}
  };

let update = (ship, screenSize) => {
  let controls = Controls.activeInput;

  calcAngle(ship, controls)
  |. calcThrust(controls)
  |. calcVelocity(controls)
  |. calcPosition(screenSize)
  |. updateBullets
  |. removeOldBullets(screenSize)
  |. calcWeaponState(controls)
  |. handleDeadState(screenSize);
};

let destroy = ship => {
  ...ship,
  activeState: ship.lives > 0 ? Dead : GameOver,
};

let resetPosition = (ship, (width, height)) => {
  ...ship,
  position: Vec.make(width /. 2., height /. 2.),
};

let draw = (ctx, {position, angle, size, bullets}) => {
  let (width, height) = size;

  Draw_canvas.triangle(
    ctx,
    ~x=position.x,
    ~y=position.y,
    ~angle,
    ~height,
    ~width,
  );

  List.iter(Bullet.draw(ctx), bullets);
};