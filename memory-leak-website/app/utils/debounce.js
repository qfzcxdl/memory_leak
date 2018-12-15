//防抖函数
export default class Debounce {
  constructor(callback, gapTime = 1500) {
    this.timer = null;
    this.callback = callback;
    this.gapTime = gapTime;
    this.create = this.create.bind(this);
  }

  create() {
    const that = this;

    return function(...args) {
      clearTimeout(that.timer);
      that.timer = setTimeout(() => {
        that.callback.apply(undefined, args);
      }, that.gapTime);
    };
  }
}
