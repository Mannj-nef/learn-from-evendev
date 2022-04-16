function callbackHell() {
  setTimeout(() => {
    console.log("the first");
    setTimeout(() => {
      console.log("the second");
      setTimeout(() => {
        console.log("the third");
        setTimeout(() => {
          console.log("the fourth");
          setTimeout(() => {
            console.log("the fifth");
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}

// callback hell

// sử dụng promise refuter callback hell trên

function promise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("-----success-----");
    }, 3000);
  });
  promise
    .then((data) => {
      console.log(data);
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve("1.the first");
        }, 500);
      });
    })
    .then((data) => {
      console.log(data);
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve("2.the second");
        }, 500);
      });
    })
    .then((data) => {
      console.log(data);
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve("3.the third");
        }, 500);
      });
    })
    .then((data) => {
      console.log(data);
      return new Promise(function (resolve) {
        setTimeout(() => {
          resolve("4.the fourth");
        }, 500);
      });
    })
    .then((data) => {
      console.log(data);
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve("5.the fifth");
        }, 500);
      });
    })
    .then((data) => {
      console.log(data);
      return Promise.reject("___sorry___!");
    })
    .catch((data) => {
      setTimeout(() => {
        console.log(data);
      }, 1000);
    });

  console.log(promise);
}
function makeTime(timer, str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}

const time1 = makeTime(1000, "first time");
const time2 = makeTime(10000, "second time");
const time3 = makeTime(6000, "third time");

const timerTotal = Promise.all([time1, time2, time3]);
timerTotal.then((data) => {
  console.log(data);
});
const timerTota2 = Promise.race([time1, time2, time3]);
timerTota2.then((data) => {
  console.log(data);
});

callbackHell();
promise();
