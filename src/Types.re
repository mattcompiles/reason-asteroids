type size = (float, float);

type gameState = {
  ship: Ship.t,
  performanceStats: PerformanceStats.t,
  screenSize: size,
  asteroids: list(Asteroid.t),
  particles: list(Particle.t),
  wave: int,
  score: int,
  framesBetweenWave: int,
};