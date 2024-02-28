/**
 * @description 利用new.target定义不能独立使用，必须继承才能使用的类
 */
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("本类不能实例化");
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
  }
}

// let x = new Shape();
let y = new Rectangle(3, 4);

console.log(Rectangle.prototype.__proto__ === Shape.prototype);
console.log(Rectangle.__proto__ === Shape);
console.log(typeof Rectangle.prototype);
console.log(Shape.prototype.__proto__ === Object.prototype);
