export default function throttle(fn, gapTime = 1500) {
  let lastTime = null;

  return function() {
    let nowTime = new Date();

    if (nowTime - lastTime > gapTime || !lastTime) {
      lastTime = nowTime;
      // 通过 apply 改变函数内部 this 指向
      fn.apply(this, arguments);
    }
  };
}
