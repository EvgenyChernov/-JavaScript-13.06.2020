"use strict";

for (let i = 0; i <= 10; i++) {
	if (i === 0) {
		console.log(`${i} - это ноль`);
	}
	else if (getRest(i) === 0) {
		console.log(`${i} - это четное число`);
	}
	else if (getRest(i) !== 0) {
		console.log(`${i} - это нечетное число`)
	}
}

/**
 * функция возвращает остаток от деления (1,0)
 * @param {number} var1 число у которого необходимо вычислить остаток от деления
 */
function getRest(var1) {
	return var1 % 2
}
