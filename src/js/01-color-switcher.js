const bodyForColors = document.querySelector(`body`);
const btnStart = document.querySelector(`[data-start]`);
const btnStop = document.querySelector(`[data-stop]`);
let timerID = null;

btnStart.addEventListener(`click`, noChengesColorBody);
btnStop.addEventListener(`click`, offChengesColorBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function noChengesColorBody() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerID = setInterval(() => {
    bodyForColors.style.backgroundColor = getRandomHexColor();
    console.log(`color`);
  }, 1000);
}

function offChengesColorBody() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerID);
}
