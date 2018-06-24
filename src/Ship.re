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
  bulletDelay: int,
  bullets: list(Bullet.t),
  collisionRadius: float,
  destroyed: bool,
};

let make = ((width, height)) => {
  position: Vec.make(width /. 2., height /. 2.),
  velocity: Vec.make(0., 0.),
  thrust: Vec.make(0., 0.),
  angle: Math.degreesToRadians(0.),
  size: (30., 30.),
  bulletDelay: 0,
  bullets: [],
  collisionRadius: 15.,
  destroyed: false,
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

let updateBullets = (ship, bullets) => {
  ...ship,
  bullets: List.map(Bullet.update, bullets),
};

let update = (ship, bullets, screenSize) => {
  let controls = Controls.activeInput;

  calcAngle(ship, controls)
  |. calcThrust(controls)
  |. calcVelocity(controls)
  |. calcPosition(screenSize)
  |. updateBullets(bullets)
  |. removeOldBullets(screenSize)
  |. calcWeaponState(controls);
};

let destroy = ship => {...ship, destroyed: true};

let draw = (ctx, {position, angle, size, bullets, destroyed}) => {
  let (width, height) = size;

  if (! destroyed) {
    Draw_canvas.triangle(
      ctx,
      ~x=position.x,
      ~y=position.y,
      ~angle,
      ~height,
      ~width,
    );
  };

  List.iter(Bullet.draw(ctx), bullets);
};