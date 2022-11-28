import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inpurForDatetime = document.querySelector(`#datetime-picker`);
const btnOnStartTimer = document.querySelector(`[data-start]`);
const outputTime = {
  days: document.querySelector(`[data-days]`),
  hours: document.querySelector(`[data-hours]`),
  minutes: document.querySelector(`[data-minutes]`),
  seconds: document.querySelector(`[data-seconds]`),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      return Notiflix.Notify.failure(`Please choose a date in the future`);
    }
    btnOnStartTimer.disabled = false;
    btnOnStartTimer.addEventListener(`click`, () => {
      const timerID = setInterval(() => {
        const remainder = selectedDates[0] - new Date();
        const restOfiTme = convertMs(remainder);
        outputTime.days.textContent = validNumber(restOfiTme.days);
        outputTime.hours.textContent = validNumber(restOfiTme.hours);
        outputTime.minutes.textContent = validNumber(restOfiTme.minutes);
        outputTime.seconds.textContent = validNumber(restOfiTme.seconds);
        // console.log(remainder);
        if (remainder < 1000) {
          clearInterval(timerID);
        }
      }, 1000);
    });
  },
};

flatpickr(inpurForDatetime, options);

function validNumber(e) {
  if (e < 10) {
    return `0${e}`;
  }
  return e;
}

function validDate(e) {
  const onValidDate = {};
  const allDate = e.split(` `);
  const date = allDate[0].split(`-`);
  const time = allDate[1].split(`:`);
  onValidDate.yer = parseInt(date[0]);
  onValidDate.mes = parseInt(date[1]);
  onValidDate.day = parseInt(date[2]);
  onValidDate.hours = parseInt(time[0]);
  onValidDate.minute = parseInt(time[1]);
  return onValidDate;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
