/*
console.log("Hello I am trying my 1st Javascript Project")
// i dont see the value 7 in console but when i press total the value is visible
let total = 3 + 4;
*/
/*
// trying if cases
let p = Math.random();
console.log("Before Condition");
if(p < 0.5){
    console.log("Number is less than 0.5");
    console.log(random);
}
console.log("After Condition");
if(p > 0.5){
    console.log("Number is greater than 0.5");
    console.log(random);
}

*/

/*
// Trying if-else if-else
let p = prompt("Enter a day");


if (p === "Thursday") {
  console.log("Thursday");
} else if (p === "Wednesday") {
  console.log("Wednesday");
} else if (p === "Friday") {
  console.log("Friday");
} else {
  console.log("No Days Remaining");
}
*/

/*
// Conditions
// -> more than 6 characters
// -> can't contain space
const pass = prompt("Enter Password");
if(pass.length >= 6){
    if(pass.indexOf(" ") === -1){
        console.log("Valid Password");
    }else{
        console.log("Contains a space");
    }
}
else{
    console.log("More than 6 characters");
}

*/

//Switch Cases
const day = prompt("Enter a day(Number)");
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Friday");
    break;
  case 4:
    console.log("Sunday");
    break;
default:
    console.log("A Day");
}
