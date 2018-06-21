

import * as Vec from "./Vec.js";
import * as List from "../../../node_modules/bs-platform/lib/es6/list.js";
import * as $$Math from "./Math.js";
import * as Utils from "./Utils.js";

function sizeTypeToSize(sizeType) {
  switch (sizeType) {
    case 0 : 
        return 80;
    case 1 : 
        return 50;
    case 2 : 
        return 30;
    
  }
}

var edgeThing = 2 * Math.PI / 7;

function makeEdge(size, num) {
  var match = +(num % 2 === 1);
  var modifier = match !== 0 ? Math.random() * -50 : 0;
  return Vec.make(modifier + size * Math.cos(num * edgeThing), modifier + size * Math.sin(num * edgeThing));
}

function makeEdges(size, _numRemaining, _edges) {
  while(true) {
    var edges = _edges;
    var numRemaining = _numRemaining;
    if (numRemaining > 0) {
      var edge = makeEdge(size, numRemaining);
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
  var pixelSize = sizeTypeToSize(sizeType);
  return /* record */[
          /* position */randomPosition(screenSize),
          /* edges */makeEdges(pixelSize, 7, /* [] */0),
          /* sizeType */sizeType,
          /* pixelSize */pixelSize,
          /* velocity */Vec.angle(Vec.make(1, 1), $$Math.degreesToRadians(Math.random() * 360))
        ];
}

function update(screenSize, asteroid) {
  return /* record */[
          /* position */Utils.normalizePosition(screenSize, Vec.add(asteroid[/* position */0], asteroid[/* velocity */4])),
          /* edges */asteroid[/* edges */1],
          /* sizeType */asteroid[/* sizeType */2],
          /* pixelSize */asteroid[/* pixelSize */3],
          /* velocity */asteroid[/* velocity */4]
        ];
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
  sizeTypeToSize ,
  edgeThing ,
  makeEdge ,
  makeEdges ,
  randomPosition ,
  make ,
  update ,
  draw ,
  
}
/* edgeThing Not a pure module */
