/**
 * @description 自定义Error子类
 *
 */

class ExtendableError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.stack = new Error().stack;
    this.name = this.constructor.name;
  }
}

class HttpError extends ExtendableError {
  constructor(message) {
    super(message);
  }
}

const myError = new HttpError("网络错误");

console.log(myError);
console.log(myError instanceof Error);
console.log(myError.name);
console.log(myError.stack);
