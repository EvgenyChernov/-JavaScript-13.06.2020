"use strict";
let a = 3;
let b = -2;

if (a >= 0 && b >= 0) {
    alert(a - b);
}
if (a < 0 && b < 0) {
    alert(a * b);
}
if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
    alert(a + b);
} 

// Math.sign() - возврат знака от числа (-1,1, -0,0, NaN)
