open Types;

let screenSize = (700., 700.);

let initialState = {
  ship: Ship.make(screenSize, ()),
  performanceStats: PerformanceStats.make(),
  screenSize,
  asteroids: [
    Asteroid.make(Asteroid.Large, screenSize),
    Asteroid.make(Asteroid.Large, screenSize),
    Asteroid.make(Asteroid.Large, screenSize),
  ],
  particles: [],
  wave: 1,
  framesBetweenWave: 0,
};

let updateWave = state => {
  let {ship, screenSize, asteroids, particles} =
    Collision.checkCollisions(state);

  let ship = Ship.update(ship, screenSize);

  let asteroids = List.map(Asteroid.update(screenSize), asteroids);

  let particles = Particle.updateParticles(particles);

  {...state, asteroids, ship, particles};
};

let update = state => {
  let performanceStats =
    PerformanceStats.calcFps(
      state.performanceStats,
      Dom_html.windowToJsObj(Dom_html.window)##performance##now(),
    );

  let newState =
    switch (List.length(state.asteroids), state.framesBetweenWave) {
    | (0, framesBetweenWave) when framesBetweenWave > 100 => {
        ...state,
        framesBetweenWave: 0,
        wave: state.wave + 1,
        asteroids:
          Asteroid.makeMany(
            Asteroid.Large,
            state.screenSize,
            state.wave + 3,
            [],
          ),
        ship: Ship.resetPosition(state.ship, state.screenSize),
      }
    | (0, framesBetweenWave) => {
        ...updateWave(state),
        framesBetweenWave: framesBetweenWave + 1,
      }
    | _ => updateWave(state)
    };

  {...newState, performanceStats};
};

let draw = (ctx, state) => {
  Draw_canvas.clearFrame(ctx, state.screenSize);

  switch (state.ship.activeState) {
  | Living => Ship.draw(ctx, state.ship)
  | Dead => ()
  | GameOver => Draw_canvas.gameOver(ctx, state.screenSize)
  };

  List.iter(Asteroid.draw(ctx), state.asteroids);
  List.iter(Particle.draw(ctx), state.particles);

  Draw_canvas.lives(ctx, state.ship.lives);
  Draw_canvas.wave(ctx, state.wave, screenSize);
  /* Draw_canvas.fps(ctx, ~fps=state.performanceStats.fps); */
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