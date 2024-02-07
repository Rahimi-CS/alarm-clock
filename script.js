let select = document.querySelectorAll("select");

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