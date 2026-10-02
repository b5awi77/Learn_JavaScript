function greet(name) {
  console.log("Hello " + name);
}

greet("Ahmad");
greet("Sara");

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log("Sum: " + result);

function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log(checkAge(20));
console.log(checkAge(15));