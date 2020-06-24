"use strict"

let a = parseInt(prompt("Введите число для вклада в банк"))

/**
 * функция возвращает в правильном склонении строку "рубль" в зависимости от входного значения
 * @param {number} declining вводимая целочисленная сумма для вклада в банк
 */
const decliningRuble = function (declining) {
  switch (declining % 10) {
    case 0:
      return "рублей"
    case 1:
      return "рубль"
    case 2:
    case 3:
    case 4:
      return "рубля"
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return "рублей"
  }
}

alert(`Ваша сумма в ${a} ${decliningRuble(a)} успешно зачислена.`)
