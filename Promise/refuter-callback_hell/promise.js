// function makeTime(timer, str) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(str);
//     }, timer);
//   });
// }

// const time1 = makeTime(1000, "first time");
// const time2 = makeTime(3000, "second time");
// const time3 = makeTime(2000, "third time");

// const timerTotal = Promise.all([time1, time2, time3]);
// timerTotal.then((data) => {
//   console.log(data);
// });
// const timerTota2 = Promise.race([time1, time2, time3]);
// timerTota2.then((data) => {
//   console.log(data);
// });

function isFrontendDev(languages) {
  return new Promise((resolve, reject) => {
    if (languages.includes("html")) {
      setTimeout(() => {
        resolve("You are Forntend developer");
      }, 100);
    }
    reject("You are not Frontend developer");
  });
}

const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);

const devAll = Promise.all([dev1, dev2])
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    // console.log(data);
  });
const devRace = Promise.race([dev1, dev2])
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    // console.log(data);
  });
const devAllSettled = Promise.allSettled([dev1, dev2])
  .then((data) => {
    // console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

// try catch
function isFrontendDev2(languages) {
  if (!languages.includes("html")) {
    reject("you are not Forntend developer");
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("you are Forntenf developer");
    }, 500);
  });
}

try {
  isFrontendDev2("css")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
} catch (err) {
  // console.log("oh no sorry");
}

// async await

function wait(timer = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
}

//Promise
function run() {
  console.log("starting");
  wait(2000)
    .then(() => {
      console.log("runing");
    })
    .then(() => {
      wait(1000).then(() => {
        console.log("ending");
      });
    });
}
// run();

//Async await
async function run() {
  console.log("starting");
  const a = await wait(2000);
  console.log("runing");
  await wait(500);
  console.log("ending");
}

function isFrontendDev2(languages) {
  return new Promise((resolve, reject) => {
    if (languages.includes("css")) {
      console.log(languages);
      resolve("You are Forntend developer");
    }
    setTimeout(() => {
      reject("You are not Frontend developer");
    }, 100);
  });
}

async function go() {
  const dev1 = await isFrontendDev2(["css"]);
  console.log(dev1);
  return dev1;
}
go()
  .then((ss) => {
    console.log(ss);
  })
  .catch((err) => {
    console.log(err);
  });
