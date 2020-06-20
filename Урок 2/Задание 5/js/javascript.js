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

/**
 * Функция возвращает одно значение из арифметических операций ("sum","difference", "multiplication", "division",) между a и b.
 * @param {number} arg1 (операнд-1)
 * @param {number} arg2 (операнд-2)
 * @param {string} operation (вид арифметической операции)
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation){
        switch (operation) {
                case ("sum"):
                        return sum(arg1, arg2);
                case ("difference"):
                        return difference(arg1, arg2);
                case ("multiplication"):
                        return multiplication(arg1, arg2);
                case ("division"):
                        return division(arg1, arg2);
        } 
}

let a = 2, b = 2, operation = "sum";
alert(mathOperation(a, b, operation));