/**
 * @description 自定义实现Promise
 */

class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    // 成功
    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;

        this.onResolvedCallbacks.forEach((cb) => {
          cb(this.value);
        });
      }
    };

    // 失败
    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {}
  }

  // 定义then
  then(onResolve, onReject) {
    // 判断当前promise的状态
    if (this.status === "pending") {
      this.onRejectedCallbacks.push(onReject);
      this.onResolvedCallbacks.push(onResolve);
    }
    if (this.status === "fulfilled") {
      onResolve(this.value);
    }
    if (this.status === "rejected") {
      onReject(this.reason);
    }

    return this;
  }
}

new MyPromise((resolve, reject) => {
  console.log(resolve, reject);

  setTimeout(() => {
    resolve(1111);
  }, 3000);
}).then((value) => {
  console.log(value);
});
