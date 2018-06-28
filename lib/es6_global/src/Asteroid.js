

import * as Vec from "./Vec.js";
import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as $$Math from "./Math.js";
import * as Utils from "./Utils.js";

function sizeTypeProps(sizeType) {
  switch (sizeType) {
    case 0 : 
        return /* tuple */[
                80,
                -20,
                75
              ];
    case 1 : 
        return /* tuple */[
                50,
                -10,
                45
              ];
    case 2 : 
        return /* tuple */[
                30,
                -5,
                25
              ];
    
  }
}

var edgeThing = 2 * Math.PI / 7;

function makeEdge(size, num, edgeModifier) {
  var match = +(num % 2 === 1);
  var modifier = match !== 0 ? Math.random() * edgeModifier : 0;
  return Vec.make(modifier + size * Math.cos(num * edgeThing), modifier + size * Math.sin(num * edgeThing));
}

function makeEdges(size, _numRemaining, edgeModifier, _edges) {
  while(true) {
    var edges = _edges;
    var numRemaining = _numRemaining;
    if (numRemaining > 0) {
      var edge = makeEdge(size, numRemaining, edgeModifier);
      _edges = /* :: */[
        edge,
        edges
      ];
      _numRemaining = numRemaining - 1 | 0;
      continue ;
      
    } else {
      return edges;
    }
  };
}

function randomPosition(param) {
  var match = +(Math.random() > 0.5);
  var positionBase = match !== 0 ? /* XAxis */0 : /* YAxis */1;
  if (positionBase !== 0) {
    return Vec.make(0, $$Math.random(0, param[1]));
  } else {
    return Vec.make($$Math.random(0, param[0]), 0);
  }
}

function make(sizeType, screenSize) {
  var match = sizeTypeProps(sizeType);
  var edgeModifier = match[1];
  var pixelSize = match[0];
  return /* record */[
          /* position */randomPosition(screenSize),
          /* edges */makeEdges(pixelSize, 7, edgeModifier, /* [] */0),
          /* sizeType */sizeType,
          /* pixelSize */pixelSize,
          /* velocity */Utils.randomVelocity(1),
          /* edgeModifier */edgeModifier,
          /* collisionRadius */match[2]
        ];
}

function makeMany(sizeType, screenSize, _num, _asteroids) {
  while(true) {
    var asteroids = _asteroids;
    var num = _num;
    var match = +(num === 0);
    if (match !== 0) {
      return asteroids;
    } else {
      _asteroids = /* :: */[
        make(sizeType, screenSize),
        asteroids
      ];
      _num = num - 1 | 0;
      continue ;
      
    }
  };
}

function makeChild(sizeType, position) {
  var match = sizeTypeProps(sizeType);
  var edgeModifier = match[1];
  var pixelSize = match[0];
  return /* record */[
          /* position */position,
          /* edges */makeEdges(pixelSize, 7, edgeModifier, /* [] */0),
          /* sizeType */sizeType,
          /* pixelSize */pixelSize,
          /* velocity */Vec.angle(Vec.make(1, 1), $$Math.degreesToRadians(Math.random() * 360)),
          /* edgeModifier */edgeModifier,
          /* collisionRadius */match[2]
        ];
}

function update(screenSize, asteroid) {
  var newrecord = asteroid.slice();
  newrecord[/* position */0] = Utils.normalizePosition(screenSize, Vec.add(asteroid[/* position */0], asteroid[/* velocity */4]));
  return newrecord;
}

function destroy(asteroid) {
  var match = asteroid[/* sizeType */2];
  switch (match) {
    case 0 : 
        return /* :: */[
                makeChild(/* Medium */1, asteroid[/* position */0]),
                /* :: */[
                  makeChild(/* Medium */1, asteroid[/* position */0]),
                  /* [] */0
                ]
              ];
    case 1 : 
        return /* :: */[
                makeChild(/* Small */2, asteroid[/* position */0]),
                /* :: */[
                  makeChild(/* Small */2, asteroid[/* position */0]),
                  /* [] */0
                ]
              ];
    case 2 : 
        return /* [] */0;
    
  }
}

function draw(ctx, param) {
  var position = param[/* position */0];
  var y = position[/* y */1];
  var x = position[/* x */0];
  var pixelSize = param[/* pixelSize */3];
  ctx.beginPath();
  ctx.moveTo(x + pixelSize * Math.cos(0), y + pixelSize * Math.sin(0));
  List.iter((function (edge) {
          ctx.lineTo(x + edge[/* x */0], y + edge[/* y */1]);
          return /* () */0;
        }), param[/* edges */1]);
  ctx.closePath();
  ctx.stroke();
  return /* () */0;
}

var asteroidVelocity = 1;

var edgeCount = 7;

export {
  asteroidVelocity ,
  edgeCount ,
  sizeTypeProps ,
  edgeThing ,
  makeEdge ,
  makeEdges ,
  randomPosition ,
  make ,
  makeMany ,
  makeChild ,
  update ,
  destroy ,
  draw ,
  
}
/* edgeThing Not a pure module */
