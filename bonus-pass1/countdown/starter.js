window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");
  const setTime = document.querySelector(".btn-control");

  setTime.addEventListener("click", function (e) {
    const now = new Date().getTime();
    const endTime = now + 10 * 60 * 1000;

    const days = parseInt(daysText.textContent);
    const hours = parseInt(hoursText.textContent);
    const minutes = parseInt(minutesText.textContent);
    const seconds = parseInt(secondsText.textContent);

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      countTime(endTime);
    }
  });

  function countTime(date) {
    const endTime = new Date(date);
    let days, hours, minutes, seconds;

    setInterval(calculateTime, 500);
    function calculateTime() {
      const now = new Date();
      let remainingTime = parseInt((endTime - now) / 1000);

      if (remainingTime >= 0) {
        days = parseInt(remainingTime / (24 * 60 * 60));
        remainingTime = parseInt(remainingTime % (24 * 60 * 60));
        hours = parseInt(remainingTime / (60 * 60));
        remainingTime = parseInt(remainingTime % (60 * 60));
        minutes = parseInt(remainingTime / 60);
        remainingTime = parseInt(remainingTime % 60);
        seconds = parseInt(remainingTime);

        daysText.textContent = `0${days}`.slice(-2);
        hoursText.textContent = `0${hours}`.slice(-2);
        minutesText.textContent = `0${minutes}`.slice(-2);
        secondsText.textContent = `0${seconds}`.slice(-2);
      } else {
        return;
      }
    }
  }

  // countTime("Wed Feb 23 2022 18:46:54 GMT+0700 (Indochina Time)");s
});
