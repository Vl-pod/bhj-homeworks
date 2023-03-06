const timerEl = document.getElementById("timer");
let timeLeft = parseInt(timerEl.textContent);

const countdownInterval = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerEl.textContent = timeLeft;
  } else {
    clearInterval(countdownInterval);
    alert("Вы победили в конкурсе!");
  }
}, 1000);

/*const timerEl = document.getElementById("timer");
let timeLeft = timerEl.textContent;

const countdownInterval = setInterval(() => {
  const timeArray = timeLeft.split(":");
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  let seconds = parseInt(timeArray[2]);

  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;

    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;

      if (hours > 0) {
        hours--;
      } else {
        clearInterval(countdownInterval);
        alert("Вы победили в конкурсе!");
      }
    }
  }

  const hoursString = hours.toString().padStart(2, "0");
  const minutesString = minutes.toString().padStart(2, "0");
  const secondsString = seconds.toString().padStart(2, "0");
  timerEl.textContent = `${hoursString}:${minutesString}:${secondsString}`;
}, 1000);*/
//как - то так, пока не работает(((