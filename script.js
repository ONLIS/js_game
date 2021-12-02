"use strict";

let randNumber;
//=============================================================================================

let getRandom = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
//-------------------------------
const isNumber = function (value) {
  if (value !== null) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  } else {
    return null;
  }
};
//-------------------------------
function mainFunction() {
  let userNumber = prompt("Угадай число от 1 до 100");
  if (isNumber(userNumber) == null) {
    alert("Игра окончена!!!");
  } else if (!isNumber(userNumber)) {
    alert("Введите число!");
    mainFunction();
  } else if (isNumber(userNumber)) {
    userNumber = parseFloat(userNumber);
    if (userNumber > randNumber) {
      alert("Загаданное число меньше. Повторите попытку");
      mainFunction();
    } else if (userNumber < randNumber) {
      alert("Загаданное число больше. Повторите попытку");
      mainFunction();
    } else if (userNumber === randNumber) {
      alert("Поздравляю, Вы угадали!!!");
    }
  }
}
//-------------------------------

//=============================================================================================
randNumber = getRandom(1, 100);
mainFunction();
//=============================================================================================
//=============================================================================================
