/**
 * @description 模拟Promise.all方法的实现
 */

function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("arguments must be an array"));
    }

    // 定义数组接收结果
    let result = [];

    // 遍历每一个
    promises.forEach((p) => {
      p.then((data) => {
        result.push(data);

        if (result.length === promises.length) {
          resolve(result);
        }
      }).catch((err) => {
        reject(err);
      });
    });

    // 传入数组为空
    if (!promises.length) {
      resolve([]);
    }
  });
}

const p1 = new Promise((resolve) => {
  setTimeout(resolve, 1000, 1);
});
const p2 = new Promise((resolve, reject) => {
  // setTimeout(reject, 2000, 2);
  setTimeout(resolve, 2000, 2);
});
const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, 3);
});

PromiseAll([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`error ${error}`);
  });
