"use strict";

let randNumber;
let count = 10;
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
    count--;
    userNumber = parseFloat(userNumber);
    if (userNumber > randNumber && count > 0) {
      alert("Загаданное число меньше, осталось попыток: " + count);
      mainFunction();
    } else if (userNumber < randNumber && count > 0) {
      alert("Загаданное число больше, осталось попыток: " + count);
      mainFunction();
    } else if (userNumber === randNumber) {
      let qst = confirm("Поздравляю, Вы угадали!!!\nХотите сыграть еще раз?");
      newGame(qst);
    } else if (count == 0) {
      let qst = confirm("Попытки закончились.\nХотите сыграть еще раз?");
      newGame(qst);
    }
  }
}
//-------------------------------
function newGame(answer) {
  if (answer) {
    randNumber = getRandom(1, 100);
    count = 10;
    mainFunction();
  } else {
    alert("Спасибо за игру!");
  }
}
//-------------------------------
//=============================================================================================
randNumber = getRandom(1, 100);
mainFunction();
//=============================================================================================
//=============================================================================================
