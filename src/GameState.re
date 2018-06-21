type size = (float, float);

type t = {
  shipPosition: Vec.t,
  shipVelocity: Vec.t,
  shipThrust: Vec.t,
  shipAngle: float,
  shipSize: size,
  fps: int,
  updateTimes: list(float),
  screenSize: size,
};