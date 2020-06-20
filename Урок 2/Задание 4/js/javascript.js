"use strict";
/**
 * Функция возвращает сумму a и b.
 * @param {number} a (операнд-1)
 * @param {number} b (операнд-2)
 * @returns {number}
 */
function sum(a, b) {
        return a + b;
}

/**
 * Функция возвращает разность a и b.
 * @param {number} a (операнд-1)
 * @param {number} b (операнд-2)
 * @returns {number}
 */
function difference(a, b) {
        return a - b;
}

/**
 * Функция возвращает произведение a и b.
 * @param {number} a (операнд-1)
 * @param {number} b (операнд-2)
 * @returns {number}
 */
function multiplication(a, b) {
        return a * b;
}

/**
 * Функция возвращает отношение a и b.
 * @param {number} a (операнд-1)
 * @param {number} b (операнд-2)
 * @returns {number}
 */
function division(a, b) {
        return a / b;
}
let a = 1;
let b = 2;

alert(sum(a, b));
alert(difference(a, b));
alert(multiplication(a, b));
alert(division(a, b));