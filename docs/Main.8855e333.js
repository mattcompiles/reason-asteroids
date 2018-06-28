// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({41:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var out_of_memory = /* tuple */["Out_of_memory", 0];

var sys_error = /* tuple */["Sys_error", -1];

var failure = /* tuple */["Failure", -2];

var invalid_argument = /* tuple */["Invalid_argument", -3];

var end_of_file = /* tuple */["End_of_file", -4];

var division_by_zero = /* tuple */["Division_by_zero", -5];

var not_found = /* tuple */["Not_found", -6];

var match_failure = /* tuple */["Match_failure", -7];

var stack_overflow = /* tuple */["Stack_overflow", -8];

var sys_blocked_io = /* tuple */["Sys_blocked_io", -9];

var assert_failure = /* tuple */["Assert_failure", -10];

var undefined_recursive_module = /* tuple */["Undefined_recursive_module", -11];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

exports.out_of_memory = out_of_memory;
exports.sys_error = sys_error;
exports.failure = failure;
exports.invalid_argument = invalid_argument;
exports.end_of_file = end_of_file;
exports.division_by_zero = division_by_zero;
exports.not_found = not_found;
exports.match_failure = match_failure;
exports.stack_overflow = stack_overflow;
exports.sys_blocked_io = sys_blocked_io;
exports.assert_failure = assert_failure;
exports.undefined_recursive_module = undefined_recursive_module;
/*  Not a pure module */
},{}],56:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caml_array_set = exports.caml_array_get = exports.caml_array_blit = exports.caml_make_float_vect = exports.caml_make_vect = exports.caml_array_concat = exports.caml_array_sub = undefined;

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while (j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  };
  return result;
}

function len(_acc, _l) {
  while (true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue;
    } else {
      return acc;
    }
  };
}

function fill(arr, _i, _l) {
  while (true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while (j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      };
      _l = l[1];
      _i = k;
      continue;
    } else {
      return (/* () */0
      );
    }
  };
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [Caml_builtin_exceptions.invalid_argument, "index out of bounds"];
  } else {
    xs[index] = newval;
    return (/* () */0
    );
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [Caml_builtin_exceptions.invalid_argument, "index out of bounds"];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    b[i] = init;
  }
  return b;
}

function caml_make_float_vect(len) {
  var b = new Array(len);
  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    b[i] = 0;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for (var j = 0, j_finish = len - 1 | 0; j <= j_finish; ++j) {
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return (/* () */0
    );
  } else {
    for (var j$1 = len - 1 | 0; j$1 >= 0; --j$1) {
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return (/* () */0
    );
  }
}

exports.caml_array_sub = caml_array_sub;
exports.caml_array_concat = caml_array_concat;
exports.caml_make_vect = caml_make_vect;
exports.caml_make_float_vect = caml_make_float_vect;
exports.caml_array_blit = caml_array_blit;
exports.caml_array_get = caml_array_get;
exports.caml_array_set = caml_array_set;
/* No side effect */
},{"./caml_builtin_exceptions.js":41}],34:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__8 = exports._8 = exports.curry_8 = exports.__7 = exports._7 = exports.curry_7 = exports.__6 = exports._6 = exports.curry_6 = exports.__5 = exports._5 = exports.curry_5 = exports.__4 = exports._4 = exports.curry_4 = exports.__3 = exports._3 = exports.curry_3 = exports.__2 = exports._2 = exports.curry_2 = exports.__1 = exports._1 = exports.curry_1 = exports.app = undefined;

var _caml_array = require("./caml_array.js");

var Caml_array = _interopRequireWildcard(_caml_array);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function app(_f, _args) {
  while (true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity === 0 ? 1 : arity;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    } else if (d < 0) {
      _args = Caml_array.caml_array_sub(args, arity$1, -d | 0);
      _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity$1));
      continue;
    } else {
      return function (f, args) {
        return function (x) {
          return app(f, args.concat( /* array */[x]));
        };
      }(f, args);
    }
  };
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0:
      case 1:
        return o(a0);
      case 2:
        return function (param) {
          return o(a0, param);
        };
      case 3:
        return function (param, param$1) {
          return o(a0, param, param$1);
        };
      case 4:
        return function (param, param$1, param$2) {
          return o(a0, param, param$1, param$2);
        };
      case 5:
        return function (param, param$1, param$2, param$3) {
          return o(a0, param, param$1, param$2, param$3);
        };
      case 6:
        return function (param, param$1, param$2, param$3, param$4) {
          return o(a0, param, param$1, param$2, param$3, param$4);
        };
      case 7:
        return function (param, param$1, param$2, param$3, param$4, param$5) {
          return o(a0, param, param$1, param$2, param$3, param$4, param$5);
        };

    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return function (a0) {
      return _1(o, a0);
    };
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0, a1]);
  } else {
    switch (arity) {
      case 0:
      case 1:
        return app(o(a0), /* array */[a1]);
      case 2:
        return o(a0, a1);
      case 3:
        return function (param) {
          return o(a0, a1, param);
        };
      case 4:
        return function (param, param$1) {
          return o(a0, a1, param, param$1);
        };
      case 5:
        return function (param, param$1, param$2) {
          return o(a0, a1, param, param$1, param$2);
        };
      case 6:
        return function (param, param$1, param$2, param$3) {
          return o(a0, a1, param, param$1, param$2, param$3);
        };
      case 7:
        return function (param, param$1, param$2, param$3, param$4) {
          return o(a0, a1, param, param$1, param$2, param$3, param$4);
        };

    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return function (a0, a1) {
      return _2(o, a0, a1);
    };
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0, a1, a2]);
  } else {
    switch (arity) {
      case 0:
      case 1:
        exit = 1;
        break;
      case 2:
        return app(o(a0, a1), /* array */[a2]);
      case 3:
        return o(a0, a1, a2);
      case 4:
        return function (param) {
          return o(a0, a1, a2, param);
        };
      case 5:
        return function (param, param$1) {
          return o(a0, a1, a2, param, param$1);
        };
      case 6:
        return function (param, param$1, param$2) {
          return o(a0, a1, a2, param, param$1, param$2);
        };
      case 7:
        return function (param, param$1, param$2, param$3) {
          return o(a0, a1, a2, param, param$1, param$2, param$3);
        };

    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[a1, a2]);
  }
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return function (a0, a1, a2) {
      return _3(o, a0, a1, a2);
    };
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0, a1, a2, a3]);
  } else {
    switch (arity) {
      case 0:
      case 1:
        exit = 1;
        break;
      case 2:
        return app(o(a0, a1), /* array */[a2, a3]);
      case 3:
        return app(o(a0, a1, a2), /* array */[a3]);
      case 4:
        return o(a0, a1, a2, a3);
      case 5:
        return function (param) {
          return o(a0, a1, a2, a3, param);
        };
      case 6:
        return function (param, param$1) {
          return o(a0, a1, a2, a3, param, param$1);
        };
      case 7:
        return function (param, param$1, param$2) {
          return o(a0, a1, a2, a3, param, param$1, param$2);
        };

    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[a1, a2, a3]);
  }
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return function (a0, a1, a2, a3) {
      return _4(o, a0, a1, a2, a3);
    };
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0, a1, a2, a3, a4]);
  } else {
    switch (arity) {
      case 0:
      case 1:
        exit = 1;
        break;
      case 2:
        return app(o(a0, a1), /* array */[a2, a3, a4]);
      case 3:
        return app(o(a0, a1, a2), /* array */[a3, a4]);
      case 4:
        return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5:
        return o(a0, a1, a2, a3, a4);
      case 6:
        return function (param) {
          return o(a0, a1, a2, a3, a4, param);
        };
      case 7:
        return function (param, param$1) {
          return o(a0, a1, a2, a3, a4, param, param$1);
        };

    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[a1, a2, a3, a4]);
  }
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4) {
      return _5(o, a0, a1, a2, a3, a4);
    };
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0, a1, a2, a3, a4, a5]);
  } else {
    switch (arity) {
      case 0:
      case 1:
        exit = 1;
        break;
      case 2:
        return app(o(a0, a1), /* array */[a2, a3, a4, a5]);
      case 3:
        return app(o(a0, a1, a2), /* array */[a3, a4, a5]);
      case 4:
        return app(o(a0, a1, a2, a3), /* array */[a4, a5]);
      case 5:
        return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6:
        return o(a0, a1, a2, a3, a4, a5);
      case 7:
        return function (param) {
          return o(a0, a1, a2, a3, a4, a5, param);
        };

    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[a1, a2, a3, a4, a5]);
  }
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5) {
      return _6(o, a0, a1, a2, a3, a4, a5);
    };
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0, a1, a2, a3, a4, a5, a6]);
  } else {
    switch (arity) {
      case 0:
      case 1:
        exit = 1;
        break;
      case 2:
        return app(o(a0, a1), /* array */[a2, a3, a4, a5, a6]);
      case 3:
        return app(o(a0, a1, a2), /* array */[a3, a4, a5, a6]);
      case 4:
        return app(o(a0, a1, a2, a3), /* array */[a4, a5, a6]);
      case 5:
        return app(o(a0, a1, a2, a3, a4), /* array */[a5, a6]);
      case 6:
        return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7:
        return o(a0, a1, a2, a3, a4, a5, a6);

    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[a1, a2, a3, a4, a5, a6]);
  }
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6) {
      return _7(o, a0, a1, a2, a3, a4, a5, a6);
    };
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0, a1, a2, a3, a4, a5, a6, a7]);
  } else {
    switch (arity) {
      case 0:
      case 1:
        exit = 1;
        break;
      case 2:
        return app(o(a0, a1), /* array */[a2, a3, a4, a5, a6, a7]);
      case 3:
        return app(o(a0, a1, a2), /* array */[a3, a4, a5, a6, a7]);
      case 4:
        return app(o(a0, a1, a2, a3), /* array */[a4, a5, a6, a7]);
      case 5:
        return app(o(a0, a1, a2, a3, a4), /* array */[a5, a6, a7]);
      case 6:
        return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6, a7]);
      case 7:
        return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);

    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[a1, a2, a3, a4, a5, a6, a7]);
  }
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6, a7) {
      return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
    };
  }
}

exports.app = app;
exports.curry_1 = curry_1;
exports._1 = _1;
exports.__1 = __1;
exports.curry_2 = curry_2;
exports._2 = _2;
exports.__2 = __2;
exports.curry_3 = curry_3;
exports._3 = _3;
exports.__3 = __3;
exports.curry_4 = curry_4;
exports._4 = _4;
exports.__4 = __4;
exports.curry_5 = curry_5;
exports._5 = _5;
exports.__5 = __5;
exports.curry_6 = curry_6;
exports._6 = _6;
exports.__6 = __6;
exports.curry_7 = curry_7;
exports._7 = _7;
exports.__7 = __7;
exports.curry_8 = curry_8;
exports._8 = _8;
exports.__8 = __8;
/* No side effect */
},{"./caml_array.js":56}],58:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


function __(tag, block) {
  block.tag = tag;
  return block;
}

exports.__ = __;
/* No side effect */
},{}],59:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_nativeint_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

var caml_nativeint_compare = caml_int_compare;

var caml_int32_compare = caml_int_compare;

exports.caml_int_compare = caml_int_compare;
exports.caml_float_compare = caml_float_compare;
exports.caml_nativeint_compare = caml_nativeint_compare;
exports.caml_string_compare = caml_string_compare;
exports.caml_int32_compare = caml_int32_compare;
exports.caml_int_min = caml_int_min;
exports.caml_float_min = caml_float_min;
exports.caml_string_min = caml_string_min;
exports.caml_nativeint_min = caml_nativeint_min;
exports.caml_int32_min = caml_int32_min;
exports.caml_int_max = caml_int_max;
exports.caml_float_max = caml_float_max;
exports.caml_string_max = caml_string_max;
exports.caml_nativeint_max = caml_nativeint_max;
exports.caml_int32_max = caml_int32_max;
/* No side effect */
},{}],43:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caml_max = exports.caml_min = exports.caml_lessequal = exports.caml_lessthan = exports.caml_greaterthan = exports.caml_greaterequal = exports.caml_notequal = exports.caml_equal_nullable = exports.caml_equal_undefined = exports.caml_equal_null = exports.caml_equal = exports.caml_compare = exports.caml_update_dummy = exports.caml_lazy_make_forward = exports.caml_obj_truncate = exports.caml_obj_dup = exports.caml_obj_block = undefined;

var _block = require("./block.js");

var Block = _interopRequireWildcard(_block);

var _caml_primitive = require("./caml_primitive.js");

var Caml_primitive = _interopRequireWildcard(_caml_primitive);

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function caml_obj_block(tag, size) {
  var v = new Array(size);
  v.tag = tag;
  return v;
}

function caml_obj_dup(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [Caml_builtin_exceptions.invalid_argument, "Obj.truncate"];
  } else if (len !== new_size) {
    for (var i = new_size, i_finish = len - 1 | 0; i <= i_finish; ++i) {
      x[i] = 0;
    }
    x.length = new_size;
    return (/* () */0
    );
  } else {
    return 0;
  }
}

function caml_lazy_make_forward(x) {
  return Block.__(250, [x]);
}

function caml_update_dummy(x, y) {
  var len = y.length | 0;
  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return (/* () */0
    );
  } else {
    return 0;
  }
}

function caml_compare(_a, _b) {
  while (true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      if (a_type === "string") {
        return Caml_primitive.caml_string_compare(a, b);
      } else {
        var is_a_number = +(a_type === "number");
        var is_b_number = +(b_type === "number");
        if (is_a_number !== 0) {
          if (is_b_number !== 0) {
            return Caml_primitive.caml_int_compare(a, b);
          } else {
            return -1;
          }
        } else if (is_b_number !== 0) {
          return 1;
        } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
          var x = a;
          var y = b;
          if (x === y) {
            return 0;
          } else if (x < y) {
            return -1;
          } else {
            return 1;
          }
        } else if (a_type === "function" || b_type === "function") {
          throw [Caml_builtin_exceptions.invalid_argument, "compare: functional value"];
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue;
          } else if (tag_b === 250) {
            _b = b[0];
            continue;
          } else if (tag_a === 248) {
            return Caml_primitive.caml_int_compare(a[1], b[1]);
          } else if (tag_a === 251) {
            throw [Caml_builtin_exceptions.invalid_argument, "equal: abstract value"];
          } else if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while (true) {
                var i = _i;
                if (i === same_length) {
                  return 0;
                } else {
                  var res = caml_compare(a$1[i], b$1[i]);
                  if (res !== 0) {
                    return res;
                  } else {
                    _i = i + 1 | 0;
                    continue;
                  }
                }
              };
            } else if (len_a < len_b) {
              var a$2 = a;
              var b$2 = b;
              var _i$1 = 0;
              var short_length = len_a;
              while (true) {
                var i$1 = _i$1;
                if (i$1 === short_length) {
                  return -1;
                } else {
                  var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                  if (res$1 !== 0) {
                    return res$1;
                  } else {
                    _i$1 = i$1 + 1 | 0;
                    continue;
                  }
                }
              };
            } else {
              var a$3 = a;
              var b$3 = b;
              var _i$2 = 0;
              var short_length$1 = len_b;
              while (true) {
                var i$2 = _i$2;
                if (i$2 === short_length$1) {
                  return 1;
                } else {
                  var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                  if (res$2 !== 0) {
                    return res$2;
                  } else {
                    _i$2 = i$2 + 1 | 0;
                    continue;
                  }
                }
              };
            }
          }
        }
      }
    }
  };
}

function caml_equal(_a, _b) {
  while (true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return (/* true */1
      );
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return (/* false */0
        );
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [Caml_builtin_exceptions.invalid_argument, "equal: functional value"];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return (/* false */0
          );
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue;
          } else if (tag_b === 250) {
            _b = b[0];
            continue;
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [Caml_builtin_exceptions.invalid_argument, "equal: abstract value"];
          } else if (tag_a !== tag_b) {
            return (/* false */0
            );
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while (true) {
                var i = _i;
                if (i === same_length) {
                  return (/* true */1
                  );
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue;
                } else {
                  return (/* false */0
                  );
                }
              };
            } else {
              return (/* false */0
              );
            }
          }
        }
      }
    }
  };
}

function caml_equal_null(x, y) {
  if (y !== null) {
    return caml_equal(x, y);
  } else {
    return +(x === y);
  }
}

function caml_equal_undefined(x, y) {
  if (y !== undefined) {
    return caml_equal(x, y);
  } else {
    return +(x === y);
  }
}

function caml_equal_nullable(x, y) {
  if (y == null) {
    return +(x === y);
  } else {
    return caml_equal(x, y);
  }
}

function caml_notequal(a, b) {
  return 1 - caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return +(caml_compare(a, b) >= 0);
}

function caml_greaterthan(a, b) {
  return +(caml_compare(a, b) > 0);
}

function caml_lessequal(a, b) {
  return +(caml_compare(a, b) <= 0);
}

function caml_lessthan(a, b) {
  return +(caml_compare(a, b) < 0);
}

function caml_min(x, y) {
  if (caml_compare(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_max(x, y) {
  if (caml_compare(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}

exports.caml_obj_block = caml_obj_block;
exports.caml_obj_dup = caml_obj_dup;
exports.caml_obj_truncate = caml_obj_truncate;
exports.caml_lazy_make_forward = caml_lazy_make_forward;
exports.caml_update_dummy = caml_update_dummy;
exports.caml_compare = caml_compare;
exports.caml_equal = caml_equal;
exports.caml_equal_null = caml_equal_null;
exports.caml_equal_undefined = caml_equal_undefined;
exports.caml_equal_nullable = caml_equal_nullable;
exports.caml_notequal = caml_notequal;
exports.caml_greaterequal = caml_greaterequal;
exports.caml_greaterthan = caml_greaterthan;
exports.caml_lessthan = caml_lessthan;
exports.caml_lessequal = caml_lessequal;
exports.caml_min = caml_min;
exports.caml_max = caml_max;
/* No side effect */
},{"./block.js":58,"./caml_primitive.js":59,"./caml_builtin_exceptions.js":41}],57:[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};
},{}],35:[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caml_ml_out_channels_list = exports.caml_ml_input_char = exports.caml_ml_input = exports.caml_ml_output_char = exports.caml_ml_output = exports.node_std_output = exports.caml_ml_flush = exports.caml_ml_open_descriptor_out = exports.caml_ml_open_descriptor_in = exports.stderr = exports.stdout = exports.stdin = exports.$caret = undefined;

var _curry = require("./curry.js");

var Curry = _interopRequireWildcard(_curry);

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function $caret(prim, prim$1) {
  return prim + prim$1;
}

var stdout = /* record */[
/* buffer */"",
/* output */function (_, s) {
  var v = s.length - 1 | 0;
  if (typeof process !== "undefined" && process.stdout && process.stdout.write) {
    return process.stdout.write(s);
  } else if (s[v] === "\n") {
    console.log(s.slice(0, v));
    return (/* () */0
    );
  } else {
    console.log(s);
    return (/* () */0
    );
  }
}];

var stderr = /* record */[
/* buffer */"",
/* output */function (_, s) {
  var v = s.length - 1 | 0;
  if (s[v] === "\n") {
    console.log(s.slice(0, v));
    return (/* () */0
    );
  } else {
    console.log(s);
    return (/* () */0
    );
  }
}];

function caml_ml_open_descriptor_in() {
  throw [Caml_builtin_exceptions.failure, "caml_ml_open_descriptor_in not implemented"];
}

function caml_ml_open_descriptor_out() {
  throw [Caml_builtin_exceptions.failure, "caml_ml_open_descriptor_out not implemented"];
}

function caml_ml_flush(oc) {
  if (oc[/* buffer */0] !== "") {
    Curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
    oc[/* buffer */0] = "";
    return (/* () */0
    );
  } else {
    return 0;
  }
}

var node_std_output = function (s) {
  return typeof process !== "undefined" && process.stdout && (process.stdout.write(s), true);
};

function caml_ml_output(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
  if (typeof process !== "undefined" && process.stdout && process.stdout.write && oc === stdout) {
    return process.stdout.write(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");
    if (id < 0) {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1;
      return (/* () */0
      );
    } else {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush(oc);
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
      return (/* () */0
      );
    }
  }
}

function caml_ml_output_char(oc, $$char) {
  return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_input(_, _$1, _$2, _$3) {
  throw [Caml_builtin_exceptions.failure, "caml_ml_input ic not implemented"];
}

function caml_ml_input_char() {
  throw [Caml_builtin_exceptions.failure, "caml_ml_input_char not implemnted"];
}

function caml_ml_out_channels_list() {
  return (/* :: */[stdout,
    /* :: */[stderr,
    /* [] */0]]
  );
}

var stdin = undefined;

exports.$caret = $caret;
exports.stdin = stdin;
exports.stdout = stdout;
exports.stderr = stderr;
exports.caml_ml_open_descriptor_in = caml_ml_open_descriptor_in;
exports.caml_ml_open_descriptor_out = caml_ml_open_descriptor_out;
exports.caml_ml_flush = caml_ml_flush;
exports.node_std_output = node_std_output;
exports.caml_ml_output = caml_ml_output;
exports.caml_ml_output_char = caml_ml_output_char;
exports.caml_ml_input = caml_ml_input;
exports.caml_ml_input_char = caml_ml_input_char;
exports.caml_ml_out_channels_list = caml_ml_out_channels_list;
/* node_std_output Not a pure module */
},{"./curry.js":34,"./caml_builtin_exceptions.js":41,"process":57}],36:[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caml_sys_file_exists = exports.caml_sys_is_directory = exports.caml_sys_exit = exports.caml_sys_get_argv = exports.caml_sys_getcwd = exports.caml_sys_system_command = exports.caml_sys_random_seed = exports.caml_sys_time = exports.caml_sys_getenv = undefined;

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function caml_sys_getenv(s) {
  var match = typeof process === "undefined" ? undefined : process;
  if (match !== undefined) {
    var match$1 = match.env[s];
    if (match$1 !== undefined) {
      return match$1;
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function caml_sys_time() {
  var match = typeof process === "undefined" ? undefined : process;
  if (match !== undefined) {
    return match.uptime();
  } else {
    return -1;
  }
}

function caml_sys_random_seed() {
  return (/* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0]
  );
}

function caml_sys_system_command() {
  return 127;
}

function caml_sys_getcwd() {
  var match = typeof process === "undefined" ? undefined : process;
  if (match !== undefined) {
    return match.cwd();
  } else {
    return "/";
  }
}

function caml_sys_get_argv() {
  var match = typeof process === "undefined" ? undefined : process;
  if (match !== undefined) {
    if (match.argv == null) {
      return (/* tuple */["",
        /* array */[""]]
      );
    } else {
      return (/* tuple */[match.argv[0], match.argv]
      );
    }
  } else {
    return (/* tuple */["",
      /* array */[""]]
    );
  }
}

function caml_sys_exit(exit_code) {
  var match = typeof process === "undefined" ? undefined : process;
  if (match !== undefined) {
    return match.exit(exit_code);
  } else {
    return (/* () */0
    );
  }
}

function caml_sys_is_directory() {
  throw [Caml_builtin_exceptions.failure, "caml_sys_is_directory not implemented"];
}

function caml_sys_file_exists() {
  throw [Caml_builtin_exceptions.failure, "caml_sys_file_exists not implemented"];
}

exports.caml_sys_getenv = caml_sys_getenv;
exports.caml_sys_time = caml_sys_time;
exports.caml_sys_random_seed = caml_sys_random_seed;
exports.caml_sys_system_command = caml_sys_system_command;
exports.caml_sys_getcwd = caml_sys_getcwd;
exports.caml_sys_get_argv = caml_sys_get_argv;
exports.caml_sys_exit = caml_sys_exit;
exports.caml_sys_is_directory = caml_sys_is_directory;
exports.caml_sys_file_exists = caml_sys_file_exists;
/* No side effect */
},{"./caml_builtin_exceptions.js":41,"process":57}],24:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imul = exports.caml_nativeint_bswap = exports.caml_int32_bswap = exports.caml_bswap16 = exports.mod_ = exports.div = undefined;

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function div(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return (x & 255) << 8 | (x & 65280) >>> 8;
}

function caml_int32_bswap(x) {
  return (x & 255) << 24 | (x & 65280) << 8 | (x & 16711680) >>> 8 | (x & 4278190080) >>> 24;
}

var imul = Math.imul || function (x, y) {
  y |= 0;return ((x >> 16) * y << 16) + (x & 0xffff) * y | 0;
};

var caml_nativeint_bswap = caml_int32_bswap;

exports.div = div;
exports.mod_ = mod_;
exports.caml_bswap16 = caml_bswap16;
exports.caml_int32_bswap = caml_int32_bswap;
exports.caml_nativeint_bswap = caml_nativeint_bswap;
exports.imul = imul;
/* imul Not a pure module */
},{"./caml_builtin_exceptions.js":41}],55:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var repeat = String.prototype.repeat && function (count, self) {
    return self.repeat(count);
} || function (count, self) {
    if (self.length == 0 || count == 0) {
        return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (self.length * count >= 1 << 28) {
        throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (;;) {
        if ((count & 1) == 1) {
            rpt += self;
        }
        count >>>= 1;
        if (count == 0) {
            break;
        }
        self += self;
    }
    return rpt;
};

exports.repeat = repeat;
/* repeat Not a pure module */
},{}],54:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get64 = exports.bits_of_float = exports.float_of_bits = exports.discard_sign = exports.to_hex = exports.compare = exports.div_mod = exports.mod_ = exports.div = exports.of_float = exports.to_float = exports.max = exports.min = exports.equal_nullable = exports.equal_undefined = exports.equal_null = exports.le = exports.gt = exports.lt = exports.neq = exports.eq = exports.ge = exports.swap = exports.and_ = exports.or_ = exports.xor = exports.mul = exports.is_zero = exports.asr_ = exports.lsr_ = exports.lsl_ = exports.sub = exports.neg = exports.add = exports.to_int32 = exports.of_int32 = exports.not = exports.zero = exports.one = exports.max_int = exports.min_int = undefined;

var _caml_int = require("./caml_int32.js");

var Caml_int32 = _interopRequireWildcard(_caml_int);

var _caml_utils = require("./caml_utils.js");

var Caml_utils = _interopRequireWildcard(_caml_utils);

var _caml_primitive = require("./caml_primitive.js");

var Caml_primitive = _interopRequireWildcard(_caml_primitive);

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var min_int = /* record */[
/* hi */-2147483648,
/* lo */0];

var max_int = /* record */[
/* hi */2147483647,
/* lo */1];

var one = /* record */[
/* hi */0,
/* lo */1];

var zero = /* record */[
/* hi */0,
/* lo */0];

var neg_one = /* record */[
/* hi */-1,
/* lo */4294967295];

function neg_signed(x) {
  return +((x & 2147483648) !== 0);
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return (/* record */[
    /* hi */hi,
    /* lo */lo >>> 0]
  );
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return (/* record */[
    /* hi */hi,
    /* lo */lo >>> 0]
  );
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return +(x[/* lo */1] === y[/* lo */1]);
  } else {
    return (/* false */0
    );
  }
}

function equal_null(x, y) {
  if (y !== null) {
    return eq(x, y);
  } else {
    return (/* false */0
    );
  }
}

function equal_undefined(x, y) {
  if (y !== undefined) {
    return eq(x, y);
  } else {
    return (/* false */0
    );
  }
}

function equal_nullable(x, y) {
  if (y == null) {
    return (/* false */0
    );
  } else {
    return eq(x, y);
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return (/* record */[
        /* hi */lo << (numBits - 32 | 0),
        /* lo */0]
      );
    } else {
      var hi = lo >>> (32 - numBits | 0) | x[/* hi */0] << numBits;
      return (/* record */[
        /* hi */hi,
        /* lo */lo << numBits >>> 0]
      );
    }
  }
}

function lsr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset === 0) {
      return (/* record */[
        /* hi */0,
        /* lo */hi >>> 0]
      );
    } else if (offset > 0) {
      var lo = hi >>> offset;
      return (/* record */[
        /* hi */0,
        /* lo */lo >>> 0]
      );
    } else {
      var hi$1 = hi >>> numBits;
      var lo$1 = hi << (-offset | 0) | x[/* lo */1] >>> numBits;
      return (/* record */[
        /* hi */hi$1,
        /* lo */lo$1 >>> 0]
      );
    }
  }
}

function asr_(x, numBits) {
  if (numBits === 0) {
    return x;
  } else {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = hi >> numBits;
      var lo = hi << (32 - numBits | 0) | x[/* lo */1] >>> numBits;
      return (/* record */[
        /* hi */hi$1,
        /* lo */lo >>> 0]
      );
    } else {
      var lo$1 = hi >> (numBits - 32 | 0);
      return (/* record */[
        /* hi */hi >= 0 ? 0 : -1,
        /* lo */lo$1 >>> 0]
      );
    }
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return (/* false */0
    );
  } else {
    return (/* true */1
    );
  }
}

function mul(_this, _other) {
  while (true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0 || $$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648 || $$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648 || other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue;
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = this_hi >>> 16;
          var a32 = this_hi & 65535;
          var a16 = lo$1 >>> 16;
          var a00 = lo$1 & 65535;
          var b48 = other_hi >>> 16;
          var b32 = other_hi & 65535;
          var b16 = other_lo >>> 16;
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = c16 >>> 16;
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = c32 >>> 16;
          c32 = (c32 & 65535) + a16 * b16;
          c48 += c32 >>> 16;
          c32 = (c32 & 65535) + a00 * b32;
          c48 += c32 >>> 16;
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | c48 << 16;
          var lo$2 = c00 & 65535 | (c16 & 65535) << 16;
          return (/* record */[
            /* hi */hi,
            /* lo */lo$2 >>> 0]
          );
        }
      }
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
  };
}

function swap(param) {
  var hi = Caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = Caml_int32.caml_int32_bswap(param[/* hi */0]);
  return (/* record */[
    /* hi */hi,
    /* lo */lo >>> 0]
  );
}

function xor(param, param$1) {
  return (/* record */[
    /* hi */param[/* hi */0] ^ param$1[/* hi */0],
    /* lo */(param[/* lo */1] ^ param$1[/* lo */1]) >>> 0]
  );
}

function or_(param, param$1) {
  return (/* record */[
    /* hi */param[/* hi */0] | param$1[/* hi */0],
    /* lo */(param[/* lo */1] | param$1[/* lo */1]) >>> 0]
  );
}

function and_(param, param$1) {
  return (/* record */[
    /* hi */param[/* hi */0] & param$1[/* hi */0],
    /* lo */(param[/* lo */1] & param$1[/* lo */1]) >>> 0]
  );
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return (/* true */1
    );
  } else if (hi < other_hi) {
    return (/* false */0
    );
  } else {
    return +(param[/* lo */1] >= param$1[/* lo */1]);
  }
}

function neq(x, y) {
  return 1 - eq(x, y);
}

function lt(x, y) {
  return 1 - ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return (/* true */1
    );
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return (/* false */0
    );
  } else {
    return +(x[/* lo */1] > y[/* lo */1]);
  }
}

function le(x, y) {
  return 1 - gt(x, y);
}

function min(x, y) {
  if (ge(x, y)) {
    return y;
  } else {
    return x;
  }
}

function max(x, y) {
  if (gt(x, y)) {
    return x;
  } else {
    return y;
  }
}

function to_float(param) {
  return param[/* hi */0] * 0x100000000 + param[/* lo */1];
}

var two_ptr_32_dbl = Math.pow(2, 32);

var two_ptr_63_dbl = Math.pow(2, 63);

var neg_two_ptr_63 = -Math.pow(2, 63);

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= neg_two_ptr_63) {
    return min_int;
  } else if (x + 1 >= two_ptr_63_dbl) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / two_ptr_32_dbl | 0;
    var lo = x % two_ptr_32_dbl | 0;
    return (/* record */[
      /* hi */hi,
      /* lo */lo >>> 0]
    );
  }
}

function div(_self, _other) {
  while (true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0 || other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw Caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0 || self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0 || approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div(rem, other));
        }
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648 || other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue;
          } else {
            return neg(div(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while (ge(rem$1, other)) {
            var approx$1 = Caml_primitive.caml_float_max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while (approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            };
            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          };
          return res;
        }
      }
    }
  };
}

function mod_(self, other) {
  var y = mul(div(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return (/* tuple */[quotient, add(self, neg(y))]
  );
}

function compare(self, other) {
  var v = Caml_primitive.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v === 0) {
    return Caml_primitive.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  } else {
    return v;
  }
}

function of_int32(lo) {
  return (/* record */[
    /* hi */lo < 0 ? -1 : 0,
    /* lo */lo >>> 0]
  );
}

function to_int32(x) {
  return x[/* lo */1] | 0;
}

function to_hex(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0 || match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (Caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
}

function discard_sign(x) {
  return (/* record */[
    /* hi */2147483647 & x[/* hi */0],
    /* lo */x[/* lo */1]]
  );
}

function float_of_bits(x) {
  var int32 = new Int32Array( /* array */[x[/* lo */1], x[/* hi */0]]);
  return new Float64Array(int32.buffer)[0];
}

function bits_of_float(x) {
  var u = new Float64Array( /* float array */[x]);
  var int32 = new Int32Array(u.buffer);
  var x$1 = int32[1];
  var hi = x$1;
  var x$2 = int32[0];
  var lo = x$2;
  return (/* record */[
    /* hi */hi,
    /* lo */lo >>> 0]
  );
}

function get64(s, i) {
  var hi = s.charCodeAt(i + 4 | 0) << 32 | s.charCodeAt(i + 5 | 0) << 40 | s.charCodeAt(i + 6 | 0) << 48 | s.charCodeAt(i + 7 | 0) << 56;
  var lo = s.charCodeAt(i) | s.charCodeAt(i + 1 | 0) << 8 | s.charCodeAt(i + 2 | 0) << 16 | s.charCodeAt(i + 3 | 0) << 24;
  return (/* record */[
    /* hi */hi,
    /* lo */lo >>> 0]
  );
}

exports.min_int = min_int;
exports.max_int = max_int;
exports.one = one;
exports.zero = zero;
exports.not = not;
exports.of_int32 = of_int32;
exports.to_int32 = to_int32;
exports.add = add;
exports.neg = neg;
exports.sub = sub;
exports.lsl_ = lsl_;
exports.lsr_ = lsr_;
exports.asr_ = asr_;
exports.is_zero = is_zero;
exports.mul = mul;
exports.xor = xor;
exports.or_ = or_;
exports.and_ = and_;
exports.swap = swap;
exports.ge = ge;
exports.eq = eq;
exports.neq = neq;
exports.lt = lt;
exports.gt = gt;
exports.le = le;
exports.equal_null = equal_null;
exports.equal_undefined = equal_undefined;
exports.equal_nullable = equal_nullable;
exports.min = min;
exports.max = max;
exports.to_float = to_float;
exports.of_float = of_float;
exports.div = div;
exports.mod_ = mod_;
exports.div_mod = div_mod;
exports.compare = compare;
exports.to_hex = to_hex;
exports.discard_sign = discard_sign;
exports.float_of_bits = float_of_bits;
exports.bits_of_float = bits_of_float;
exports.get64 = get64;
/* two_ptr_32_dbl Not a pure module */
},{"./caml_int32.js":24,"./caml_utils.js":55,"./caml_primitive.js":59,"./caml_builtin_exceptions.js":41}],37:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caml_nativeint_of_string = exports.caml_int64_of_string = exports.caml_int32_of_string = exports.caml_int_of_string = exports.caml_int64_format = exports.caml_float_of_string = exports.caml_int32_format = exports.caml_nativeint_format = exports.caml_format_int = exports.caml_format_float = undefined;

var _curry = require("./curry.js");

var Curry = _interopRequireWildcard(_curry);

var _caml_int = require("./caml_int32.js");

var Caml_int32 = _interopRequireWildcard(_caml_int);

var _caml_int2 = require("./caml_int64.js");

var Caml_int64 = _interopRequireWildcard(_caml_int2);

var _caml_utils = require("./caml_utils.js");

var Caml_utils = _interopRequireWildcard(_caml_utils);

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function caml_failwith(s) {
  throw [Caml_builtin_exceptions.failure, s];
}

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0:
      return 8;
    case 1:
      return 16;
    case 2:
      return 10;
    case 3:
      return 2;

  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  if (s[i] === "-") {
    sign = -1;
    i = i + 1 | 0;
  }
  var match = s.charCodeAt(i);
  var match$1 = s.charCodeAt(i + 1 | 0);
  if (match === 48) {
    if (match$1 >= 89) {
      if (match$1 !== 98) {
        if (match$1 !== 111) {
          if (match$1 === 120) {
            base = /* Hex */1;
            i = i + 2 | 0;
          }
        } else {
          base = /* Oct */0;
          i = i + 2 | 0;
        }
      } else {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 !== 79) {
        if (match$1 >= 88) {
          base = /* Hex */1;
          i = i + 2 | 0;
        }
      } else {
        base = /* Oct */0;
        i = i + 2 | 0;
      }
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return (/* tuple */[i, sign, base]
  );
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [Caml_builtin_exceptions.failure, "int_of_string"];
  }
  var aux = function (_acc, _k) {
    while (true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue;
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [Caml_builtin_exceptions.failure, "int_of_string"];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [Caml_builtin_exceptions.failure, "int_of_string"];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue;
            }
          }
        }
      }
    };
  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [Caml_builtin_exceptions.failure, "int_of_string"];
  }
  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = Caml_int64.of_int32(int_of_string_base(hbase));
  var sign = Caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0:
      threshold = /* int64 */[
      /* hi */536870911,
      /* lo */4294967295];
      break;
    case 1:
      threshold = /* int64 */[
      /* hi */268435455,
      /* lo */4294967295];
      break;
    case 2:
      threshold = /* int64 */[
      /* hi */429496729,
      /* lo */2576980377];
      break;
    case 3:
      threshold = /* int64 */[
      /* hi */2147483647,
      /* lo */4294967295];
      break;

  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = Caml_int64.of_int32(parse_digit(c));
  if (Caml_int64.lt(d, /* int64 */[
  /* hi */0,
  /* lo */0]) || Caml_int64.ge(d, base)) {
    throw [Caml_builtin_exceptions.failure, "int64_of_string"];
  }
  var aux = function (_acc, _k) {
    while (true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue;
        } else {
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml_int64.lt(v, /* int64 */[
          /* hi */0,
          /* lo */0]) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
            throw [Caml_builtin_exceptions.failure, "int64_of_string"];
          } else {
            var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue;
          }
        }
      }
    };
  };
  var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = Caml_int64.or_(res, /* int64 */[
  /* hi */0,
  /* lo */0]);
  if (Caml_int64.eq(base, /* int64 */[
  /* hi */0,
  /* lo */10]) && Caml_int64.neq(res, or_res)) {
    throw [Caml_builtin_exceptions.failure, "int64_of_string"];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0:
      return 8;
    case 1:
      return 16;
    case 2:
      return 10;

  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [Caml_builtin_exceptions.invalid_argument, "format_int: format too long"];
  }
  var f = /* record */[
  /* justify */"+",
  /* signstyle */"-",
  /* filter */" ",
  /* alternate : false */0,
  /* base : Dec */2,
  /* signedconv : false */0,
  /* width */0,
  /* uppercase : false */0,
  /* sign */1,
  /* prec */-1,
  /* conv */"f"];
  var _i = 0;
  while (true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0:
                f[/* base */4] = /* Hex */1;
                f[/* uppercase */7] = /* true */1;
                _i = i + 1 | 0;
                continue;
              case 13:
              case 14:
              case 15:
                exit = 5;
                break;
              case 12:
              case 17:
                exit = 4;
                break;
              case 23:
                f[/* base */4] = /* Oct */0;
                _i = i + 1 | 0;
                continue;
              case 29:
                f[/* base */4] = /* Dec */2;
                _i = i + 1 | 0;
                continue;
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
              case 10:
              case 11:
              case 16:
              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
              case 24:
              case 25:
              case 26:
              case 27:
              case 28:
              case 30:
              case 31:
                exit = 1;
                break;
              case 32:
                f[/* base */4] = /* Hex */1;
                _i = i + 1 | 0;
                continue;

            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue;
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3:
              f[/* alternate */3] = /* true */1;
              _i = i + 1 | 0;
              continue;
            case 0:
            case 11:
              exit = 2;
              break;
            case 13:
              f[/* justify */0] = "-";
              _i = i + 1 | 0;
              continue;
            case 14:
              f[/* prec */9] = 0;
              var j = i + 1 | 0;
              while (function (j) {
                return function () {
                  var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                };
              }(j)()) {
                f[/* prec */9] = (Caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                j = j + 1 | 0;
              };
              _i = j;
              continue;
            case 1:
            case 2:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 12:
            case 15:
              exit = 1;
              break;
            case 16:
              f[/* filter */2] = "0";
              _i = i + 1 | 0;
              continue;
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
              exit = 3;
              break;

          }
        }
      }
      switch (exit) {
        case 1:
          _i = i + 1 | 0;
          continue;
        case 2:
          f[/* signstyle */1] = String.fromCharCode(c);
          _i = i + 1 | 0;
          continue;
        case 3:
          f[/* width */6] = 0;
          var j$1 = i;
          while (function (j$1) {
            return function () {
              var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
              return +(w >= 0 && w <= 9);
            };
          }(j$1)()) {
            f[/* width */6] = (Caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
            j$1 = j$1 + 1 | 0;
          };
          _i = j$1;
          continue;
        case 4:
          f[/* signedconv */5] = /* true */1;
          f[/* base */4] = /* Dec */2;
          _i = i + 1 | 0;
          continue;
        case 5:
          f[/* signedconv */5] = /* true */1;
          f[/* conv */10] = String.fromCharCode(c);
          _i = i + 1 | 0;
          continue;

      }
    }
  };
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base === /* Oct */0) {
      len = len + 1 | 0;
    } else if (base === /* Hex */1) {
      len = len + 2 | 0;
    }
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for (var i = len, i_finish = width - 1 | 0; i <= i_finish; ++i) {
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for (var i$1 = len, i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1) {
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for (var i$2 = len, i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2) {
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : i$1 >>> 0 : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = Caml_utils.repeat(n, "0") + s;
      }
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && Caml_int64.lt(x, /* int64 */[
  /* hi */0,
  /* lo */0]) ? (f[/* sign */8] = -1, Caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0:
      var wbase = /* int64 */[
      /* hi */0,
      /* lo */8];
      var cvtbl = "01234567";
      if (Caml_int64.lt(x$1, /* int64 */[
      /* hi */0,
      /* lo */0])) {
        var y = Caml_int64.discard_sign(x$1);
        var match$1 = Caml_int64.div_mod(y, wbase);
        var quotient = Caml_int64.add( /* int64 */[
        /* hi */268435456,
        /* lo */0], match$1[0]);
        var modulus = match$1[1];
        s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
        while (Caml_int64.neq(quotient, /* int64 */[
        /* hi */0,
        /* lo */0])) {
          var match$2 = Caml_int64.div_mod(quotient, wbase);
          quotient = match$2[0];
          modulus = match$2[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
        };
      } else {
        var match$3 = Caml_int64.div_mod(x$1, wbase);
        var quotient$1 = match$3[0];
        var modulus$1 = match$3[1];
        s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
        while (Caml_int64.neq(quotient$1, /* int64 */[
        /* hi */0,
        /* lo */0])) {
          var match$4 = Caml_int64.div_mod(quotient$1, wbase);
          quotient$1 = match$4[0];
          modulus$1 = match$4[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
        };
      }
      break;
    case 1:
      s = Caml_int64.to_hex(x$1) + s;
      break;
    case 2:
      var wbase$1 = /* int64 */[
      /* hi */0,
      /* lo */10];
      var cvtbl$1 = "0123456789";
      if (Caml_int64.lt(x$1, /* int64 */[
      /* hi */0,
      /* lo */0])) {
        var y$1 = Caml_int64.discard_sign(x$1);
        var match$5 = Caml_int64.div_mod(y$1, wbase$1);
        var match$6 = Caml_int64.div_mod(Caml_int64.add( /* int64 */[
        /* hi */0,
        /* lo */8], match$5[1]), wbase$1);
        var quotient$2 = Caml_int64.add(Caml_int64.add( /* int64 */[
        /* hi */214748364,
        /* lo */3435973836], match$5[0]), match$6[0]);
        var modulus$2 = match$6[1];
        s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
        while (Caml_int64.neq(quotient$2, /* int64 */[
        /* hi */0,
        /* lo */0])) {
          var match$7 = Caml_int64.div_mod(quotient$2, wbase$1);
          quotient$2 = match$7[0];
          modulus$2 = match$7[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
        };
      } else {
        var match$8 = Caml_int64.div_mod(x$1, wbase$1);
        var quotient$3 = match$8[0];
        var modulus$3 = match$8[1];
        s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
        while (Caml_int64.neq(quotient$3, /* int64 */[
        /* hi */0,
        /* lo */0])) {
          var match$9 = Caml_int64.div_mod(quotient$3, wbase$1);
          quotient$3 = match$9[0];
          modulus$3 = match$9[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
        };
      }
      break;

  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = Caml_utils.repeat(n, "0") + s;
    }
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e":
        s = x$1.toExponential(prec);
        var i = s.length;
        if (s[i - 3 | 0] === "e") {
          s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
        }
        break;
      case "f":
        s = x$1.toFixed(prec);
        break;
      case "g":
        var prec$1 = prec !== 0 ? prec : 1;
        s = x$1.toExponential(prec$1 - 1 | 0);
        var j = s.indexOf("e");
        var exp = Number(s.slice(j + 1 | 0)) | 0;
        if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
          var i$1 = j - 1 | 0;
          while (s[i$1] === "0") {
            i$1 = i$1 - 1 | 0;
          };
          if (s[i$1] === ".") {
            i$1 = i$1 - 1 | 0;
          }
          s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
          var i$2 = s.length;
          if (s[i$2 - 3 | 0] === "e") {
            s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
          }
        } else {
          var p = prec$1;
          if (exp < 0) {
            p = p - (exp + 1 | 0) | 0;
            s = x$1.toFixed(p);
          } else {
            while (function () {
              s = x$1.toFixed(p);
              return +(s.length > (prec$1 + 1 | 0));
            }()) {
              p = p - 1 | 0;
            };
          }
          if (p !== 0) {
            var k = s.length - 1 | 0;
            while (s[k] === "0") {
              k = k - 1 | 0;
            };
            if (s[k] === ".") {
              k = k - 1 | 0;
            }
            s = s.slice(0, k + 1 | 0);
          }
        }
        break;
      default:

    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

var float_of_string = function (s, caml_failwith) {
  var res = +s;
  if (s.length > 0 && res === res) return res;
  s = s.replace(/_/g, "");
  res = +s;
  if (s.length > 0 && res === res || /^[+-]?nan$/i.test(s)) {
    return res;
  }
  ;
  if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
    var pidx = s.indexOf('p');
    pidx = pidx == -1 ? s.indexOf('P') : pidx;
    var exp = +s.substring(pidx + 1);
    res = +s.substring(0, pidx);
    return res * Math.pow(2, exp);
  }
  if (/^\+?inf(inity)?$/i.test(s)) return Infinity;
  if (/^-inf(inity)?$/i.test(s)) return -Infinity;
  caml_failwith("float_of_string");
};

function caml_float_of_string(s) {
  return Curry._2(float_of_string, s, caml_failwith);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;

var caml_int32_of_string = caml_int_of_string;

var caml_nativeint_of_string = caml_int_of_string;

exports.caml_format_float = caml_format_float;
exports.caml_format_int = caml_format_int;
exports.caml_nativeint_format = caml_nativeint_format;
exports.caml_int32_format = caml_int32_format;
exports.caml_float_of_string = caml_float_of_string;
exports.caml_int64_format = caml_int64_format;
exports.caml_int_of_string = caml_int_of_string;
exports.caml_int32_of_string = caml_int32_of_string;
exports.caml_int64_of_string = caml_int64_of_string;
exports.caml_nativeint_of_string = caml_nativeint_of_string;
/* float_of_string Not a pure module */
},{"./curry.js":34,"./caml_int32.js":24,"./caml_int64.js":54,"./caml_utils.js":55,"./caml_builtin_exceptions.js":41}],38:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.string_of_char = exports.caml_string_get32 = exports.caml_string_get16 = exports.caml_blit_bytes = exports.caml_blit_string = exports.caml_fill_string = exports.caml_create_string = exports.caml_string_get = exports.caml_string_of_char_array = exports.caml_is_printable = exports.bytes_to_string = exports.bytes_of_string = undefined;

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function string_of_char(prim) {
  return String.fromCharCode(prim);
}

function caml_string_get(s, i) {
  if (i >= s.length || i < 0) {
    throw [Caml_builtin_exceptions.invalid_argument, "index out of bounds"];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_create_string(len) {
  if (len < 0) {
    throw [Caml_builtin_exceptions.invalid_argument, "String.create"];
  } else {
    var result = new Array(len);
    for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
      result[i] = /* "\000" */0;
    }
    return result;
  }
}

function caml_fill_string(s, i, l, c) {
  if (l > 0) {
    for (var k = i, k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k) {
      s[k] = c;
    }
    return (/* () */0
    );
  } else {
    return 0;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return (/* () */0
      );
    } else {
      for (var i$1 = 0, i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1) {
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for (var i$2 = off1, i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2) {
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return (/* () */0
      );
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for (var j = range; j >= 0; --j) {
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return (/* () */0
        );
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for (var k = 0; k <= range$1; ++k) {
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return (/* () */0
        );
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return (/* () */0
        );
      } else {
        for (var i$1 = 0, i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1) {
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for (var i$2 = off1, i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2) {
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return (/* () */0
        );
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null, bytes);
  } else {
    var offset = 0;
    while (s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null, tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    };
    return s;
  }
}

function caml_string_of_char_array(chars) {
  var len = chars.length;
  var bytes = new Array(len);
  for (var i = 0, i_finish = len - 1 | 0; i <= i_finish; ++i) {
    bytes[i] = chars[i];
  }
  return bytes_to_string(bytes);
}

function caml_is_printable(c) {
  if (c > 31) {
    return +(c < 127);
  } else {
    return (/* false */0
    );
  }
}

function caml_string_get16(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [Caml_builtin_exceptions.invalid_argument, "index out of bounds"];
  } else {
    return s.charCodeAt(i);
  }
}

exports.bytes_of_string = bytes_of_string;
exports.bytes_to_string = bytes_to_string;
exports.caml_is_printable = caml_is_printable;
exports.caml_string_of_char_array = caml_string_of_char_array;
exports.caml_string_get = caml_string_get;
exports.caml_create_string = caml_create_string;
exports.caml_fill_string = caml_fill_string;
exports.caml_blit_string = caml_blit_string;
exports.caml_blit_bytes = caml_blit_bytes;
exports.caml_string_get16 = caml_string_get16;
exports.caml_string_get32 = caml_string_get32;
exports.string_of_char = string_of_char;
exports.get = get;
/* No side effect */
},{"./caml_builtin_exceptions.js":41}],39:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var id = [0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id( /* () */0);
  var v = /* tuple */[str, v_001];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return (/* false */0
    );
  } else if (e.tag === 248) {
    return (/* true */1
    );
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return (/* false */0
      );
    }
  }
}

exports.caml_set_oo_id = caml_set_oo_id;
exports.get_id = get_id;
exports.create = create;
exports.isCamlExceptionOrOpenVariant = isCamlExceptionOrOpenVariant;
/* No side effect */
},{}],40:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var not_implemented = function (s) {
  throw new Error(s);
};

exports.not_implemented = not_implemented;
/* not_implemented Not a pure module */
},{}],42:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat_fmt = exports.erase_rel = exports.concat_fmtty = undefined;

var _block = require("./block.js");

var Block = _interopRequireWildcard(_block);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function erase_rel(param) {
    if (typeof param === "number") {
        return (/* End_of_fmtty */0
        );
    } else {
        switch (param.tag | 0) {
            case 0:
                return (/* Char_ty */Block.__(0, [erase_rel(param[0])])
                );
            case 1:
                return (/* String_ty */Block.__(1, [erase_rel(param[0])])
                );
            case 2:
                return (/* Int_ty */Block.__(2, [erase_rel(param[0])])
                );
            case 3:
                return (/* Int32_ty */Block.__(3, [erase_rel(param[0])])
                );
            case 4:
                return (/* Nativeint_ty */Block.__(4, [erase_rel(param[0])])
                );
            case 5:
                return (/* Int64_ty */Block.__(5, [erase_rel(param[0])])
                );
            case 6:
                return (/* Float_ty */Block.__(6, [erase_rel(param[0])])
                );
            case 7:
                return (/* Bool_ty */Block.__(7, [erase_rel(param[0])])
                );
            case 8:
                return (/* Format_arg_ty */Block.__(8, [param[0], erase_rel(param[1])])
                );
            case 9:
                var ty1 = param[0];
                return (/* Format_subst_ty */Block.__(9, [ty1, ty1, erase_rel(param[2])])
                );
            case 10:
                return (/* Alpha_ty */Block.__(10, [erase_rel(param[0])])
                );
            case 11:
                return (/* Theta_ty */Block.__(11, [erase_rel(param[0])])
                );
            case 12:
                return (/* Any_ty */Block.__(12, [erase_rel(param[0])])
                );
            case 13:
                return (/* Reader_ty */Block.__(13, [erase_rel(param[0])])
                );
            case 14:
                return (/* Ignored_reader_ty */Block.__(14, [erase_rel(param[0])])
                );

        }
    }
}

function concat_fmtty(fmtty1, fmtty2) {
    if (typeof fmtty1 === "number") {
        return fmtty2;
    } else {
        switch (fmtty1.tag | 0) {
            case 0:
                return (/* Char_ty */Block.__(0, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 1:
                return (/* String_ty */Block.__(1, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 2:
                return (/* Int_ty */Block.__(2, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 3:
                return (/* Int32_ty */Block.__(3, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 4:
                return (/* Nativeint_ty */Block.__(4, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 5:
                return (/* Int64_ty */Block.__(5, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 6:
                return (/* Float_ty */Block.__(6, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 7:
                return (/* Bool_ty */Block.__(7, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 8:
                return (/* Format_arg_ty */Block.__(8, [fmtty1[0], concat_fmtty(fmtty1[1], fmtty2)])
                );
            case 9:
                return (/* Format_subst_ty */Block.__(9, [fmtty1[0], fmtty1[1], concat_fmtty(fmtty1[2], fmtty2)])
                );
            case 10:
                return (/* Alpha_ty */Block.__(10, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 11:
                return (/* Theta_ty */Block.__(11, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 12:
                return (/* Any_ty */Block.__(12, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 13:
                return (/* Reader_ty */Block.__(13, [concat_fmtty(fmtty1[0], fmtty2)])
                );
            case 14:
                return (/* Ignored_reader_ty */Block.__(14, [concat_fmtty(fmtty1[0], fmtty2)])
                );

        }
    }
}

function concat_fmt(fmt1, fmt2) {
    if (typeof fmt1 === "number") {
        return fmt2;
    } else {
        switch (fmt1.tag | 0) {
            case 0:
                return (/* Char */Block.__(0, [concat_fmt(fmt1[0], fmt2)])
                );
            case 1:
                return (/* Caml_char */Block.__(1, [concat_fmt(fmt1[0], fmt2)])
                );
            case 2:
                return (/* String */Block.__(2, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
                );
            case 3:
                return (/* Caml_string */Block.__(3, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
                );
            case 4:
                return (/* Int */Block.__(4, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
                );
            case 5:
                return (/* Int32 */Block.__(5, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
                );
            case 6:
                return (/* Nativeint */Block.__(6, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
                );
            case 7:
                return (/* Int64 */Block.__(7, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
                );
            case 8:
                return (/* Float */Block.__(8, [fmt1[0], fmt1[1], fmt1[2], concat_fmt(fmt1[3], fmt2)])
                );
            case 9:
                return (/* Bool */Block.__(9, [concat_fmt(fmt1[0], fmt2)])
                );
            case 10:
                return (/* Flush */Block.__(10, [concat_fmt(fmt1[0], fmt2)])
                );
            case 11:
                return (/* String_literal */Block.__(11, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
                );
            case 12:
                return (/* Char_literal */Block.__(12, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
                );
            case 13:
                return (/* Format_arg */Block.__(13, [fmt1[0], fmt1[1], concat_fmt(fmt1[2], fmt2)])
                );
            case 14:
                return (/* Format_subst */Block.__(14, [fmt1[0], fmt1[1], concat_fmt(fmt1[2], fmt2)])
                );
            case 15:
                return (/* Alpha */Block.__(15, [concat_fmt(fmt1[0], fmt2)])
                );
            case 16:
                return (/* Theta */Block.__(16, [concat_fmt(fmt1[0], fmt2)])
                );
            case 17:
                return (/* Formatting_lit */Block.__(17, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
                );
            case 18:
                return (/* Formatting_gen */Block.__(18, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
                );
            case 19:
                return (/* Reader */Block.__(19, [concat_fmt(fmt1[0], fmt2)])
                );
            case 20:
                return (/* Scan_char_set */Block.__(20, [fmt1[0], fmt1[1], concat_fmt(fmt1[2], fmt2)])
                );
            case 21:
                return (/* Scan_get_counter */Block.__(21, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
                );
            case 22:
                return (/* Scan_next_char */Block.__(22, [concat_fmt(fmt1[0], fmt2)])
                );
            case 23:
                return (/* Ignored_param */Block.__(23, [fmt1[0], concat_fmt(fmt1[1], fmt2)])
                );
            case 24:
                return (/* Custom */Block.__(24, [fmt1[0], fmt1[1], concat_fmt(fmt1[2], fmt2)])
                );

        }
    }
}

exports.concat_fmtty = concat_fmtty;
exports.erase_rel = erase_rel;
exports.concat_fmt = concat_fmt;
/* No side effect */
},{"./block.js":58}],13:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.do_at_exit = exports.unsafe_really_input = exports.valid_float_lexem = exports.at_exit = exports.exit = exports.$caret$caret = exports.string_of_format = exports.LargeFile = exports.set_binary_mode_in = exports.close_in_noerr = exports.close_in = exports.in_channel_length = exports.pos_in = exports.seek_in = exports.input_value = exports.input_binary_int = exports.input_byte = exports.really_input_string = exports.really_input = exports.input = exports.input_line = exports.input_char = exports.open_in_gen = exports.open_in_bin = exports.open_in = exports.set_binary_mode_out = exports.close_out_noerr = exports.close_out = exports.out_channel_length = exports.pos_out = exports.seek_out = exports.output_value = exports.output_binary_int = exports.output_byte = exports.output_substring = exports.output = exports.output_bytes = exports.output_string = exports.output_char = exports.flush_all = exports.flush = exports.open_out_gen = exports.open_out_bin = exports.open_out = exports.read_float = exports.read_int = exports.read_line = exports.prerr_newline = exports.prerr_float = exports.prerr_int = exports.prerr_bytes = exports.prerr_string = exports.prerr_char = exports.print_newline = exports.print_float = exports.print_int = exports.print_bytes = exports.print_string = exports.print_char = exports.stderr = exports.stdout = exports.stdin = exports.$at = exports.string_of_float = exports.bool_of_string = exports.string_of_bool = exports.char_of_int = exports.epsilon_float = exports.lnot = exports.min_int = exports.max_int = exports.abs = exports.Exit = exports.failwith = exports.invalid_arg = undefined;

var _curry = require("./curry.js");

var Curry = _interopRequireWildcard(_curry);

var _caml_io = require("./caml_io.js");

var Caml_io = _interopRequireWildcard(_caml_io);

var _caml_sys = require("./caml_sys.js");

var Caml_sys = _interopRequireWildcard(_caml_sys);

var _caml_format = require("./caml_format.js");

var Caml_format = _interopRequireWildcard(_caml_format);

var _caml_string = require("./caml_string.js");

var Caml_string = _interopRequireWildcard(_caml_string);

var _caml_exceptions = require("./caml_exceptions.js");

var Caml_exceptions = _interopRequireWildcard(_caml_exceptions);

var _caml_missing_polyfill = require("./caml_missing_polyfill.js");

var Caml_missing_polyfill = _interopRequireWildcard(_caml_missing_polyfill);

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

var _camlinternalFormatBasics = require("./camlinternalFormatBasics.js");

var CamlinternalFormatBasics = _interopRequireWildcard(_camlinternalFormatBasics);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function failwith(s) {
  throw [Caml_builtin_exceptions.failure, s];
}

function invalid_arg(s) {
  throw [Caml_builtin_exceptions.invalid_argument, s];
}

var Exit = Caml_exceptions.create("Pervasives.Exit");

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int = -2147483648;

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw [Caml_builtin_exceptions.invalid_argument, "char_of_int"];
  } else {
    return n;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false":
      return (/* false */0
      );
    case "true":
      return (/* true */1
      );
    default:
      throw [Caml_builtin_exceptions.invalid_argument, "bool_of_string"];
  }
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while (true) {
    var i = _i;
    if (i >= l) {
      return s + ".";
    } else {
      var match = Caml_string.get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue;
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue;
      }
    }
  };
}

function string_of_float(f) {
  return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return (/* :: */[l1[0], $at(l1[1], l2)]
    );
  } else {
    return l2;
  }
}

var stdin = Caml_io.stdin;

var stdout = Caml_io.stdout;

var stderr = Caml_io.stderr;

function open_out_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_out(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_out(name) {
  return open_out_gen( /* :: */[
  /* Open_wronly */1,
  /* :: */[
  /* Open_creat */3,
  /* :: */[
  /* Open_trunc */4,
  /* :: */[
  /* Open_text */7,
  /* [] */0]]]], 438, name);
}

function open_out_bin(name) {
  return open_out_gen( /* :: */[
  /* Open_wronly */1,
  /* :: */[
  /* Open_creat */3,
  /* :: */[
  /* Open_trunc */4,
  /* :: */[
  /* Open_binary */6,
  /* [] */0]]]], 438, name);
}

function flush_all() {
  var _param = Caml_io.caml_ml_out_channels_list( /* () */0);
  while (true) {
    var param = _param;
    if (param) {
      try {
        Caml_io.caml_ml_flush(param[0]);
      } catch (exn) {}
      _param = param[1];
      continue;
    } else {
      return (/* () */0
      );
    }
  };
}

function output_bytes(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output_string(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [Caml_builtin_exceptions.invalid_argument, "output"];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [Caml_builtin_exceptions.invalid_argument, "output_substring"];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_value(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function close_out(oc) {
  Caml_io.caml_ml_flush(oc);
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function close_out_noerr(oc) {
  try {
    Caml_io.caml_ml_flush(oc);
  } catch (exn) {}
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  } catch (exn$1) {
    return (/* () */0
    );
  }
}

function open_in_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_in(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_in(name) {
  return open_in_gen( /* :: */[
  /* Open_rdonly */0,
  /* :: */[
  /* Open_text */7,
  /* [] */0]], 0, name);
}

function open_in_bin(name) {
  return open_in_gen( /* :: */[
  /* Open_rdonly */0,
  /* :: */[
  /* Open_binary */6,
  /* [] */0]], 0, name);
}

function input(_, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [Caml_builtin_exceptions.invalid_argument, "input"];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
  }
}

function unsafe_really_input(_, _$1, _ofs, _len) {
  while (true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return (/* () */0
      );
    } else {
      var r = Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
      if (r === 0) {
        throw Caml_builtin_exceptions.end_of_file;
      } else {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue;
      }
    }
  };
}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [Caml_builtin_exceptions.invalid_argument, "really_input"];
  } else {
    return unsafe_really_input(ic, s, ofs, len);
  }
}

function really_input_string(ic, len) {
  var s = Caml_string.caml_create_string(len);
  really_input(ic, s, 0, len);
  return Caml_string.bytes_to_string(s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while (true) {
      var param = _param;
      var pos = _pos;
      if (param) {
        var hd = param[0];
        var len = hd.length;
        Caml_string.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue;
      } else {
        return buf;
      }
    };
  };
  var scan = function (_accu, _len) {
    while (true) {
      var len = _len;
      var accu = _accu;
      var n = Caml_missing_polyfill.not_implemented("caml_ml_input_scan_line not implemented by bucklescript yet\n");
      if (n === 0) {
        if (accu) {
          return build_result(Caml_string.caml_create_string(len), len, accu);
        } else {
          throw Caml_builtin_exceptions.end_of_file;
        }
      } else if (n > 0) {
        var res = Caml_string.caml_create_string(n - 1 | 0);
        Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
        Caml_io.caml_ml_input_char(chan);
        if (accu) {
          var len$1 = (len + n | 0) - 1 | 0;
          return build_result(Caml_string.caml_create_string(len$1), len$1, /* :: */[res, accu]);
        } else {
          return res;
        }
      } else {
        var beg = Caml_string.caml_create_string(-n | 0);
        Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
        _len = len - n | 0;
        _accu = /* :: */[beg, accu];
        continue;
      }
    };
  };
  return Caml_string.bytes_to_string(scan( /* [] */0, 0));
}

function close_in_noerr() {
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  } catch (exn) {
    return (/* () */0
    );
  }
}

function print_char(c) {
  return Caml_io.caml_ml_output_char(stdout, c);
}

function print_string(s) {
  return output_string(stdout, s);
}

function print_bytes(s) {
  return output_bytes(stdout, s);
}

function print_int(i) {
  return output_string(stdout, String(i));
}

function print_float(f) {
  return output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function print_newline() {
  Caml_io.caml_ml_output_char(stdout, /* "\n" */10);
  return Caml_io.caml_ml_flush(stdout);
}

function prerr_char(c) {
  return Caml_io.caml_ml_output_char(stderr, c);
}

function prerr_string(s) {
  return output_string(stderr, s);
}

function prerr_bytes(s) {
  return output_bytes(stderr, s);
}

function prerr_int(i) {
  return output_string(stderr, String(i));
}

function prerr_float(f) {
  return output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function prerr_newline() {
  Caml_io.caml_ml_output_char(stderr, /* "\n" */10);
  return Caml_io.caml_ml_flush(stderr);
}

function read_line() {
  Caml_io.caml_ml_flush(stdout);
  return input_line(stdin);
}

function read_int() {
  return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_float() {
  return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function string_of_format(param) {
  return param[1];
}

function $caret$caret(param, param$1) {
  return (/* Format */[CamlinternalFormatBasics.concat_fmt(param[0], param$1[0]), param[1] + ("%," + param$1[1])]
  );
}

var exit_function = [flush_all];

function at_exit(f) {
  var g = exit_function[0];
  exit_function[0] = function () {
    Curry._1(f, /* () */0);
    return Curry._1(g, /* () */0);
  };
  return (/* () */0
  );
}

function do_at_exit() {
  return Curry._1(exit_function[0], /* () */0);
}

function exit(retcode) {
  do_at_exit( /* () */0);
  return Caml_sys.caml_sys_exit(retcode);
}

var max_int = 2147483647;

var epsilon_float = 2.220446049250313e-16;

var flush = Caml_io.caml_ml_flush;

var output_char = Caml_io.caml_ml_output_char;

var output_byte = Caml_io.caml_ml_output_char;

function output_binary_int(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_output_int not implemented by bucklescript yet\n");
}

function seek_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out not implemented by bucklescript yet\n");
}

function pos_out() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out not implemented by bucklescript yet\n");
}

function out_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function set_binary_mode_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

var input_char = Caml_io.caml_ml_input_char;

var input_byte = Caml_io.caml_ml_input_char;

function input_binary_int() {
  return Caml_missing_polyfill.not_implemented("caml_ml_input_int not implemented by bucklescript yet\n");
}

function input_value() {
  return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

function seek_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in not implemented by bucklescript yet\n");
}

function pos_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in not implemented by bucklescript yet\n");
}

function in_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function close_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function set_binary_mode_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

function LargeFile_000(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_001() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_002() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

function LargeFile_003(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_004() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_005() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

var LargeFile = [LargeFile_000, LargeFile_001, LargeFile_002, LargeFile_003, LargeFile_004, LargeFile_005];

exports.invalid_arg = invalid_arg;
exports.failwith = failwith;
exports.Exit = Exit;
exports.abs = abs;
exports.max_int = max_int;
exports.min_int = min_int;
exports.lnot = lnot;
exports.epsilon_float = epsilon_float;
exports.char_of_int = char_of_int;
exports.string_of_bool = string_of_bool;
exports.bool_of_string = bool_of_string;
exports.string_of_float = string_of_float;
exports.$at = $at;
exports.stdin = stdin;
exports.stdout = stdout;
exports.stderr = stderr;
exports.print_char = print_char;
exports.print_string = print_string;
exports.print_bytes = print_bytes;
exports.print_int = print_int;
exports.print_float = print_float;
exports.print_newline = print_newline;
exports.prerr_char = prerr_char;
exports.prerr_string = prerr_string;
exports.prerr_bytes = prerr_bytes;
exports.prerr_int = prerr_int;
exports.prerr_float = prerr_float;
exports.prerr_newline = prerr_newline;
exports.read_line = read_line;
exports.read_int = read_int;
exports.read_float = read_float;
exports.open_out = open_out;
exports.open_out_bin = open_out_bin;
exports.open_out_gen = open_out_gen;
exports.flush = flush;
exports.flush_all = flush_all;
exports.output_char = output_char;
exports.output_string = output_string;
exports.output_bytes = output_bytes;
exports.output = output;
exports.output_substring = output_substring;
exports.output_byte = output_byte;
exports.output_binary_int = output_binary_int;
exports.output_value = output_value;
exports.seek_out = seek_out;
exports.pos_out = pos_out;
exports.out_channel_length = out_channel_length;
exports.close_out = close_out;
exports.close_out_noerr = close_out_noerr;
exports.set_binary_mode_out = set_binary_mode_out;
exports.open_in = open_in;
exports.open_in_bin = open_in_bin;
exports.open_in_gen = open_in_gen;
exports.input_char = input_char;
exports.input_line = input_line;
exports.input = input;
exports.really_input = really_input;
exports.really_input_string = really_input_string;
exports.input_byte = input_byte;
exports.input_binary_int = input_binary_int;
exports.input_value = input_value;
exports.seek_in = seek_in;
exports.pos_in = pos_in;
exports.in_channel_length = in_channel_length;
exports.close_in = close_in;
exports.close_in_noerr = close_in_noerr;
exports.set_binary_mode_in = set_binary_mode_in;
exports.LargeFile = LargeFile;
exports.string_of_format = string_of_format;
exports.$caret$caret = $caret$caret;
exports.exit = exit;
exports.at_exit = at_exit;
exports.valid_float_lexem = valid_float_lexem;
exports.unsafe_really_input = unsafe_really_input;
exports.do_at_exit = do_at_exit;
/* No side effect */
},{"./curry.js":34,"./caml_io.js":35,"./caml_sys.js":36,"./caml_format.js":37,"./caml_string.js":38,"./caml_exceptions.js":39,"./caml_missing_polyfill.js":40,"./caml_builtin_exceptions.js":41,"./camlinternalFormatBasics.js":42}],14:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = exports.sort_uniq = exports.fast_sort = exports.stable_sort = exports.sort = exports.combine = exports.split = exports.remove_assq = exports.remove_assoc = exports.mem_assq = exports.mem_assoc = exports.assq = exports.assoc = exports.partition = exports.find_all = exports.filter = exports.find = exports.memq = exports.mem = exports.exists2 = exports.for_all2 = exports.exists = exports.for_all = exports.fold_right2 = exports.fold_left2 = exports.rev_map2 = exports.map2 = exports.iter2 = exports.fold_right = exports.fold_left = exports.rev_map = exports.mapi = exports.map = exports.iteri = exports.iter = exports.flatten = exports.concat = exports.rev_append = exports.append = exports.rev = exports.nth = exports.tl = exports.hd = exports.length = undefined;

var _curry = require("./curry.js");

var Curry = _interopRequireWildcard(_curry);

var _caml_obj = require("./caml_obj.js");

var Caml_obj = _interopRequireWildcard(_caml_obj);

var _pervasives = require("./pervasives.js");

var Pervasives = _interopRequireWildcard(_pervasives);

var _caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var Caml_builtin_exceptions = _interopRequireWildcard(_caml_builtin_exceptions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function length(l) {
  var _len = 0;
  var _param = l;
  while (true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue;
    } else {
      return len;
    }
  };
}

function hd(param) {
  if (param) {
    return param[0];
  } else {
    throw [Caml_builtin_exceptions.failure, "hd"];
  }
}

function tl(param) {
  if (param) {
    return param[1];
  } else {
    throw [Caml_builtin_exceptions.failure, "tl"];
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [Caml_builtin_exceptions.invalid_argument, "List.nth"];
  } else {
    var _l = l;
    var _n = n;
    while (true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1 === 0) {
          return l$1[0];
        } else {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue;
        }
      } else {
        throw [Caml_builtin_exceptions.failure, "nth"];
      }
    };
  }
}

function rev_append(_l1, _l2) {
  while (true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[l1[0], l2];
      _l1 = l1[1];
      continue;
    } else {
      return l2;
    }
  };
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return Pervasives.$at(param[0], flatten(param[1]));
  } else {
    return (/* [] */0
    );
  }
}

function map(f, param) {
  if (param) {
    var r = Curry._1(f, param[0]);
    return (/* :: */[r, map(f, param[1])]
    );
  } else {
    return (/* [] */0
    );
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = Curry._2(f, i, param[0]);
    return (/* :: */[r, mapi(i + 1 | 0, f, param[1])]
    );
  } else {
    return (/* [] */0
    );
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function rev_map(f, l) {
  var _accu = /* [] */0;
  var _param = l;
  while (true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = /* :: */[Curry._1(f, param[0]), accu];
      continue;
    } else {
      return accu;
    }
  };
}

function iter(f, _param) {
  while (true) {
    var param = _param;
    if (param) {
      Curry._1(f, param[0]);
      _param = param[1];
      continue;
    } else {
      return (/* () */0
      );
    }
  };
}

function iteri(f, l) {
  var _i = 0;
  var f$1 = f;
  var _param = l;
  while (true) {
    var param = _param;
    var i = _i;
    if (param) {
      Curry._2(f$1, i, param[0]);
      _param = param[1];
      _i = i + 1 | 0;
      continue;
    } else {
      return (/* () */0
      );
    }
  };
}

function fold_left(f, _accu, _l) {
  while (true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = Curry._2(f, accu, l[0]);
      continue;
    } else {
      return accu;
    }
  };
}

function fold_right(f, l, accu) {
  if (l) {
    return Curry._2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

function map2(f, l1, l2) {
  if (l1) {
    if (l2) {
      var r = Curry._2(f, l1[0], l2[0]);
      return (/* :: */[r, map2(f, l1[1], l2[1])]
      );
    } else {
      throw [Caml_builtin_exceptions.invalid_argument, "List.map2"];
    }
  } else if (l2) {
    throw [Caml_builtin_exceptions.invalid_argument, "List.map2"];
  } else {
    return (/* [] */0
    );
  }
}

function rev_map2(f, l1, l2) {
  var _accu = /* [] */0;
  var _l1 = l1;
  var _l2 = l2;
  while (true) {
    var l2$1 = _l2;
    var l1$1 = _l1;
    var accu = _accu;
    if (l1$1) {
      if (l2$1) {
        _l2 = l2$1[1];
        _l1 = l1$1[1];
        _accu = /* :: */[Curry._2(f, l1$1[0], l2$1[0]), accu];
        continue;
      } else {
        throw [Caml_builtin_exceptions.invalid_argument, "List.rev_map2"];
      }
    } else if (l2$1) {
      throw [Caml_builtin_exceptions.invalid_argument, "List.rev_map2"];
    } else {
      return accu;
    }
  };
}

function iter2(f, _l1, _l2) {
  while (true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        Curry._2(f, l1[0], l2[0]);
        _l2 = l2[1];
        _l1 = l1[1];
        continue;
      } else {
        throw [Caml_builtin_exceptions.invalid_argument, "List.iter2"];
      }
    } else if (l2) {
      throw [Caml_builtin_exceptions.invalid_argument, "List.iter2"];
    } else {
      return (/* () */0
      );
    }
  };
}

function fold_left2(f, _accu, _l1, _l2) {
  while (true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = Curry._3(f, accu, l1[0], l2[0]);
        continue;
      } else {
        throw [Caml_builtin_exceptions.invalid_argument, "List.fold_left2"];
      }
    } else if (l2) {
      throw [Caml_builtin_exceptions.invalid_argument, "List.fold_left2"];
    } else {
      return accu;
    }
  };
}

function fold_right2(f, l1, l2, accu) {
  if (l1) {
    if (l2) {
      return Curry._3(f, l1[0], l2[0], fold_right2(f, l1[1], l2[1], accu));
    } else {
      throw [Caml_builtin_exceptions.invalid_argument, "List.fold_right2"];
    }
  } else if (l2) {
    throw [Caml_builtin_exceptions.invalid_argument, "List.fold_right2"];
  } else {
    return accu;
  }
}

function for_all(p, _param) {
  while (true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        _param = param[1];
        continue;
      } else {
        return (/* false */0
        );
      }
    } else {
      return (/* true */1
      );
    }
  };
}

function exists(p, _param) {
  while (true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        return (/* true */1
        );
      } else {
        _param = param[1];
        continue;
      }
    } else {
      return (/* false */0
      );
    }
  };
}

function for_all2(p, _l1, _l2) {
  while (true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          _l2 = l2[1];
          _l1 = l1[1];
          continue;
        } else {
          return (/* false */0
          );
        }
      } else {
        throw [Caml_builtin_exceptions.invalid_argument, "List.for_all2"];
      }
    } else if (l2) {
      throw [Caml_builtin_exceptions.invalid_argument, "List.for_all2"];
    } else {
      return (/* true */1
      );
    }
  };
}

function exists2(p, _l1, _l2) {
  while (true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          return (/* true */1
          );
        } else {
          _l2 = l2[1];
          _l1 = l1[1];
          continue;
        }
      } else {
        throw [Caml_builtin_exceptions.invalid_argument, "List.exists2"];
      }
    } else if (l2) {
      throw [Caml_builtin_exceptions.invalid_argument, "List.exists2"];
    } else {
      return (/* false */0
      );
    }
  };
}

function mem(x, _param) {
  while (true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_equal(param[0], x)) {
        return (/* true */1
        );
      } else {
        _param = param[1];
        continue;
      }
    } else {
      return (/* false */0
      );
    }
  };
}

function memq(x, _param) {
  while (true) {
    var param = _param;
    if (param) {
      if (param[0] === x) {
        return (/* true */1
        );
      } else {
        _param = param[1];
        continue;
      }
    } else {
      return (/* false */0
      );
    }
  };
}

function assoc(x, _param) {
  while (true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (Caml_obj.caml_equal(match[0], x)) {
        return match[1];
      } else {
        _param = param[1];
        continue;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function assq(x, _param) {
  while (true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (match[0] === x) {
        return match[1];
      } else {
        _param = param[1];
        continue;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function mem_assoc(x, _param) {
  while (true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_equal(param[0][0], x)) {
        return (/* true */1
        );
      } else {
        _param = param[1];
        continue;
      }
    } else {
      return (/* false */0
      );
    }
  };
}

function mem_assq(x, _param) {
  while (true) {
    var param = _param;
    if (param) {
      if (param[0][0] === x) {
        return (/* true */1
        );
      } else {
        _param = param[1];
        continue;
      }
    } else {
      return (/* false */0
      );
    }
  };
}

function remove_assoc(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (Caml_obj.caml_equal(pair[0], x)) {
      return l;
    } else {
      return (/* :: */[pair, remove_assoc(x, l)]
      );
    }
  } else {
    return (/* [] */0
    );
  }
}

function remove_assq(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (pair[0] === x) {
      return l;
    } else {
      return (/* :: */[pair, remove_assq(x, l)]
      );
    }
  } else {
    return (/* [] */0
    );
  }
}

function find(p, _param) {
  while (true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (Curry._1(p, x)) {
        return x;
      } else {
        _param = param[1];
        continue;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function find_all(p) {
  return function (param) {
    var _accu = /* [] */0;
    var _param = param;
    while (true) {
      var param$1 = _param;
      var accu = _accu;
      if (param$1) {
        var l = param$1[1];
        var x = param$1[0];
        if (Curry._1(p, x)) {
          _param = l;
          _accu = /* :: */[x, accu];
          continue;
        } else {
          _param = l;
          continue;
        }
      } else {
        return rev_append(accu, /* [] */0);
      }
    };
  };
}

function partition(p, l) {
  var _yes = /* [] */0;
  var _no = /* [] */0;
  var _param = l;
  while (true) {
    var param = _param;
    var no = _no;
    var yes = _yes;
    if (param) {
      var l$1 = param[1];
      var x = param[0];
      if (Curry._1(p, x)) {
        _param = l$1;
        _yes = /* :: */[x, yes];
        continue;
      } else {
        _param = l$1;
        _no = /* :: */[x, no];
        continue;
      }
    } else {
      return (/* tuple */[rev_append(yes, /* [] */0), rev_append(no, /* [] */0)]
      );
    }
  };
}

function split(param) {
  if (param) {
    var match = param[0];
    var match$1 = split(param[1]);
    return (/* tuple */[
      /* :: */[match[0], match$1[0]],
      /* :: */[match[1], match$1[1]]]
    );
  } else {
    return (/* tuple */[
      /* [] */0,
      /* [] */0]
    );
  }
}

function combine(l1, l2) {
  if (l1) {
    if (l2) {
      return (/* :: */[
        /* tuple */[l1[0], l2[0]], combine(l1[1], l2[1])]
      );
    } else {
      throw [Caml_builtin_exceptions.invalid_argument, "List.combine"];
    }
  } else if (l2) {
    throw [Caml_builtin_exceptions.invalid_argument, "List.combine"];
  } else {
    return (/* [] */0
    );
  }
}

function merge(cmp, l1, l2) {
  if (l1) {
    if (l2) {
      var h2 = l2[0];
      var h1 = l1[0];
      if (Curry._2(cmp, h1, h2) <= 0) {
        return (/* :: */[h1, merge(cmp, l1[1], l2)]
        );
      } else {
        return (/* :: */[h2, merge(cmp, l1, l2[1])]
        );
      }
    } else {
      return l1;
    }
  } else {
    return l2;
  }
}

function chop(_k, _l) {
  while (true) {
    var l = _l;
    var k = _k;
    if (k === 0) {
      return l;
    } else if (l) {
      _l = l[1];
      _k = k - 1 | 0;
      continue;
    } else {
      throw [Caml_builtin_exceptions.assert_failure, ["list.ml", 223, 11]];
    }
  };
}

function stable_sort(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) <= 0) {
              if (Curry._2(cmp, x2, x3) <= 0) {
                return (/* :: */[x1,
                  /* :: */[x2,
                  /* :: */[x3,
                  /* [] */0]]]
                );
              } else if (Curry._2(cmp, x1, x3) <= 0) {
                return (/* :: */[x1,
                  /* :: */[x3,
                  /* :: */[x2,
                  /* [] */0]]]
                );
              } else {
                return (/* :: */[x3,
                  /* :: */[x1,
                  /* :: */[x2,
                  /* [] */0]]]
                );
              }
            } else if (Curry._2(cmp, x1, x3) <= 0) {
              return (/* :: */[x2,
                /* :: */[x1,
                /* :: */[x3,
                /* [] */0]]]
              );
            } else if (Curry._2(cmp, x2, x3) <= 0) {
              return (/* :: */[x2,
                /* :: */[x3,
                /* :: */[x1,
                /* [] */0]]]
              );
            } else {
              return (/* :: */[x3,
                /* :: */[x2,
                /* :: */[x1,
                /* [] */0]]]
              );
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) <= 0) {
          return (/* :: */[x1$1,
            /* :: */[x2$1,
            /* [] */0]]
          );
        } else {
          return (/* :: */[x2$1,
            /* :: */[x1$1,
            /* [] */0]]
          );
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = n >> 1;
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while (true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) > 0) {
              _accu = /* :: */[h1, accu];
              _l1 = l1[1];
              continue;
            } else {
              _accu = /* :: */[h2, accu];
              _l2 = l2$1[1];
              continue;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) > 0) {
              if (Curry._2(cmp, x2, x3) > 0) {
                return (/* :: */[x1,
                  /* :: */[x2,
                  /* :: */[x3,
                  /* [] */0]]]
                );
              } else if (Curry._2(cmp, x1, x3) > 0) {
                return (/* :: */[x1,
                  /* :: */[x3,
                  /* :: */[x2,
                  /* [] */0]]]
                );
              } else {
                return (/* :: */[x3,
                  /* :: */[x1,
                  /* :: */[x2,
                  /* [] */0]]]
                );
              }
            } else if (Curry._2(cmp, x1, x3) > 0) {
              return (/* :: */[x2,
                /* :: */[x1,
                /* :: */[x3,
                /* [] */0]]]
              );
            } else if (Curry._2(cmp, x2, x3) > 0) {
              return (/* :: */[x2,
                /* :: */[x3,
                /* :: */[x1,
                /* [] */0]]]
              );
            } else {
              return (/* :: */[x3,
                /* :: */[x2,
                /* :: */[x1,
                /* [] */0]]]
              );
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) > 0) {
          return (/* :: */[x1$1,
            /* :: */[x2$1,
            /* [] */0]]
          );
        } else {
          return (/* :: */[x2$1,
            /* :: */[x1$1,
            /* [] */0]]
          );
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = n >> 1;
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while (true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) <= 0) {
              _accu = /* :: */[h1, accu];
              _l1 = l1[1];
              continue;
            } else {
              _accu = /* :: */[h2, accu];
              _l2 = l2$1[1];
              continue;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

function sort_uniq(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c === 0) {
              var c$1 = Curry._2(cmp, x2, x3);
              if (c$1 === 0) {
                return (/* :: */[x2,
                  /* [] */0]
                );
              } else if (c$1 < 0) {
                return (/* :: */[x2,
                  /* :: */[x3,
                  /* [] */0]]
                );
              } else {
                return (/* :: */[x3,
                  /* :: */[x2,
                  /* [] */0]]
                );
              }
            } else if (c < 0) {
              var c$2 = Curry._2(cmp, x2, x3);
              if (c$2 === 0) {
                return (/* :: */[x1,
                  /* :: */[x2,
                  /* [] */0]]
                );
              } else if (c$2 < 0) {
                return (/* :: */[x1,
                  /* :: */[x2,
                  /* :: */[x3,
                  /* [] */0]]]
                );
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3 === 0) {
                  return (/* :: */[x1,
                    /* :: */[x2,
                    /* [] */0]]
                  );
                } else if (c$3 < 0) {
                  return (/* :: */[x1,
                    /* :: */[x3,
                    /* :: */[x2,
                    /* [] */0]]]
                  );
                } else {
                  return (/* :: */[x3,
                    /* :: */[x1,
                    /* :: */[x2,
                    /* [] */0]]]
                  );
                }
              }
            } else {
              var c$4 = Curry._2(cmp, x1, x3);
              if (c$4 === 0) {
                return (/* :: */[x2,
                  /* :: */[x1,
                  /* [] */0]]
                );
              } else if (c$4 < 0) {
                return (/* :: */[x2,
                  /* :: */[x1,
                  /* :: */[x3,
                  /* [] */0]]]
                );
              } else {
                var c$5 = Curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return (/* :: */[x2,
                    /* :: */[x1,
                    /* [] */0]]
                  );
                } else if (c$5 < 0) {
                  return (/* :: */[x2,
                    /* :: */[x3,
                    /* :: */[x1,
                    /* [] */0]]]
                  );
                } else {
                  return (/* :: */[x3,
                    /* :: */[x2,
                    /* :: */[x1,
                    /* [] */0]]]
                  );
                }
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6 === 0) {
          return (/* :: */[x1$1,
            /* [] */0]
          );
        } else if (c$6 < 0) {
          return (/* :: */[x1$1,
            /* :: */[x2$1,
            /* [] */0]]
          );
        } else {
          return (/* :: */[x2$1,
            /* :: */[x1$1,
            /* [] */0]]
          );
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = n >> 1;
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while (true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7 === 0) {
              _accu = /* :: */[h1, accu];
              _l2 = t2;
              _l1 = t1;
              continue;
            } else if (c$7 > 0) {
              _accu = /* :: */[h1, accu];
              _l1 = t1;
              continue;
            } else {
              _accu = /* :: */[h2, accu];
              _l2 = t2;
              continue;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3 || !l) {
        exit = 1;
      } else {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c === 0) {
              var c$1 = Curry._2(cmp, x2, x3);
              if (c$1 === 0) {
                return (/* :: */[x2,
                  /* [] */0]
                );
              } else if (c$1 > 0) {
                return (/* :: */[x2,
                  /* :: */[x3,
                  /* [] */0]]
                );
              } else {
                return (/* :: */[x3,
                  /* :: */[x2,
                  /* [] */0]]
                );
              }
            } else if (c > 0) {
              var c$2 = Curry._2(cmp, x2, x3);
              if (c$2 === 0) {
                return (/* :: */[x1,
                  /* :: */[x2,
                  /* [] */0]]
                );
              } else if (c$2 > 0) {
                return (/* :: */[x1,
                  /* :: */[x2,
                  /* :: */[x3,
                  /* [] */0]]]
                );
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3 === 0) {
                  return (/* :: */[x1,
                    /* :: */[x2,
                    /* [] */0]]
                  );
                } else if (c$3 > 0) {
                  return (/* :: */[x1,
                    /* :: */[x3,
                    /* :: */[x2,
                    /* [] */0]]]
                  );
                } else {
                  return (/* :: */[x3,
                    /* :: */[x1,
                    /* :: */[x2,
                    /* [] */0]]]
                  );
                }
              }
            } else {
              var c$4 = Curry._2(cmp, x1, x3);
              if (c$4 === 0) {
                return (/* :: */[x2,
                  /* :: */[x1,
                  /* [] */0]]
                );
              } else if (c$4 > 0) {
                return (/* :: */[x2,
                  /* :: */[x1,
                  /* :: */[x3,
                  /* [] */0]]]
                );
              } else {
                var c$5 = Curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return (/* :: */[x2,
                    /* :: */[x1,
                    /* [] */0]]
                  );
                } else if (c$5 > 0) {
                  return (/* :: */[x2,
                    /* :: */[x3,
                    /* :: */[x1,
                    /* [] */0]]]
                  );
                } else {
                  return (/* :: */[x3,
                    /* :: */[x2,
                    /* :: */[x1,
                    /* [] */0]]]
                  );
                }
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6 === 0) {
          return (/* :: */[x1$1,
            /* [] */0]
          );
        } else if (c$6 > 0) {
          return (/* :: */[x1$1,
            /* :: */[x2$1,
            /* [] */0]]
          );
        } else {
          return (/* :: */[x2$1,
            /* :: */[x1$1,
            /* [] */0]]
          );
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = n >> 1;
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while (true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7 === 0) {
              _accu = /* :: */[h1, accu];
              _l2 = t2;
              _l1 = t1;
              continue;
            } else if (c$7 < 0) {
              _accu = /* :: */[h1, accu];
              _l1 = t1;
              continue;
            } else {
              _accu = /* :: */[h2, accu];
              _l2 = t2;
              continue;
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var append = Pervasives.$at;

var concat = flatten;

var filter = find_all;

var sort = stable_sort;

var fast_sort = stable_sort;

exports.length = length;
exports.hd = hd;
exports.tl = tl;
exports.nth = nth;
exports.rev = rev;
exports.append = append;
exports.rev_append = rev_append;
exports.concat = concat;
exports.flatten = flatten;
exports.iter = iter;
exports.iteri = iteri;
exports.map = map;
exports.mapi = mapi$1;
exports.rev_map = rev_map;
exports.fold_left = fold_left;
exports.fold_right = fold_right;
exports.iter2 = iter2;
exports.map2 = map2;
exports.rev_map2 = rev_map2;
exports.fold_left2 = fold_left2;
exports.fold_right2 = fold_right2;
exports.for_all = for_all;
exports.exists = exists;
exports.for_all2 = for_all2;
exports.exists2 = exists2;
exports.mem = mem;
exports.memq = memq;
exports.find = find;
exports.filter = filter;
exports.find_all = find_all;
exports.partition = partition;
exports.assoc = assoc;
exports.assq = assq;
exports.mem_assoc = mem_assoc;
exports.mem_assq = mem_assq;
exports.remove_assoc = remove_assoc;
exports.remove_assq = remove_assq;
exports.split = split;
exports.combine = combine;
exports.sort = sort;
exports.stable_sort = stable_sort;
exports.fast_sort = fast_sort;
exports.sort_uniq = sort_uniq;
exports.merge = merge;
/* No side effect */
},{"./curry.js":34,"./caml_obj.js":43,"./pervasives.js":13,"./caml_builtin_exceptions.js":41}],25:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


function make(x, y) {
  return (/* float array */[x, y]
  );
}

function add(a, b) {
  return (/* float array */[a[/* x */0] + b[/* x */0], a[/* y */1] + b[/* y */1]]
  );
}

function multiply(a, value) {
  return (/* float array */[a[/* x */0] * value, a[/* y */1] * value]
  );
}

function getAngle(param) {
  return Math.atan2(param[/* y */1], param[/* x */0]);
}

function getLength(param) {
  var y = param[/* y */1];
  var x = param[/* x */0];
  return Math.sqrt(x * x + y * y);
}

function length(vec, length$1) {
  var angle = getAngle(vec);
  return (/* float array */[Math.cos(angle) * length$1, Math.sin(angle) * length$1]
  );
}

function angle(vec, angle$1) {
  var length = getLength(vec);
  return (/* float array */[Math.cos(angle$1) * length, Math.sin(angle$1) * length]
  );
}

exports.make = make;
exports.add = add;
exports.multiply = multiply;
exports.getAngle = getAngle;
exports.getLength = getLength;
exports.length = length;
exports.angle = angle;
/* No side effect */
},{}],26:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var doublePI = Math.PI * 2;

function degreesToRadians(angle) {
  return angle * (Math.PI / 180);
}

function random(min, max) {
  return Math.random() * max + min;
}

exports.doublePI = doublePI;
exports.degreesToRadians = degreesToRadians;
exports.random = random;
/* doublePI Not a pure module */
},{}],27:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomVelocity = exports.outOfScreen = exports.normalizePosition = undefined;

var _Vec = require("./Vec.js");

var Vec = _interopRequireWildcard(_Vec);

var _Math = require("./Math.js");

var $$Math = _interopRequireWildcard(_Math);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function normalizePosition(screenSize, position) {
  var height = screenSize[1];
  var width = screenSize[0];
  var x = position[/* x */0];
  var y = position[/* y */1];
  return (/* float array */[x > width ? 0 : x < 0 ? width : x, y > height ? 0 : y < 0 ? height : y]
  );
}

function outOfScreen(screenSize, param) {
  var y = param[/* y */1];
  var x = param[/* x */0];
  if (x > screenSize[0] || x < 0 || y > screenSize[1]) {
    return (/* true */1
    );
  } else {
    return +(y < 0);
  }
}

function randomVelocity(speed) {
  return Vec.angle(Vec.make(speed, speed), $$Math.degreesToRadians(Math.random() * 360));
}

exports.normalizePosition = normalizePosition;
exports.outOfScreen = outOfScreen;
exports.randomVelocity = randomVelocity;
/* Math Not a pure module */
},{"./Vec.js":25,"./Math.js":26}],11:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arc = exports.clearFrame = exports.score = exports.lives = exports.gameOver = exports.fps = exports.triangle = undefined;

var _Math = require("./Math.js");

var $$Math = _interopRequireWildcard(_Math);

var _caml_int = require("../../../node_modules/bs-platform/lib/es6/caml_int32.js");

var Caml_int32 = _interopRequireWildcard(_caml_int);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function triangle(ctx, height, width, x, y, angle) {
  var y1 = y - height / 2;
  var x2 = x + width / 2;
  var y2 = y + height / 2;
  var x3 = x - width / 2;
  var x1r = (x - x) * Math.cos(angle) - (y1 - y) * Math.sin(angle) + x;
  var y1r = (x - x) * Math.sin(angle) + (y1 - y) * Math.cos(angle) + y;
  var x2r = (x2 - x) * Math.cos(angle) - (y2 - y) * Math.sin(angle) + x;
  var y2r = (x2 - x) * Math.sin(angle) + (y2 - y) * Math.cos(angle) + y;
  var x3r = (x3 - x) * Math.cos(angle) - (y2 - y) * Math.sin(angle) + x;
  var y3r = (x3 - x) * Math.sin(angle) + (y2 - y) * Math.cos(angle) + y;
  ctx.beginPath();
  ctx.moveTo(x1r, y1r);
  ctx.lineTo(x2r, y2r);
  ctx.lineTo(x3r, y3r);
  ctx.closePath();
  ctx.strokeStyle = "#fff";
  ctx.stroke();
  return (/* () */0
  );
}

function fps(canvas, fps$1) {
  canvas.font = "20px Arial";
  canvas.fillStyle = "#fff";
  canvas.fillText(String(fps$1), 10, 50);
  return (/* () */0
  );
}

function gameOver(canvas, param) {
  canvas.font = "40px Arial";
  canvas.fillStyle = "#fff";
  canvas.fillText("GAME OVER", param[0] / 2, param[1] / 2);
  return (/* () */0
  );
}

function lives(canvas, lives$1) {
  for (var i = 1; i <= lives$1; ++i) {
    triangle(canvas, 30, 30, Caml_int32.imul(i, 40), 40, $$Math.degreesToRadians(0));
  }
  return (/* () */0
  );
}

function score(canvas, score$1, param) {
  canvas.font = "22px Arial";
  canvas.fillStyle = "#fff";
  canvas.fillText("Score " + String(score$1), param[0] - 150, 40);
  return (/* () */0
  );
}

function clearFrame(ctx, screenSize) {
  ctx.clearRect(0, 0, screenSize[0], screenSize[1]);
  return (/* () */0
  );
}

function arc(ctx, x, y, radius, drawType) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, $$Math.doublePI);
  if (drawType !== 0) {
    ctx.fillStyle = "#fff";
    ctx.fill();
    return (/* () */0
    );
  } else {
    ctx.strokeStyle = "#fff";
    ctx.stroke();
    return (/* () */0
    );
  }
}

exports.triangle = triangle;
exports.fps = fps;
exports.gameOver = gameOver;
exports.lives = lives;
exports.score = score;
exports.clearFrame = clearFrame;
exports.arc = arc;
/* Math Not a pure module */
},{"./Math.js":26,"../../../node_modules/bs-platform/lib/es6/caml_int32.js":24}],28:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = exports.update = exports.make = exports.shipAngleModifier = exports.bulletVelocity = undefined;

var _Vec = require("./Vec.js");

var Vec = _interopRequireWildcard(_Vec);

var _Math = require("./Math.js");

var $$Math = _interopRequireWildcard(_Math);

var _Draw_canvas = require("./Draw_canvas.js");

var Draw_canvas = _interopRequireWildcard(_Draw_canvas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var shipAngleModifier = $$Math.degreesToRadians(90);

function make(position, angle) {
  return (/* record */[
    /* velocity */Vec.angle(Vec.make(10, 10), angle - shipAngleModifier),
    /* position */position,
    /* radius */2]
  );
}

function update(state) {
  return (/* record */[
    /* velocity */state[/* velocity */0],
    /* position */Vec.add(state[/* position */1], state[/* velocity */0]),
    /* radius */state[/* radius */2]]
  );
}

function draw(ctx, param) {
  var position = param[/* position */1];
  return Draw_canvas.arc(ctx, position[/* x */0], position[/* y */1], param[/* radius */2], /* Fill */1);
}

var bulletVelocity = 10;

exports.bulletVelocity = bulletVelocity;
exports.shipAngleModifier = shipAngleModifier;
exports.make = make;
exports.update = update;
exports.draw = draw;
/* shipAngleModifier Not a pure module */
},{"./Vec.js":25,"./Math.js":26,"./Draw_canvas.js":11}],8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var activeInput = /* record */[
/* left : false */0,
/* right : false */0,
/* up : false */0,
/* shoot : false */0];

function keydown(evt) {
  var match = evt.keyCode;
  if (match >= 66) {
    if (match !== 68) {
      if (match !== 87) {} else {
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
      case 0:
        activeInput[/* shoot */3] = /* true */1;
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        break;
      case 5:
        activeInput[/* left */0] = /* true */1;
        break;
      case 6:
        activeInput[/* up */2] = /* true */1;
        break;
      case 7:
        activeInput[/* right */1] = /* true */1;
        break;

    }
  }
  return (/* true */1
  );
}

function keyup(evt) {
  var match = evt.keyCode;
  if (match >= 66) {
    if (match !== 68) {
      if (match !== 87) {} else {
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
      case 0:
        activeInput[/* shoot */3] = /* false */0;
        break;
      case 1:
      case 2:
      case 3:
      case 4:
        break;
      case 5:
        activeInput[/* left */0] = /* false */0;
        break;
      case 6:
        activeInput[/* up */2] = /* false */0;
        break;
      case 7:
        activeInput[/* right */1] = /* false */0;
        break;

    }
  }
  return (/* true */1
  );
}

exports.activeInput = activeInput;
exports.keydown = keydown;
exports.keyup = keyup;
/* No side effect */
},{}],6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = exports.resetPosition = exports.destroy = exports.update = exports.updateInvincableFrames = exports.handleDeadState = exports.updateBullets = exports.removeOldBullets = exports.calcWeaponState = exports.isArmed = exports.calcPosition = exports.calcVelocity = exports.normalizeVelocity = exports.calcThrust = exports.calcAngle = exports.make = exports.invincableFrames = exports.shipAngleModifier = exports.maxVelocity = exports.turnVelocity = exports.friction = undefined;

var _Vec = require("./Vec.js");

var Vec = _interopRequireWildcard(_Vec);

var _list = require("../../../node_modules/bs-platform/lib/es6/list.js");

var List = _interopRequireWildcard(_list);

var _Math = require("./Math.js");

var $$Math = _interopRequireWildcard(_Math);

var _Utils = require("./Utils.js");

var Utils = _interopRequireWildcard(_Utils);

var _Bullet = require("./Bullet.js");

var Bullet = _interopRequireWildcard(_Bullet);

var _Controls = require("./Controls.js");

var Controls = _interopRequireWildcard(_Controls);

var _Draw_canvas = require("./Draw_canvas.js");

var Draw_canvas = _interopRequireWildcard(_Draw_canvas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var shipAngleModifier = $$Math.degreesToRadians(90);

function make(param, $staropt$star, _) {
  var lives = $staropt$star ? $staropt$star[0] : 3;
  return (/* record */[
    /* position */Vec.make(param[0] / 2, param[1] / 2),
    /* velocity */Vec.make(0, 0),
    /* thrust */Vec.make(0, 0),
    /* angle */$$Math.degreesToRadians(0),
    /* size : tuple */[30, 30],
    /* bulletDelay */0,
    /* bullets : [] */0,
    /* collisionRadius */15,
    /* activeState : Living */0,
    /* framesDead */0,
    /* lives */lives,
    /* invincableFrames */100]
  );
}

function calcAngle(ship, param) {
  var left = param[/* left */0];
  var right = param[/* right */1];
  var newrecord = ship.slice();
  newrecord[/* angle */3] = left !== 0 ? right !== 0 ? ship[/* angle */3] : ship[/* angle */3] - 0.1 : right !== 0 ? ship[/* angle */3] + 0.1 : ship[/* angle */3];
  return newrecord;
}

function calcThrust(ship, param) {
  var up = param[/* up */2];
  var newrecord = ship.slice();
  newrecord[/* thrust */2] = up !== 0 ? Vec.angle(Vec.length(ship[/* thrust */2], 0.1), ship[/* angle */3] - shipAngleModifier) : Vec.length(ship[/* thrust */2], 0);
  return newrecord;
}

function normalizeVelocity(velocity) {
  var vel = Vec.getLength(velocity);
  if (vel > 10) {
    return Vec.length(velocity, 10);
  } else if (vel < 0.01) {
    return Vec.length(velocity, 0);
  } else {
    return velocity;
  }
}

function calcVelocity(ship, param) {
  var up = param[/* up */2];
  var newrecord = ship.slice();
  newrecord[/* velocity */1] = normalizeVelocity(up !== 0 ? Vec.add(ship[/* velocity */1], ship[/* thrust */2]) : Vec.multiply(ship[/* velocity */1], 0.94));
  return newrecord;
}

function calcPosition(ship, screenSize) {
  var newrecord = ship.slice();
  newrecord[/* position */0] = Utils.normalizePosition(screenSize, Vec.add(ship[/* position */0], ship[/* velocity */1]));
  return newrecord;
}

function isArmed(ship) {
  return +(ship[/* bulletDelay */5] > 8);
}

function calcWeaponState(ship, input) {
  var match = input[/* shoot */3];
  var exit = 0;
  if (match !== 0 && ship[/* bulletDelay */5] > 8) {
    var newrecord = ship.slice();
    newrecord[/* bulletDelay */5] = 0;
    newrecord[/* bullets */6] = /* :: */[Bullet.make(ship[/* position */0], ship[/* angle */3]), ship[/* bullets */6]];
    return newrecord;
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (ship[/* bulletDelay */5] <= 8) {
      var newrecord$1 = ship.slice();
      newrecord$1[/* bulletDelay */5] = ship[/* bulletDelay */5] + 1 | 0;
      return newrecord$1;
    } else {
      return ship;
    }
  }
}

function removeOldBullets(ship, screenSize) {
  var newrecord = ship.slice();
  newrecord[/* bullets */6] = List.filter(function (bullet) {
    return 1 - Utils.outOfScreen(screenSize, bullet[/* position */1]);
  })(ship[/* bullets */6]);
  return newrecord;
}

function updateBullets(ship) {
  var newrecord = ship.slice();
  newrecord[/* bullets */6] = List.map(Bullet.update, ship[/* bullets */6]);
  return newrecord;
}

function handleDeadState(ship, screenSize) {
  var match = ship[/* activeState */8];
  var match$1 = ship[/* framesDead */9];
  var exit = 0;
  switch (match) {
    case 0:
      return ship;
    case 1:
      if (match$1 > 100) {
        return make(screenSize, /* Some */[ship[/* lives */10] - 1 | 0], /* () */0);
      } else {
        exit = 1;
      }
      break;
    case 2:
      exit = 1;
      break;

  }
  if (exit === 1) {
    var newrecord = ship.slice();
    newrecord[/* framesDead */9] = match$1 + 1 | 0;
    return newrecord;
  }
}

function updateInvincableFrames(ship) {
  var newrecord = ship.slice();
  var match = +(ship[/* invincableFrames */11] > 0);
  newrecord[/* invincableFrames */11] = match !== 0 ? ship[/* invincableFrames */11] - 1 | 0 : ship[/* invincableFrames */11];
  return newrecord;
}

function update(ship, screenSize) {
  return updateInvincableFrames(handleDeadState(calcWeaponState(removeOldBullets(updateBullets(calcPosition(calcVelocity(calcThrust(calcAngle(ship, Controls.activeInput), Controls.activeInput), Controls.activeInput), screenSize)), screenSize), Controls.activeInput), screenSize));
}

function destroy(ship) {
  var newrecord = ship.slice();
  var match = +(ship[/* lives */10] > 0);
  newrecord[/* activeState */8] = match !== 0 ? /* Dead */1 : /* GameOver */2;
  return newrecord;
}

function resetPosition(ship, param) {
  var newrecord = ship.slice();
  newrecord[/* position */0] = Vec.make(param[0] / 2, param[1] / 2);
  return newrecord;
}

function draw(ctx, param) {
  var size = param[/* size */4];
  var position = param[/* position */0];
  Draw_canvas.triangle(ctx, size[1], size[0], position[/* x */0], position[/* y */1], param[/* angle */3]);
  return List.iter(function (param) {
    return Bullet.draw(ctx, param);
  }, param[/* bullets */6]);
}

var friction = 0.94;

var turnVelocity = 0.1;

var maxVelocity = 10;

var invincableFrames = 100;

exports.friction = friction;
exports.turnVelocity = turnVelocity;
exports.maxVelocity = maxVelocity;
exports.shipAngleModifier = shipAngleModifier;
exports.invincableFrames = invincableFrames;
exports.make = make;
exports.calcAngle = calcAngle;
exports.calcThrust = calcThrust;
exports.normalizeVelocity = normalizeVelocity;
exports.calcVelocity = calcVelocity;
exports.calcPosition = calcPosition;
exports.isArmed = isArmed;
exports.calcWeaponState = calcWeaponState;
exports.removeOldBullets = removeOldBullets;
exports.updateBullets = updateBullets;
exports.handleDeadState = handleDeadState;
exports.updateInvincableFrames = updateInvincableFrames;
exports.update = update;
exports.destroy = destroy;
exports.resetPosition = resetPosition;
exports.draw = draw;
/* shipAngleModifier Not a pure module */
},{"./Vec.js":25,"../../../node_modules/bs-platform/lib/es6/list.js":14,"./Math.js":26,"./Utils.js":27,"./Bullet.js":28,"./Controls.js":8,"./Draw_canvas.js":11}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = exports.destroy = exports.update = exports.makeChild = exports.makeMany = exports.make = exports.randomPosition = exports.makeEdges = exports.makeEdge = exports.edgeThing = exports.sizeTypeProps = exports.edgeCount = exports.asteroidVelocity = undefined;

var _Vec = require("./Vec.js");

var Vec = _interopRequireWildcard(_Vec);

var _list = require("../../../node_modules/bs-platform/lib/es6/list.js");

var List = _interopRequireWildcard(_list);

var _Math = require("./Math.js");

var $$Math = _interopRequireWildcard(_Math);

var _Utils = require("./Utils.js");

var Utils = _interopRequireWildcard(_Utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function sizeTypeProps(sizeType) {
  switch (sizeType) {
    case 0:
      return (/* tuple */[80, -20, 75]
      );
    case 1:
      return (/* tuple */[50, -10, 45]
      );
    case 2:
      return (/* tuple */[30, -5, 25]
      );

  }
}

var edgeThing = 2 * Math.PI / 7;

function makeEdge(size, num, edgeModifier) {
  var match = +(num % 2 === 1);
  var modifier = match !== 0 ? Math.random() * edgeModifier : 0;
  return Vec.make(modifier + size * Math.cos(num * edgeThing), modifier + size * Math.sin(num * edgeThing));
}

function makeEdges(size, _numRemaining, edgeModifier, _edges) {
  while (true) {
    var edges = _edges;
    var numRemaining = _numRemaining;
    if (numRemaining > 0) {
      var edge = makeEdge(size, numRemaining, edgeModifier);
      _edges = /* :: */[edge, edges];
      _numRemaining = numRemaining - 1 | 0;
      continue;
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
  return (/* record */[
    /* position */randomPosition(screenSize),
    /* edges */makeEdges(pixelSize, 7, edgeModifier, /* [] */0),
    /* sizeType */sizeType,
    /* pixelSize */pixelSize,
    /* velocity */Utils.randomVelocity(1),
    /* edgeModifier */edgeModifier,
    /* collisionRadius */match[2]]
  );
}

function makeMany(sizeType, screenSize, _num, _asteroids) {
  while (true) {
    var asteroids = _asteroids;
    var num = _num;
    var match = +(num === 0);
    if (match !== 0) {
      return asteroids;
    } else {
      _asteroids = /* :: */[make(sizeType, screenSize), asteroids];
      _num = num - 1 | 0;
      continue;
    }
  };
}

function makeChild(sizeType, position) {
  var match = sizeTypeProps(sizeType);
  var edgeModifier = match[1];
  var pixelSize = match[0];
  return (/* record */[
    /* position */position,
    /* edges */makeEdges(pixelSize, 7, edgeModifier, /* [] */0),
    /* sizeType */sizeType,
    /* pixelSize */pixelSize,
    /* velocity */Vec.angle(Vec.make(1, 1), $$Math.degreesToRadians(Math.random() * 360)),
    /* edgeModifier */edgeModifier,
    /* collisionRadius */match[2]]
  );
}

function update(screenSize, asteroid) {
  var newrecord = asteroid.slice();
  newrecord[/* position */0] = Utils.normalizePosition(screenSize, Vec.add(asteroid[/* position */0], asteroid[/* velocity */4]));
  return newrecord;
}

function destroy(asteroid) {
  var match = asteroid[/* sizeType */2];
  switch (match) {
    case 0:
      return (/* :: */[makeChild( /* Medium */1, asteroid[/* position */0]),
        /* :: */[makeChild( /* Medium */1, asteroid[/* position */0]),
        /* [] */0]]
      );
    case 1:
      return (/* :: */[makeChild( /* Small */2, asteroid[/* position */0]),
        /* :: */[makeChild( /* Small */2, asteroid[/* position */0]),
        /* [] */0]]
      );
    case 2:
      return (/* [] */0
      );

  }
}

function draw(ctx, param) {
  var position = param[/* position */0];
  var y = position[/* y */1];
  var x = position[/* x */0];
  var pixelSize = param[/* pixelSize */3];
  ctx.beginPath();
  ctx.moveTo(x + pixelSize * Math.cos(0), y + pixelSize * Math.sin(0));
  List.iter(function (edge) {
    ctx.lineTo(x + edge[/* x */0], y + edge[/* y */1]);
    return (/* () */0
    );
  }, param[/* edges */1]);
  ctx.closePath();
  ctx.stroke();
  return (/* () */0
  );
}

var asteroidVelocity = 1;

var edgeCount = 7;

exports.asteroidVelocity = asteroidVelocity;
exports.edgeCount = edgeCount;
exports.sizeTypeProps = sizeTypeProps;
exports.edgeThing = edgeThing;
exports.makeEdge = makeEdge;
exports.makeEdges = makeEdges;
exports.randomPosition = randomPosition;
exports.make = make;
exports.makeMany = makeMany;
exports.makeChild = makeChild;
exports.update = update;
exports.destroy = destroy;
exports.draw = draw;
/* edgeThing Not a pure module */
},{"./Vec.js":25,"../../../node_modules/bs-platform/lib/es6/list.js":14,"./Math.js":26,"./Utils.js":27}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = exports.updateParticles = exports.update = exports.makeAsteroidExplosion = exports.makeParticles = exports.asteroidExplosionParticles = undefined;

var _Vec = require("./Vec.js");

var Vec = _interopRequireWildcard(_Vec);

var _list = require("../../../node_modules/bs-platform/lib/es6/list.js");

var List = _interopRequireWildcard(_list);

var _Math = require("./Math.js");

var $$Math = _interopRequireWildcard(_Math);

var _Utils = require("./Utils.js");

var Utils = _interopRequireWildcard(_Utils);

var _Draw_canvas = require("./Draw_canvas.js");

var Draw_canvas = _interopRequireWildcard(_Draw_canvas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function makeParticles(position, _particlesLeft, _particles) {
  while (true) {
    var particles = _particles;
    var particlesLeft = _particlesLeft;
    if (particlesLeft === 0) {
      return particles;
    } else {
      _particles = /* :: */[
      /* record */[
      /* position */position,
      /* radius */$$Math.random(5, 8),
      /* velocity */Utils.randomVelocity($$Math.random(0.5, 2))], particles];
      _particlesLeft = particlesLeft - 1 | 0;
      continue;
    }
  };
}

function makeAsteroidExplosion(position) {
  return makeParticles(position, 15, /* [] */0);
}

function update(param) {
  var velocity = param[/* velocity */2];
  return (/* record */[
    /* position */Vec.add(param[/* position */0], velocity),
    /* radius */param[/* radius */1] - 0.2,
    /* velocity */velocity]
  );
}

function updateParticles(particles) {
  return List.filter(function (param) {
    return +(param[/* radius */1] > 0);
  })(List.map(update, particles));
}

function draw(ctx, param) {
  var position = param[/* position */0];
  return Draw_canvas.arc(ctx, position[/* x */0], position[/* y */1], param[/* radius */1], /* Stroke */0);
}

var asteroidExplosionParticles = 15;

exports.asteroidExplosionParticles = asteroidExplosionParticles;
exports.makeParticles = makeParticles;
exports.makeAsteroidExplosion = makeAsteroidExplosion;
exports.update = update;
exports.updateParticles = updateParticles;
exports.draw = draw;
/* Math Not a pure module */
},{"./Vec.js":25,"../../../node_modules/bs-platform/lib/es6/list.js":14,"./Math.js":26,"./Utils.js":27,"./Draw_canvas.js":11}],10:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCollisions = exports.checkShipAsteroidCollisions = exports.checkBulletAsteroidCollisions = exports.checkAsteroidCollision = exports.detect = undefined;

var _Vec = require("./Vec.js");

var Vec = _interopRequireWildcard(_Vec);

var _list = require("../../../node_modules/bs-platform/lib/es6/list.js");

var List = _interopRequireWildcard(_list);

var _Ship = require("./Ship.js");

var Ship = _interopRequireWildcard(_Ship);

var _Asteroid = require("./Asteroid.js");

var Asteroid = _interopRequireWildcard(_Asteroid);

var _Particle = require("./Particle.js");

var Particle = _interopRequireWildcard(_Particle);

var _pervasives = require("../../../node_modules/bs-platform/lib/es6/pervasives.js");

var Pervasives = _interopRequireWildcard(_pervasives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function detect(a, b) {
  var posB = b[0];
  var posA = a[0];
  var diffVec = Vec.make(posA[/* x */0] - posB[/* x */0], posA[/* y */1] - posB[/* y */1]);
  return +(Vec.getLength(diffVec) < a[1] + b[1]);
}

function checkAsteroidCollision(asteroid, bullets) {
  var match = List.partition(function (bullet) {
    return detect( /* tuple */[asteroid[/* position */0], asteroid[/* collisionRadius */6]], /* tuple */[bullet[/* position */1], bullet[/* radius */2]]);
  }, bullets);
  var match$1 = List.length(match[0]);
  if (match$1 !== 0) {
    var match$2 = asteroid[/* sizeType */2];
    var tmp;
    switch (match$2) {
      case 0:
        tmp = 10;
        break;
      case 1:
        tmp = 25;
        break;
      case 2:
        tmp = 50;
        break;

    }
    return (/* tuple */[Asteroid.destroy(asteroid), match[1], Particle.makeAsteroidExplosion(asteroid[/* position */0]), tmp]
    );
  } else {
    return (/* tuple */[
      /* :: */[asteroid,
      /* [] */0], bullets,
      /* [] */0, 0]
    );
  }
}

function checkBulletAsteroidCollisions(_asteroids, _safeAsteroids, _bullets, _particles, _score) {
  while (true) {
    var score = _score;
    var particles = _particles;
    var bullets = _bullets;
    var safeAsteroids = _safeAsteroids;
    var asteroids = _asteroids;
    if (asteroids) {
      var match = checkAsteroidCollision(asteroids[0], bullets);
      _score = score + match[3] | 0;
      _particles = Pervasives.$at(particles, match[2]);
      _bullets = match[1];
      _safeAsteroids = Pervasives.$at(safeAsteroids, match[0]);
      _asteroids = asteroids[1];
      continue;
    } else {
      return (/* tuple */[safeAsteroids, bullets, particles, score]
      );
    }
  };
}

function checkShipAsteroidCollisions(asteroids, ship) {
  var match = List.partition(function (asteroid) {
    return detect( /* tuple */[asteroid[/* position */0], asteroid[/* collisionRadius */6]], /* tuple */[ship[/* position */0], ship[/* collisionRadius */7]]);
  }, asteroids);
  var hitAsteroids = match[0];
  var match$1 = ship[/* activeState */8];
  if (match$1 !== 0) {
    return (/* tuple */[asteroids, ship]
    );
  } else if (hitAsteroids) {
    return (/* tuple */[Pervasives.$at(Asteroid.destroy(hitAsteroids[0]), Pervasives.$at(hitAsteroids[1], match[1])), Ship.destroy(ship)]
    );
  } else {
    return (/* tuple */[asteroids, ship]
    );
  }
}

function checkCollisions(state) {
  var match = checkBulletAsteroidCollisions(state[/* asteroids */3], /* [] */0, state[/* ship */0][/* bullets */6], state[/* particles */4], 0);
  var asteroids = match[0];
  var match$1 = state[/* ship */0][/* invincableFrames */11] === 0 ? checkShipAsteroidCollisions(asteroids, state[/* ship */0]) : /* tuple */[asteroids, state[/* ship */0]];
  var newrecord = match$1[1].slice();
  return (/* record */[(
    /* ship */newrecord[/* bullets */6] = match[1], newrecord),
    /* performanceStats */state[/* performanceStats */1],
    /* screenSize */state[/* screenSize */2],
    /* asteroids */match$1[0],
    /* particles */match[2],
    /* wave */state[/* wave */5],
    /* score */state[/* score */6] + match[3] | 0,
    /* framesBetweenWave */state[/* framesBetweenWave */7]]
  );
}

exports.detect = detect;
exports.checkAsteroidCollision = checkAsteroidCollision;
exports.checkBulletAsteroidCollisions = checkBulletAsteroidCollisions;
exports.checkShipAsteroidCollisions = checkShipAsteroidCollisions;
exports.checkCollisions = checkCollisions;
/* Ship Not a pure module */
},{"./Vec.js":25,"../../../node_modules/bs-platform/lib/es6/list.js":14,"./Ship.js":6,"./Asteroid.js":7,"./Particle.js":9,"../../../node_modules/bs-platform/lib/es6/pervasives.js":13}],12:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcFps = exports.make = undefined;

var _list = require("../../../node_modules/bs-platform/lib/es6/list.js");

var List = _interopRequireWildcard(_list);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function make() {
  return (/* record */[
    /* fps */0,
    /* updateTimes : [] */0]
  );
}

function calcFps(param, timePassed) {
  var fps = param[/* fps */0];
  var newTimeList = List.filter(function (time) {
    return +(time >= timePassed - 1000);
  })( /* :: */[timePassed, param[/* updateTimes */1]]);
  var newFps = List.length(newTimeList);
  var match = +(newFps === (fps - 1 | 0) || newFps === (fps + 1 | 0));
  var normalizedFps = match !== 0 ? fps : newFps;
  return (/* record */[
    /* fps */normalizedFps,
    /* updateTimes */newTimeList]
  );
}

exports.make = make;
exports.calcFps = calcFps;
/* No side effect */
},{"../../../node_modules/bs-platform/lib/es6/list.js":14}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = exports.updateLoop = exports.draw = exports.update = exports.updateWave = exports.initialState = exports.screenSize = undefined;

var _list = require("../../../node_modules/bs-platform/lib/es6/list.js");

var List = _interopRequireWildcard(_list);

var _Ship = require("./Ship.js");

var Ship = _interopRequireWildcard(_Ship);

var _Asteroid = require("./Asteroid.js");

var Asteroid = _interopRequireWildcard(_Asteroid);

var _Controls = require("./Controls.js");

var Controls = _interopRequireWildcard(_Controls);

var _Particle = require("./Particle.js");

var Particle = _interopRequireWildcard(_Particle);

var _Collision = require("./Collision.js");

var Collision = _interopRequireWildcard(_Collision);

var _pervasives = require("../../../node_modules/bs-platform/lib/es6/pervasives.js");

var Pervasives = _interopRequireWildcard(_pervasives);

var _Draw_canvas = require("./Draw_canvas.js");

var Draw_canvas = _interopRequireWildcard(_Draw_canvas);

var _PerformanceStats = require("./PerformanceStats.js");

var PerformanceStats = _interopRequireWildcard(_PerformanceStats);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var screenSize = /* tuple */[700, 700];

var initialState_000 = /* ship */Ship.make(screenSize, /* None */0, /* () */0);

var initialState_001 = /* performanceStats */PerformanceStats.make( /* () */0);

var initialState_003 = /* asteroids : :: */[Asteroid.make( /* Large */0, screenSize),
/* :: */[Asteroid.make( /* Large */0, screenSize),
/* :: */[Asteroid.make( /* Large */0, screenSize),
/* [] */0]]];

var initialState = /* record */[initialState_000, initialState_001,
/* screenSize */screenSize, initialState_003,
/* particles : [] */0,
/* wave */1,
/* score */0,
/* framesBetweenWave */0];

function updateWave(state) {
  var match = Collision.checkCollisions(state);
  var screenSize = match[/* screenSize */2];
  var ship = Ship.update(match[/* ship */0], screenSize);
  var asteroids = List.map(function (param) {
    return Asteroid.update(screenSize, param);
  }, match[/* asteroids */3]);
  var particles = Particle.updateParticles(match[/* particles */4]);
  return (/* record */[
    /* ship */ship,
    /* performanceStats */state[/* performanceStats */1],
    /* screenSize */state[/* screenSize */2],
    /* asteroids */asteroids,
    /* particles */particles,
    /* wave */state[/* wave */5],
    /* score */match[/* score */6],
    /* framesBetweenWave */state[/* framesBetweenWave */7]]
  );
}

function update(state) {
  var performanceStats = PerformanceStats.calcFps(state[/* performanceStats */1], window.performance.now());
  var match = List.length(state[/* asteroids */3]);
  var match$1 = state[/* framesBetweenWave */7];
  var newState;
  if (match !== 0) {
    newState = updateWave(state);
  } else if (match$1 > 100) {
    newState = /* record */[
    /* ship */Ship.resetPosition(state[/* ship */0], state[/* screenSize */2]),
    /* performanceStats */state[/* performanceStats */1],
    /* screenSize */state[/* screenSize */2],
    /* asteroids */Asteroid.makeMany( /* Large */0, state[/* screenSize */2], state[/* wave */5] + 3 | 0, /* [] */0),
    /* particles */state[/* particles */4],
    /* wave */state[/* wave */5] + 1 | 0,
    /* score */state[/* score */6],
    /* framesBetweenWave */0];
  } else {
    var newrecord = updateWave(state).slice();
    newrecord[/* framesBetweenWave */7] = match$1 + 1 | 0;
    newState = newrecord;
  }
  var newrecord$1 = newState.slice();
  newrecord$1[/* performanceStats */1] = performanceStats;
  return newrecord$1;
}

function draw(ctx, state) {
  Draw_canvas.clearFrame(ctx, state[/* screenSize */2]);
  var match = state[/* ship */0][/* activeState */8];
  switch (match) {
    case 0:
      Ship.draw(ctx, state[/* ship */0]);
      break;
    case 1:
      break;
    case 2:
      Draw_canvas.gameOver(ctx, state[/* screenSize */2]);
      break;

  }
  List.iter(function (param) {
    return Asteroid.draw(ctx, param);
  }, state[/* asteroids */3]);
  List.iter(function (param) {
    return Particle.draw(ctx, param);
  }, state[/* particles */4]);
  Draw_canvas.lives(ctx, state[/* ship */0][/* lives */10]);
  return Draw_canvas.score(ctx, state[/* score */6], screenSize);
}

function updateLoop(canvas, state, _) {
  var newState = update(state);
  draw(canvas, newState);
  requestAnimationFrame(function (param) {
    return updateLoop(canvas, newState, param);
  });
  return (/* () */0
  );
}

function run() {
  var match = document.getElementById("canvas");
  var canvas = match !== null ? match : (console.log("cant find canvas"), Pervasives.failwith("fail"));
  var context = canvas.getContext("2d");
  document.addEventListener("keydown", Controls.keydown, /* true */1);
  document.addEventListener("keyup", Controls.keyup, /* true */1);
  return updateLoop(context, initialState, 0.0);
}

window.onload = function () {
  run( /* () */0);
  return (/* true */1
  );
};

exports.screenSize = screenSize;
exports.initialState = initialState;
exports.updateWave = updateWave;
exports.update = update;
exports.draw = draw;
exports.updateLoop = updateLoop;
exports.run = run;
/* initialState Not a pure module */
},{"../../../node_modules/bs-platform/lib/es6/list.js":14,"./Ship.js":6,"./Asteroid.js":7,"./Controls.js":8,"./Particle.js":9,"./Collision.js":10,"../../../node_modules/bs-platform/lib/es6/pervasives.js":13,"./Draw_canvas.js":11,"./PerformanceStats.js":12}],60:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49218' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[60,4], null)
//# sourceMappingURL=/Main.8855e333.map