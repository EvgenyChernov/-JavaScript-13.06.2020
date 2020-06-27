"use strict";

class getAlignmentOfNumber {
    constructor(number) {
        this.units = getDischarge(number)[2];
        this.tens = getDischarge(number)[1];
        this.hundereds = getDischarge(number)[0];

        /**
         * Функция получает число от 0 до 999 и возвражает массив в формате ['0','0','3']
         * пример 22 --> ['0','2','2']
         * @param number входящее число
         * @returns {string[]} выходящий массив
         */
        function getDischarge(number) {
            if (number >= 0 && number <= 9) {
                const arrayOne0 = ['0', '0']
                return arrayOne0.concat(getArray(number));
            } else if (number >= 10 && number <= 99) {
                const arrayOne0 = ['0']
                return arrayOne0.concat(getArray(number));
            } else
                return getArray(number);
        }

        /**
         * Функция принимает число, возвращает массив
         * пример 22 --> ['2','2']
         * @param number входящее положительное число
         * @returns {string[]} вызодящий массив
         */
        function getArray(number) {
            return String(number).split('');

        }
    }
}

const number1 = new getAlignmentOfNumber(2);
console.log(number1);
const number2 = new getAlignmentOfNumber(55);
console.log(number2);
const number3 = new getAlignmentOfNumber(999);
console.log(number3);