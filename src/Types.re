type size = (float, float);

type gameState = {
  ship: Ship.t,
  performanceStats: PerformanceStats.t,
  screenSize: size,
  asteroids: list(Asteroid.t),
  wave: int,
  framesBetweenWave: int,
};