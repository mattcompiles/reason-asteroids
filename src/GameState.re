type point = (float, float);

type size = (float, float);

type t = {
  shipPosition: point,
  shipAngle: float,
  shipSize: size,
  fps: int,
  updateTimes: list(float),
};