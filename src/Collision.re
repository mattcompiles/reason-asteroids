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
  | 0 => ([asteroid], bullets, [], 0)
  | _ => (
      Asteroid.destroy(asteroid),
      misses,
      Particle.makeAsteroidExplosion(asteroid.position),
      switch (asteroid.sizeType) {
      | Asteroid.Large => 10
      | Asteroid.Medium => 25
      | Asteroid.Small => 50
      },
    )
  };
};

let rec checkBulletAsteroidCollisions =
        (asteroids, safeAsteroids, bullets, particles, score) =>
  switch (asteroids) {
  | [asteroid, ...rest] =>
    let (
      asteroidsAfterCollision,
      bulletsAfterCollision,
      particlesAfterCollision,
      scoreFromCollision,
    ) =
      checkAsteroidCollision(asteroid, bullets);

    checkBulletAsteroidCollisions(
      rest,
      safeAsteroids @ asteroidsAfterCollision,
      bulletsAfterCollision,
      particles @ particlesAfterCollision,
      score + scoreFromCollision,
    );
  | [] => (safeAsteroids, bullets, particles, score)
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
  let (asteroids, updatedBullets, particles, points) =
    checkBulletAsteroidCollisions(
      state.asteroids,
      [],
      state.ship.bullets,
      state.particles,
      0,
    );

  let (asteroids, updatedShip) =
    if (state.ship.invincableFrames == 0) {
      checkShipAsteroidCollisions(asteroids, state.ship);
    } else {
      (asteroids, state.ship);
    };

  {
    ...state,
    asteroids,
    ship: {
      ...updatedShip,
      bullets: updatedBullets,
    },
    particles,
    score: state.score + points,
  };
};