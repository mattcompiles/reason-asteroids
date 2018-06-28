type t = {
  position: Vec.t,
  radius: float,
  velocity: Vec.t,
};

let asteroidExplosionParticles = 15;

let rec makeParticles = (position, particlesLeft, particles) =>
  if (particlesLeft == 0) {
    particles;
  } else {
    makeParticles(
      position,
      particlesLeft - 1,
      [
        {
          position,
          velocity: Utils.randomVelocity(Math.random(0.5, 2.)),
          radius: Math.random(5., 8.),
        },
        ...particles,
      ],
    );
  };

let makeAsteroidExplosion = position =>
  makeParticles(position, asteroidExplosionParticles, []);

let update = ({velocity, radius, position}) => {
  position: Vec.add(position, velocity),
  radius: radius -. 0.2,
  velocity,
};

let updateParticles = particles =>
  List.map(update, particles) |> List.filter(({radius}) => radius > 0.);

let draw = (ctx, {position, radius}) =>
  Draw_canvas.arc(ctx, position.x, position.y, radius, Draw_canvas.Stroke);