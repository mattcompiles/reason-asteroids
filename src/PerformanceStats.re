type t = {
  fps: int,
  updateTimes: list(float),
};

let make = () => {fps: 0, updateTimes: []};

let calcFps = ({updateTimes, fps}, timePassed) => {
  let newTimeList =
    [timePassed, ...updateTimes]
    |> List.filter(time => time >= timePassed -. 1000.);
  let newFps = List.length(newTimeList);

  let normalizedFps = newFps == fps - 1 || newFps == fps + 1 ? fps : newFps;

  {fps: normalizedFps, updateTimes: newTimeList};
};