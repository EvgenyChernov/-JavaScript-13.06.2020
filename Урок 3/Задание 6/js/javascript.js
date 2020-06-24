"use strict"
/**
 * функция выводит в консоль значение переменной a
 * @param {number} a 
 */
const showNumber = function (a) {
    console.log(a);
}

for (let i = 0; i <= 9; showNumber(i++)) {}