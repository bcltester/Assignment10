//STEP 1
const alpha = (str) => {
    let sorted = [];
    for (let letter of str) {
        sorted.push(letter);
    }
    // console.log(sorted);
    return sorted.sort().join('');
}
console.log(alpha("webmaster"));

// I realized after the fact that I could have created the array from string using the .split("") method, or Array.from(str)

//STEP 2
const capital = (str) => {
    let arr = str.split(" ");
    // for (let i=0; i<arr.length; i++) {
    //     arr[i] = arr[i][0].toUpperCase().concat(arr[i].slice(1));
    // }
    arr.forEach((currentValue, index, array) => {
        array[index] = currentValue[0].toUpperCase() + currentValue.slice(1);
    });
    return arr.join(" ");
};
console.log(capital("the quick brown fox jumped over the lazy dog."));


//STEP 3
const vowels = (str) => {
    return str.match(/[aeiou]/g).length;    
};

console.log(vowels("The quick brown fox"));

//STEP 4
const ranStr = (len) => {
    let arr = [];
    for (let i =0; i < len; i++) {
        let rand = Math.ceil(Math.random()*90) + 32;
        // console.log(rand);
        arr[i] = String.fromCharCode(rand);
    }
    return arr.join("");
}
console.log(ranStr(8));

//STEP 5
const longestCountryName = (arr) => {
    let len = 0;
    let longestCountry = "";
    for (let country of arr) {
        if (country.length > len) {
            len = country.length;
            longestCountry = country;
        } else if (country.length === len) {        // In the case of more than one country with the same name length, it will take the one that comes first in the alphabet. 
            let temp = [];
            temp.push(country);
            temp.push(longestCountry);
            longestCountry = temp.sort()[0];
        }
    }
    return longestCountry;
}
console.log(longestCountryName(["Australia", "Germany", "Havarthan", "Mali", "Checklona", "China", "Albernath", "Brazil", "Qualifora", "Argentina", "Reddingia", "Colombia", "Tanzania", "Sri Lanka", "Australia", "Singapore"])); //included some fake country names to confirm behavior when multiple countries tie for longest name (9 char)