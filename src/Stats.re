let calcFps = (state: GameState.t, timePassed) => {
  let newTimeList =
    [timePassed, ...state.updateTimes]
    |> List.filter(time => time >= timePassed -. 1000.);
  let newFps = List.length(newTimeList);

  let normalizedFps =
    newFps == state.fps - 1 || newFps == state.fps + 1 ? state.fps : newFps;

  {...state, fps: normalizedFps, updateTimes: newTimeList};
};