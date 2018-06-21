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