"use strict";
let userСelsiusTemperature = Math.fround(prompt("Пожалйста введите температуру в Градусах по Цельсию для конвертации в Градусы Фарйнгейта"));
let fahrenheitTemperature = (9 / 5) * userСelsiusTemperature + 32;
alert( userСelsiusTemperature.toFixed(2) + " Градусов Цельсия = " + fahrenheitTemperature.toFixed(2) + " Градусам Фарингейта");