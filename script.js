const select = document.querySelectorAll("select");
const time = document.querySelector('h1');

for (let i = 23; i >= 0; i--) {
  i = i < 10 ? '0' + i : i  
  let option = `<option value="${i}">${i}</option>`;
  select[0].firstElementChild.insertAdjacentHTML('afterend', option)
}

for(let j = 59; j>=0; j--){
    j = j < 10 ? '0' + j : j;
  let option = `<option value="${j}">${j}</option>`;
  select[1].firstElementChild.insertAdjacentHTML('afterend', option)  
}

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? '0' + h : h; 
    m = m < 10 ? '0' + m : m;          
    s = s < 10 ? '0' + s : s; 

    time.innerHTML = (`${h}:${m}:${s}`);
}, 1000);