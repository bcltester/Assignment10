//STEP 1
// let num = prompt("Enter a number:");
// console.log(Math.abs(num));

//STEP 2
// let num = Math.ceil(Number(prompt("Enter a number:")));
// console.log(num);

//STEP 3
// let num = Math.floor(Number(prompt("Enter a number:")));
// console.log(num);

//STEP 4  //**Find out how Zak did this - can it be done without an array??
// let nums = prompt("Enter a list of 5 numbers, with commas separating them:", "Example: 1,2,3,4,5").trim();
// let numsArr = nums.split(",");
// for (let num in numsArr) {
//     numsArr[num] = Number(numsArr[num]);
// }
// numsArr.sort(function(a,b) {return b-a});

// console.log(`Largest number is ${numsArr[0]}.\nSmallest number is ${numsArr[numsArr.length-1]}.`);


//STEP 5
let input = +prompt("Enter a number:"); //+ converts to a number
console.log(Math.sqrt(input));