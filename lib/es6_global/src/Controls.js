


var activeInput = /* record */[
  /* left : false */0,
  /* right : false */0,
  /* up : false */0,
  /* shoot : false */0
];

function keydown(evt) {
  var match = evt.keyCode;
  if (match >= 66) {
    if (match !== 68) {
      if (match !== 87) {
        
      } else {
        activeInput[/* up */2] = /* true */1;
      }
    } else {
      activeInput[/* right */1] = /* true */1;
    }
  } else if (match >= 40) {
    if (match >= 65) {
      activeInput[/* left */0] = /* true */1;
    }
    
  } else if (match >= 32) {
    switch (match - 32 | 0) {
      case 0 : 
          activeInput[/* shoot */3] = /* true */1;
          break;
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
          break;
      case 5 : 
          activeInput[/* left */0] = /* true */1;
          break;
      case 6 : 
          activeInput[/* up */2] = /* true */1;
          break;
      case 7 : 
          activeInput[/* right */1] = /* true */1;
          break;
      
    }
  }
  return /* true */1;
}

function keyup(evt) {
  var match = evt.keyCode;
  if (match >= 66) {
    if (match !== 68) {
      if (match !== 87) {
        
      } else {
        activeInput[/* up */2] = /* false */0;
      }
    } else {
      activeInput[/* right */1] = /* false */0;
    }
  } else if (match >= 40) {
    if (match >= 65) {
      activeInput[/* left */0] = /* false */0;
    }
    
  } else if (match >= 32) {
    switch (match - 32 | 0) {
      case 0 : 
          activeInput[/* shoot */3] = /* false */0;
          break;
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
          break;
      case 5 : 
          activeInput[/* left */0] = /* false */0;
          break;
      case 6 : 
          activeInput[/* up */2] = /* false */0;
          break;
      case 7 : 
          activeInput[/* right */1] = /* false */0;
          break;
      
    }
  }
  return /* true */1;
}

export {
  activeInput ,
  keydown ,
  keyup ,
  
}
/* No side effect */
