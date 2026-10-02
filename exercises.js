function multiply(a, b) {
  return a * b;
}
console.log("Product: " + multiply(2, 4));

function isEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(isEven(20));
console.log(isEven(3));

function greater(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(greater(3, 7, 9));