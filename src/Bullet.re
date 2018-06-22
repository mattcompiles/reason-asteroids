let bulletVelocity = 10.;
let shipAngleModifier = Math.degreesToRadians(90.);

type t = {
  velocity: Vec.t,
  position: Vec.t,
};

let make = (position, angle) => {
  position,
  velocity:
    Vec.angle(
      Vec.make(bulletVelocity, bulletVelocity),
      angle -. shipAngleModifier,
    ),
};

let update = state => {
  ...state,
  position: Vec.add(state.position, state.velocity),
};

let draw = (ctx, {position}) => {
  Canvas.beginPath(ctx);
  Canvas.arc(ctx, position.x, position.y, 2., 0., Math.doublePI);
  Canvas.fill(ctx);
};