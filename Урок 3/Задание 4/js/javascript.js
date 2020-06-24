"use strict"

// const products = [
//   { id: 3, price: 200 },
//   { id: 4, price: 900 },
//   { id: 1, price: 1000 },
// ]

// console.log(products)
// products.forEach(myFunction)

// /**
//  * функция возвращает объект включающий свойства id, price после применения скидки 15%
//  * @param {object} объект полученный из массива
//  */
// function myFunction(object) {
//   console.log(object.price)
//   object.price = object.price * 0.85
//   return object
// }
// console.log(products)

const products = [
  { id: 3, price: 200 },
  { id: 4, price: 900 },
  { id: 1, price: 1000 },
]

products.map(myFunction)

/**
 * функция возвращает объект включающий свойства id, price после применения скидки 15%
 * @param {object} объект полученный из массива
 */
function myFunction(object) {
  object.price = object.price * 0.85;
  return object;
}

console.log(products);