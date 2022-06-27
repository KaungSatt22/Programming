const even = num => num % 2 === 0;
const doubleEven = num => even(num) ? num *2 : num
console.log(doubleEven(2))