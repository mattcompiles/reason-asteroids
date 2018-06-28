let normalizePosition = (screenSize, position: Vec.t) : Vec.t => {
  let (width, height) = screenSize;
  {
    x:
      switch (position.x) {
      | x when x > width => 0.
      | x when x < 0. => width
      | x => x
      },
    y:
      switch (position.y) {
      | y when y > height => 0.
      | y when y < 0. => height
      | y => y
      },
  };
};

let outOfScreen = (screenSize, {x, y}: Vec.t) => {
  let (width, height) = screenSize;

  x > width || x < 0. || y > height || y < 0.;
};

let randomVelocity = speed =>
  Vec.angle(
    Vec.make(speed, speed),
    Math.degreesToRadians(Js.Math.random() *. 360.),
  );