type size = (float, float);

type t = {
  ship: Ship.t,
  performanceStats: PerformanceStats.t,
  screenSize: size,
  asteroids: list(Asteroid.t),
};

let screenSize = (700., 700.);

let initialState = {
  ship: Ship.make(),
  performanceStats: PerformanceStats.make(),
  screenSize,
  asteroids: [
    Asteroid.make(Asteroid.Large, screenSize),
    Asteroid.make(Asteroid.Medium, screenSize),
    Asteroid.make(Asteroid.Small, screenSize),
  ],
};

let checkBulletAsteroidCollisions = (asteroids, bullets) => {
  let (destroyedAsteroids, unharmedAsteroids) =
    List.partition(
      (asteroid: Asteroid.t) =>
        List.exists(
          (bullet: Bullet.t) =>
            Collision.detect(
              (asteroid.position, asteroid.collisionRadius),
              (bullet.position, bullet.radius),
            ),
          bullets,
        ),
      asteroids,
    );

  List.map(asteroid => Asteroid.destroy(asteroid), destroyedAsteroids)
  |> List.flatten
  |> List.append(unharmedAsteroids);
};

let update = state => {
  let performanceStats =
    PerformanceStats.calcFps(
      state.performanceStats,
      Dom_html.windowToJsObj(Dom_html.window)##performance##now(),
    );

  let ship = Ship.update(state.ship, state.screenSize);

  let asteroids =
    checkBulletAsteroidCollisions(state.asteroids, ship.bullets)
    |> List.map(Asteroid.update(screenSize));

  {...state, asteroids, ship, performanceStats};
};

let draw = (ctx, state) => {
  Draw_canvas.clearFrame(ctx, state.screenSize);

  Ship.draw(ctx, state.ship);

  List.iter(Asteroid.draw(ctx), state.asteroids);

  Draw_canvas.fps(ctx, ~fps=state.performanceStats.fps);
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