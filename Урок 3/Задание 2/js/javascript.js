"use strict"

for (let i = 0; i <= 10; i++) {
	if (i == 0) {
		console.log(`${i} - это ноль`);
	}
	else if (getRest(i) == 0) {
		console.log(`${i} - это четное число`);
	}
	else if (getRest(i) != 0) {
		console.log(`${i} - это нечетное число`);
	}
}

function getRest(var1) {
	return var1 % 2
}