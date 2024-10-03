let inputName = document.getElementById('firstName');
let inputPhone = document.getElementById('inputPhone');
inputPhone.oninput = () => phoneMask(inputPhone);
function phoneMask(inputEl) {
  let patStringArr = '+7(___)___-__-__'.split('');
  let arrPush = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15];
  let val = inputEl.value;
  let arr = val.replace(/\D+/g, '').split('').splice(1);
  let n;
  let ni;
  arr.forEach((s, i) => {
    n = arrPush[i];
    patStringArr[n] = s;
    ni = i;
  });
  arr.length < 10 ? (inputEl.style.color = 'red') : (inputEl.style.color = 'green');
  inputEl.value = patStringArr.join('');
  n ? inputEl.setSelectionRange(n + 1, n + 1) : inputEl.setSelectionRange(17, 17);
}
let openPop = document.querySelector('open_poppup');
let Pop = document.querySelector('.poppup');
let closePop = document.querySelector('close_poppup');

const OpenPoppup = () => {
  Pop.classList.toggle('poppup--active');
};
const ClosePoppup = () => {
  Pop.classList.toggle('poppup--active');
};

const ShowMsg = () => {
  console.log(inputPhone.value + inputName.value);
  alert('Спасибо за обращение! Скоро вернёмся с обратной связью');
};
