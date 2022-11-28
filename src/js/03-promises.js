import Notiflix from 'notiflix';

const inputDelayEl = document.querySelector(`input[name="delay"]`);
const inputStepEl = document.querySelector(`input[name="step"]`);
const inputAmountEl = document.querySelector(`input[name="amount"]`);
const btnSubmitEl = document.querySelector(`button`);

btnSubmitEl.addEventListener(`click`, onMakeMessage);

let n = 0;
let timeID = null;
let intID = null;
function onMakeMessage(e) {
  e.preventDefault();
  btnSubmitEl.textContent = `Stop promises`;
  n += 1;
  if (n === 1) {
    timeID = setTimeout(() => {
      // console.log(`работаю`);
      let namberInterval = 0;
      intID = setInterval(() => {
        // console.log(`инт`);
        if (namberInterval < inputAmountEl.value) {
          namberInterval += 1;
          createPromise(namberInterval, inputStepEl.value);
        } else {
          resetCreatePromise();
        }
      }, inputStepEl.value);
    }, inputDelayEl.value);
  } else {
    resetCreatePromise();
  }
}

function resetCreatePromise() {
  clearTimeout(timeID);
  clearInterval(intID);
  inputAmountEl.value = inputStepEl.value = inputDelayEl.value = ``;
  n = 0;
  btnSubmitEl.textContent = `Create promises`;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  }
}
