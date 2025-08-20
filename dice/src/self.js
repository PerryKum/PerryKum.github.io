let __win_point = 0;

let __x_dice_count = 0;
let __y_dice_count = 0;

let __times = 0;

function __getDice() {
  return Math.floor(Math.random() * 10) + 1;
}

function __judgeSuccess(count) {
  console.log("count", count);
  let temp = 0;
  let win_times = 0;
  for (let i = 0; i < count; i++) {
    temp = __getDice();
    if (temp >= __win_point) {
      win_times += 1;
    }
  }
  return win_times;
}

function __judgeWin() {
  let x_success = 0;
  let y_success = 0;
  x_success = __judgeSuccess(__x_dice_count);
  console.log("x成功", x_success, "次");
  y_success = __judgeSuccess(__y_dice_count);
  console.log("y成功", y_success, "次");
  if (x_success > y_success) {
    console.log("x赢");
    console.log("");
    return "x";
  } else if (x_success < y_success) {
    console.log("y赢");
    console.log("");
    return "y";
  } else {
    console.log("平局");
    console.log("");
    return "draw";
  }
}

function self_run(x, y, t, p) {
  __times = t;
  __win_point = p;
  __x_dice_count = x / 10;
  __y_dice_count = y / 10;
  let x_win = 0;
  let y_win = 0;
  let draw = 0;
  for (let i = 0; i < __times; i++) {
    let result = __judgeWin();
    if (result == "x") {
      x_win += 1;
    } else if (result == "y") {
      y_win += 1;
    } else if (result == "draw") {
      draw += 1;
    }
  }
  console.log("共", __times, "次");
  console.log("x赢", x_win);
  console.log("y赢", y_win);
  console.log("平局", draw);
  console.log("x净胜率（不计算平局）", (x_win / __times).toFixed(2));
  console.log(
    "x胜率（作为发起方造成伤害）",
    ((x_win + draw) / __times).toFixed(2)
  );
}
