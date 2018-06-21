type t = {
  x: float,
  y: float,
};

let make = (x, y) => {x, y};

let add = (a, b) => {x: a.x +. b.x, y: a.y +. b.y};

let multiply = (a, value) => {x: a.x *. value, y: a.y *. value};

let getAngle = ({x, y}) => Js.Math.atan2(~x, ~y, ());

let getLength = ({x, y}) => Js.Math.sqrt(x *. x +. y *. y);

let length = (vec, length) => {
  let angle = getAngle(vec);

  {x: Js.Math.cos(angle) *. length, y: Js.Math.sin(angle) *. length};
};

let angle = (vec, angle) => {
  let length = getLength(vec);

  {x: Js.Math.cos(angle) *. length, y: Js.Math.sin(angle) *. length};
};