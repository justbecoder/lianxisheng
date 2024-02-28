/**
 * @description 自定义实现call方法
 */

Function.prototype.myCall = function (ctx, ...args) {
  // 确定this的指向问题
  const _ = ctx || globalThis;

  // 添加方法
  let key = Symbol("myCall");
  // this指向了函数调用本身
  _[key] = this;

  return _[key](...args);
};

function sum(a, b, c) {
  return a + b + c;
}

function printMyName(age) {
  console.log(`my name is ${this.name}, and my age is ${age}`);
}

const result = sum.myCall(null, ...[1, 2, 3]);
const result2 = sum.call(null, ...[1, 2, 3]);
console.log(result);
console.log(result2);
printMyName.myCall(
  {
    name: "张三",
  },
  [200]
);
