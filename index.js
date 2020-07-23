let age = prompt("Enter your age");
console.log(age);
let name = prompt("who are you");
let operator = prompt("Determine");
console.log(name);

let Child = parseInt(prompt("< 2"));
let Teenager = parseInt(prompt("12 > 18"));
let Adult = parseInt(prompt("18 > 60"));
let seniorCitizen = parseInt(prompt("60 > 100"));

if (operator == "Determine") {
  console.log(child, teenager, adult, siniorCitizen);
} else if (0 < 2) {
  console.log("child");
} else if (12 > 18) {
  console.log("Teenager");
} else if (18 > 60) {
  console.log("Adult");
} else if (60 > 100) {
  console.log("seniorCitizen");
}

let number1 = prompt("Enter the number");
let number2 = prompt("Enter the number");
let number3 = prompt("Enter the number");
let number4 = prompt("$Enter the number");
let number5 = prompt("Enter the number");
let number6 = prompt("Enter the number");
let number7 = prompt("Enter the number");
let number8 = prompt("Enter the number");
let number9 = prompt("Enter the number");
operator = prompt("Enter operator");

if ((optNumber = number1)) {
  console.log("!");
} else if ((optNumber = number2)) {
  console.log("@");
} else if (optNumber === number3) {
  console.log("#");
} else if (optNumber === number4) {
  console.log("$");
} else if (optNumber === number5) {
  console.log("%");
} else if (optNumber === number6) {
  console.log("^");
} else if (optNumber === number7) {
  console.log("&");
} else if (optNumber === number8) {
  console.log("*");
} else if (optNumber === number9) {
  console.log("()");
} else {
  console.log("cannot be found");
}

let numbers = prompt("Enter three-digit number");
let sameNumber = prompt("Ask if it is same number");

if (257) {
  console.log(sameNumber);
} else if (251) {
  console.log(diferentNumber);
}

let leapYear = parseInt(prompt("Enter the leap year"));
let notLeapYear = parseInt(prompt("Enter not a leap year"));
operator = prompt("enter operator");

if (operator === "400") {
  console.log("leapYear");
} else if (operator === "4") {
  console.log(leapYear);
} else {
  console.log("notLeapYear");
}

let palindrome = parseInt(prompt("Enter number"));
let notPalindrome = parseInt(prompt("Enter the numbers"));
operator = prompt("Enter operator");

if (operator == "25852") {
  console.log("palindrome");
} else if (operator == "36963") {
  console.log("palindrome");
} else {
  console.log("notPalindrome");
}

const euroRate = 0.88;
const uahRate = 27.59;
const aznRate = 1.7;
let dollarsAmount = prompt("Enter dollarsAmount");
dollarsRate = 100;
let currency = prompt("Enter currency");

Euro = euroRate * dollarsRate;
Uah = uahRate * dollarsRate;
Azn = aznRate * dollarsRate;
console.log(Euro, "Euro");
console.log(Uah, "Uah");
console.log(Azn, "Azn");
console.log(currency);

let ammountA = prompt("Enter amount (3%)");
let ammountB = prompt("Enter amount(5%)");
let ammountC = prompt("Enter amount(7%)");
operator = prompt("Enter Operation");

let withdrawalAmountA = 200 > 300 * 0.03;
let withdrawalAmontB = 300 > 500 * 0.05;
let withdrawalAmountC = 500 > 5000 * 0.07;

if (operator == 200 > 300) {
  console.log("withdrawalAmountA * 0.03");
} else if (operator == 300 > 500) {
  console.log("withdrawalAmounB * 0.05");
} else {
  console.log("withdrawalAmountC * 0.07");
}

let circumference = prompt("diameter * 3.14");
let perimeter = prompt("lenght * 4");
operator = prompt("Enter operator");
const diameter = 20;
const length = 20;
console.log((circumference = diameter * 3.14), "circumference");
console.log((perimeter = length * 4), "perimeter");

console.log(perimeter >= circumference);

const question1 = prompt(
  ("question: names?",
  "answers:'a: jay', 'b: sam', 'c: ken'",
  "correctAnswe: jay")
);
const question2 = prompt(
  ("question: age?",
  "answers: ('a: 20', 'b: 25', 'c: 30')",
  "correctAnswer: 25")
);
const question3 = prompt(
  ("question: job?",
  "answers: ('a: nurse', 'b: doctor', 'c: maid')",
  "correctAnswer: doctor")
);

operator = prompt("Enter operator");

if (question1 == "jay" && "ken" && "sam") {
  console.log(question1, +"2");
} else if (question2 == "25") {
  console.log(question2, +"2");
} else if (question3 == "doctor") {
  console.log(question3, +"2");
} else {
  console.log("wrong answer");
}

// let dateObj = new Date();
// let month = prompt("0" + (dateObj.getMonth + 1).slice(-2));
// let date = prompt("0" + dateObj.getDate.slice(-2));
// let year = prompt(dateObj.getFullYear);
// let shortDate = prompt(year + "/" + month + "/" + date);
// alert(shortDate);

// console.log("date, month, year");
// console.log(shortDate);

dateObj = new Date();

let myDate =
  dateObj.getUTCFullYear() +
  "/" +
  (dateObj.getMonth() + 1) +
  "/" +
  dateObj.getUTCDate();

console.log(myDate);
