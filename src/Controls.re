type input = {
  mutable left: bool,
  mutable right: bool,
  mutable up: bool,
  mutable down: bool,
};

let activeInput = {left: false, right: false, up: false, down: false};

let keydown = evt => {
  let evt = Dom_html.keyboardEventToJsObj(evt);
  let () =
    switch (evt##keyCode) {
    | 38
    | 32
    | 87 => activeInput.up = true
    | 39
    | 68 => activeInput.right = true
    | 37
    | 65 => activeInput.left = true
    | 40
    | 83 => activeInput.down = true
    | _ => ()
    };
  true;
};

/* Keyup event handler translates a key release */
let keyup = evt => {
  let evt = Dom_html.keyboardEventToJsObj(evt);
  let () =
    switch (evt##keyCode) {
    | 38
    | 32
    | 87 => activeInput.up = false
    | 39
    | 68 => activeInput.right = false
    | 37
    | 65 => activeInput.left = false
    | 40
    | 83 => activeInput.down = false
    | _ => ()
    };
  true;
};