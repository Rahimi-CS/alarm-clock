const select = document.querySelectorAll("select");
const time = document.querySelector("h1");
const setAlrmBtn = document.querySelector("button");
let alarmTime,
  alarmState = "noset";
const rington = new Audio("./file/song.m4a");
const content = document.querySelector(".content");

for (let i = 23; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  select[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let j = 59; j >= 0; j--) {
  j = j < 10 ? "0" + j : j;
  let option = `<option value="${j}">${j}</option>`;
  select[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (alarmTime == `${h}:${m}`) {
    rington.play();
    rington.loop = true;
  }

  time.innerHTML = `${h}:${m}:${s}`;
}, 1000);

setAlrmBtn.addEventListener("click", () => {
  alarmTime = `${select[0].value}:${select[1].value}`;
  if (alarmTime.includes("Hour") || alarmTime.includes("Minute")) {
    alert("زمان هشدار را به درستی تنظیم نمایید!");
  }
  cheakState(alarmState)
});

function cheakState(state) {
  if (state == "noset") {
    content.classList.add("disabled");
    setAlrmBtn.innerText = "Clear Aarm";
    alarmState = "set";
  }
  else{
    content.classList.remove("disabled");
    alarmTime = ''
    rington.pause();
    alarmState = "noset";
  }
}
