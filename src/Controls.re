type input = {
  mutable left: bool,
  mutable right: bool,
  mutable up: bool,
  mutable shoot: bool,
};

let activeInput = {left: false, right: false, up: false, shoot: false};

let keydown = evt => {
  let evt = Dom_html.keyboardEventToJsObj(evt);
  let () =
    switch (evt##keyCode) {
    | 38
    | 87 => activeInput.up = true
    | 39
    | 68 => activeInput.right = true
    | 37
    | 65 => activeInput.left = true
    | 32 => activeInput.shoot = true
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
    | 87 => activeInput.up = false
    | 39
    | 68 => activeInput.right = false
    | 37
    | 65 => activeInput.left = false
    | 32 => activeInput.shoot = false
    | _ => ()
    };
  true;
};