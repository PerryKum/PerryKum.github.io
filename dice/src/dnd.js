let x_force = 0;
let y_force = 0;

let x_dice = 0;
let y_dice = 0;

let d = 0;

const SUCCESS_NOLMAL = 0.5;
const SUCCESS_HARD = 0.2;
const SUCCESS_VERY_HARD = 5;

let times = 0;

function getDice(item) {
  item = Math.floor(Math.random() * d) + 1;
  return item;
}

function judgeState(temp, force) {
  if (temp <= SUCCESS_VERY_HARD) {
    console.log(force, "大成功");
    return 1; // 大成功
  } else if (temp <= SUCCESS_HARD * force) {
    console.log(force, "极难成功");
    return 2; // 极难成功
  } else if (temp <= SUCCESS_NOLMAL * force) {
    console.log(force, "困难成功");
    return 3; // 困难成功
  } else if (temp <= force) {
    console.log(force, "成功");
    return 4; // 成功
  } else {
    console.log(force, "失败");
    return 5; // 失败
  }
}

function judgeSuccess() {
  let xTemp = getDice(x_dice);
  console.log("x点数", xTemp);
  let yTemp = getDice(y_dice);
  console.log("y点数", yTemp);

  let xState = judgeState(xTemp, x_force);
  let yState = judgeState(yTemp, y_force);

  if (xState == 5 && yState == 5) {
    console.log("双败");
    console.log("");
    return "defeate";
  }

  if (xState < yState) {
    console.log("x赢");
    console.log("");
    return "x";
  } else if (xState > yState) {
    console.log("y赢");
    console.log("");
    return "y";
  } else {
    console.log("平局");
    console.log("");
    return "draw";
  }
}

function dnd_run(x, y, t, _d) {
  x_force = x;
  y_force = y;
  times = t;
  d = _d;
  let x_win = 0;
  let y_win = 0;
  let draw = 0;
  let defeate = 0;
  for (let i = 0; i < times; i++) {
    let result = judgeSuccess();
    if (result == "defeate") {
      defeate++;
    } else if (result == "x") {
      x_win++;
    } else if (result == "y") {
      y_win++;
    } else {
      draw++;
    }
  }
  console.log("共", times, "次");
  console.log("x赢", x_win);
  console.log("y赢", y_win);
  console.log("平局", draw);
  console.log("双败", defeate);
  console.log("x净胜率（不计算平局）", (x_win / times).toFixed(2));
  console.log(
    "x胜率（作为发起方造成伤害）",
    ((x_win + draw) / times).toFixed(2)
  );
}
