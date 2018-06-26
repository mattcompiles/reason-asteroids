open Types;

type collisionInfo = (Vec.t, float);

let detect = (a: collisionInfo, b: collisionInfo) => {
  let (posA, radiusA) = a;
  let (posB, radiusB) = b;

  let diffVec = Vec.make(posA.x -. posB.x, posA.y -. posB.y);

  Vec.getLength(diffVec) < radiusA +. radiusB;
};

let checkAsteroidCollision = (asteroid: Asteroid.t, bullets) => {
  let (hits, misses) =
    List.partition(
      (bullet: Bullet.t) =>
        detect(
          (asteroid.position, asteroid.collisionRadius),
          (bullet.position, bullet.radius),
        ),
      bullets,
    );

  switch (List.length(hits)) {
  | 0 => ([asteroid], bullets)
  | _ => (Asteroid.destroy(asteroid), misses)
  };
};

let rec checkBulletAsteroidCollisions = (asteroids, safeAsteroids, bullets) =>
  switch (asteroids) {
  | [asteroid, ...rest] =>
    let (asteroidsAfterCollision, bulletsAfterCollision) =
      checkAsteroidCollision(asteroid, bullets);

    checkBulletAsteroidCollisions(
      rest,
      List.append(safeAsteroids, asteroidsAfterCollision),
      bulletsAfterCollision,
    );
  | [] => (safeAsteroids, bullets)
  };

let checkShipAsteroidCollisions = (asteroids, ship: Ship.t) => {
  let (hitAsteroids, safeAsteroids) =
    List.partition(
      (asteroid: Asteroid.t) =>
        detect(
          (asteroid.position, asteroid.collisionRadius),
          (ship.position, ship.collisionRadius),
        ),
      asteroids,
    );

  switch (ship.activeState, hitAsteroids) {
  | (Living, [destroyedAsteroid, ...rest]) => (
      Asteroid.destroy(destroyedAsteroid) @ rest @ safeAsteroids,
      Ship.destroy(ship),
    )
  | (_, _) => (asteroids, ship)
  };
};

let checkCollisions = state => {
  let (asteroids, updatedBullets) =
    checkBulletAsteroidCollisions(state.asteroids, [], state.ship.bullets);

  let (updatedAsteroids, updatedShip) =
    checkShipAsteroidCollisions(asteroids, state.ship);

  {
    ...state,
    asteroids: updatedAsteroids,
    ship: {
      ...updatedShip,
      bullets: updatedBullets,
    },
  };
};