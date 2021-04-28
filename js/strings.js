//STEP 1
// let name = prompt("Enter your name:");
// alert(`Your name is ${name.length} characters long.`);

//STEP 2
// let name = prompt("Enter your name:");
// let index = Math.floor(prompt("Enter a number position of a letter in your name:"));
// alert(`The letter at index ${index} is ${name.charAt(index)}.`);

//STEP 3
// let first = prompt("Enter your first name:");
// let last = prompt("Enter your last name:");
// alert(`Your name is ${first.concat(' ').concat(last)}.`);

//STEP 4
// let str = "The quick brown fox jumps over the lazy dog";
// alert(`The index of 'fox' is ${str.indexOf('fox')}.`);

//STEP 5
// let str = "The quick brown fox jumps over the lazy dog";
// alert(`The last index of 'fox' is ${str.lastIndexOf('fox')}.`);


//STEP 6
// let str = "The quick brown fox jumps over the lazy dog";
// let name = prompt("Enter your full name:");
// alert(`The new string is: ${str.replace('the lazy dog', name)}.`);

//STEP 7
// let str = "The quick brown fox jumps over the lazy dog";
// let word = prompt("Enter a word:");
// const regEscape = (str) => {            //escapes any special character user enters so regEx doesn't get altered
//     return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
// }

// word = regEscape(word);

// let reg = new RegExp(`${word}`, "g");

// alert(`This word appears at position(s): ${str.search(reg)}.`);


//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = old_string.slice(-8);
// alert(new_string.toUpperCase());

//STEP 9
// let str = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// alert(str.trim().toLowerCase());

//STEP 10
let err = "the quick brown fox jumps over the lazy dog";
alert(err.replace(/t/i, 'T'));