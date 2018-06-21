let screenSize = (700., 700.);

let initialState: GameState.t = {
  shipPosition: Vec.make(75., 150.),
  shipVelocity: Vec.make(0., 0.),
  shipThrust: Vec.make(0., 0.),
  shipAngle: Math.degreesToRadians(0.),
  shipSize: (36., 60.),
  fps: 0,
  updateTimes: [],
  screenSize: (700., 700.),
  asteroids: [|
    Asteroid.make(Asteroid.Large, screenSize),
    Asteroid.make(Asteroid.Large, screenSize),
    Asteroid.make(Asteroid.Large, screenSize),
  |],
  bullets: [],
};

let update = state => {
  let newState =
    Stats.calcFps(
      state,
      Dom_html.windowToJsObj(Dom_html.window)##performance##now(),
    )
    |. Ship.update;

  let asteroids = Array.map(Asteroid.update(screenSize), newState.asteroids);

  let bullets =
    Controls.activeInput.shoot ?
      List.map(Bullet.update, Ship.shoot(newState)) :
      List.map(Bullet.update, newState.bullets);

  {...newState, asteroids, bullets};
};

let draw = (ctx, state) => {
  Draw_canvas.clearFrame(ctx, state);

  Ship.draw(ctx, state);

  Array.iter(Asteroid.draw(ctx), state.asteroids);

  List.iter(Bullet.draw(ctx), state.bullets);

  Draw_canvas.fps(ctx, ~fps=state.fps);
};

let rec updateLoop = (canvas, state, _) => {
  let newState = update(state);

  draw(canvas, newState);

  Dom_html.requestAnimationFrame(updateLoop(canvas, newState));
};

let run = () => {
  let canvas =
    switch (Dom_html.getElementById(Dom_html.document, "canvas")) {
    | None =>
      Js.log("cant find canvas");
      failwith("fail");
    | Some(el) => Dom_html.elementToCanvasElement(el)
    };

  let context: Canvas.canvasRenderingContext2D =
    Dom_html.canvasElementToJsObj(canvas)##getContext("2d");

  let _ =
    Dom_html.addEventListener(
      Dom_html.document,
      "keydown",
      Controls.keydown,
      true,
    );
  let _ =
    Dom_html.addEventListener(
      Dom_html.document,
      "keyup",
      Controls.keyup,
      true,
    );

  updateLoop(context, initialState, 0.0);
};

Dom_html.windowToJsObj(Dom_html.window)##onload#=(
                                                    _ => {
                                                      ignore(run());
                                                      true;
                                                    }
                                                  );