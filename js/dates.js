const monthName = (num) => {
    switch(num) {
        case 0:
            return "January"
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
    }
};



//STEP 1
let mo = Math.floor(prompt("Enter the number of month (1-12):")) - 1;
// console.log(mo);
let d = new Date(2021, mo + 1, 0);
let lastArr = d.toString().split(" ");
// console.log(lastArr);
console.log(lastArr[2] + ' days');


//STEP 2
// let date = new Date(2021, 11, 23);
// console.log(monthName(date.getMonth()));

//STEP 3
// let date = new Date(2021, 3, 25); //3 corresponds to April
// let day = date.getDay();
// if (day === 0 || day === 6) {
//     console.log("It's a weekend.");
// } else {
//     console.log("It is a weekday.");
// }

//STEP 4
// let today = new Date();
// let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(daysOfWeek[today.getDay()-1]);



//STEP 5
// let today = new Date();
// let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(daysOfWeek[today.getDay()][0]);
