let fruits = ["apple", "banana", "orange"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

fruits.push("mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

for (let i= 0; i < fruits.length; i++) {
    console.log(i + ": " + fruits[i]);
}
let numbers = [5, 10, 15];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum: " + sum);