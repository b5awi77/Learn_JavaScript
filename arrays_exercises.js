// 1..
let numbers =[7,3,10,1,11];

let max=numbers[0];

 for (let i=1; i<numbers.length; i++) {
    if (max < numbers[i]) {

        max=numbers[i];
    }
 }
 console.log(max);
 

// 2..
 function sumArray(arr) {
  let sum = 0;

  for (let i=0; i<arr.length; i++) {

      sum +=arr[i];
  }
  return sum;
}
 console.log(sumArray([1,2,3,4]));
 

// 3..
let nums =[1,2,3,4,5,6];

for (let i=0; i<nums.length; i++) {
    if (nums[i] % 2 === 0) {
       console.log(nums[i]);
    } 
}