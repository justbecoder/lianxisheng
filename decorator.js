/**
 * @description decorator的使用
 *
 */

function log() {
  return function (target, descriptor) {
    console.log(target, descriptor);
    return descriptor;
  };
}

function testA(target, descriptor) {}

class Decorator {
  @log()
  hello() {
    console.log("this is a test!");
  }
}

// const d = new descriptor();
