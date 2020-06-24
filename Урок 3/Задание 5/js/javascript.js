"use strict"

const products = [
  { id: 3, price: 127, photos: ["1.jpg", "2.jpg"] },
  { id: 5, price: 499, photos: [] },
  { id: 10, price: 26, photos: ["3.jpg"] },
  { id: 8, price: 78 },
]

let productFilterOne = products.filter((product) =>
  product.hasOwnProperty("photos")
)

let productFilterTwo = productFilterOne.filter((product) => {
  if (product.photos.length > 0) {
    return true
  } else return false
})

console.log(productFilterTwo)
console.log(
  productFilterTwo.sort(function (a, b) {
    return a.price - b.price
  })
)
