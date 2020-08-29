function red() {
  console.log('red')
}

function green() {
  console.log('green')
}

function yellow() {
  console.log('yellow')
}

const light = function (timmer, cb) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      cb();
      resolve();
    }, timmer);
  });
};

const step = async function () {
  await light(3000, red)
  await light(2000, green)
  await light(1000, yellow)
  step()

  // 原始promise写法
  // Promise.resolve().then(function () {
  //   return light(3000, red);
  // }).then(function () {
  //   return light(2000, green);
  // }).then(function () {
  //   return light(1000, yellow);
  // }).then(function () {
  //   step();
  // });
}

step()