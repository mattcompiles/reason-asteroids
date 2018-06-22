type collisionInfo = (Vec.t, float);

let detect = (a: collisionInfo, b: collisionInfo) => {
  let (posA, radiusA) = a;
  let (posB, radiusB) = b;

  let diffVec = Vec.make(posA.x -. posB.x, posA.y -. posB.y);

  Vec.getLength(diffVec) < radiusA +. radiusB;
};