
console.log(2 + 10 - 1);
console.log(2 + 10);
console.log(2 + 1);
console.log(2 + 1);
console.log("Hello", 1);

//values
// data types: 3 most important ones: string, number, boolean

// symbol bigint



// variables, A-Z, Numbers, $
// camelCase, snake_case
// case sensitive

const yearNew = '1996';

let firstName = "John";

firstName = "Mark"

const PI = 3.14

const age = 1996;

let ageJohn = "";

console.log(typeof ageJohn);

let ageMark
console.log(typeof ageMark);

let checkValue = true;
console.log(typeof {});
console.log(typeof 'John')

console.log(age);
console.log(firstName);
console.log(firstName, yearNew, PI);






// operator
// + - / *
const resultA = 2 + 10 - 2
console.log(resultA);

const resultB = 2 + 10 + 'John'
console.log(resultB);

console.log(typeof resultB);

const resultC = 2 - 10 - 'John'
console.log(resultC);
console.log(typeof resultC);

const resultD = 2 * 10 + 'Mark' + 100 / 2;

console.log(resultD);


let x = 10;

x = x + 1;
// same as
x += 1;
x -= 1;
x /=2;

x ++;


console.log(x);

// always assign the value to const variable right away when you declare it
const bestFriend='John'
const secondFriendName='Mark'

const birthYearJohn=1996;
const birthYearMark=1998;

// console.log(2021 - birthYearJohn > 2021 - birthYearMark);

const currentYear=2021

const johnOlder = currentYear - birthYearJohn > currentYear - birthYearMark

console.log(johnOlder);
let markOlder;

let y, z;

console.log(typeof y, typeof z, johnOlder, currentYear, 100 + 1);

console.log("Checking datatypeof y:" + typeof y, typeof z, johnOlder, currentYear, 100 + 1);

let result = `Value of y: ${y} , Checking datatype of \n\ x: ${markOlder}, the current year is: ${currentYear}, the sum of 100 and 1 is ${100 + 1}`

console.log(result);

// BMI

x++;

console.log(x);
x++;
console.log(x);

const retireAge = 65
let resultNew = `Value of y: ${y} , Checking datatype of x: ${markOlder}, the current year is: ${currentYear}, the sum of 100 and 1 is ${retireAge - (currentYear - birthYearJohn)} years till John retires`

console.log(resultNew);

const newVariable = 100;

// Loose mode
console.log(newVariable == '100');
// Strict mode
console.log(newVariable === 100);

// Comparison operatiors
// >=
// <=
// >
// <
const ageNew = 0;

console.log(ageNew >= 16);

if (ageNew >= 16) {
  console.log(`Congrats! You are old enough to drive!`);
}

else if (ageNew === 16) {
    console.log(`Congrats! You can start driving NOW!`);
}

else {
  console.log(`You can not drive!`);
}



// Practice

const ageDrink = prompt(`Enter your age`)

console.log(ageDrink >= 21);

if (ageDrink >= 21) {
  console.log(`Congrats! You can drink alcohol!`);
}

else if (ageDrink === 21) {
  console.log(`Congrats! You can start drinking right this second!`);
}

else {
  console.log(`You can not drink homie :( gotta wait another ${21 - ageDrink} years king`);
}
// ?
let pageText=document.querySelector('h1').textContent;

pageText=`You can not drink homie :( gotta wait another ${21 - ageDrink} years king`

console.log(typeof ageDrink);
console.log(String(2021), 2021);


const curreYear = '2021';
console.log(curreYear - 1996);
console.log(32 + Number(curreYear));


console.log('I"m 24 years old');
console.log('I\'m 24 years old');
console.log('I\'m' + " " + 24 + 'years old');


console.log(111 * '2');
console.log('111' * '2');
console.log('111' / '2');
console.log('111' > '2');
// x++
// x--

if (ageNew > 0) { 
  console.log('Got your age')
}
  else if (ageNew === 0) {
  console.log('Got your age, and you are a newborn')
}
else { 
  console.log('We didnt get your age')
}

// 0 '' undefined. null, NaN



console.log(ageNew && 2);

const ageMark2 = true;
const visionMark2 = false;
console.log(ageMark2 || visionMark2 && tiredOrNot);
console.log(!visionMark2);

// October 4th class
// Game:
// * 100-110 Congrats! You got the correct number!
// 180-190 Good job, the number also looks valid!
// other wise: You lose the game :( 

let numInput = prompt("Enter a number")
numInput = parseInt(numInput)
if (numInput >= 100 && numInput <= 110) {
  let text = `Congrats! You got the correct number: ${numInput}`;
  console.log(text);
}
else if (numInput >= 180 && numInput <= 190) {
  let text = `Good job, the number looks valid: ${numInput}`;
  console.log(text);
}
else {
  let text = `You lose the game, your number: ${numInput}`;
  console.log(text);
}

// Teachers example
// console.log(typeof userInput)
// console.log(NaN > 2);
// console.log(Number('Some Text'));

const userInput = Number (prompt("Enter a number here to start the game!"))
if (userInput > 100 && userInput < 110) {
  console.log("Congrats! You got the correct number!");
}
else if (userInput > 180 && userInput < 190) {
  console.log("Good job, the number looks good!");
}
else {
  console.log("You lose the game!!!!!!!!!!");
}

// Switch

const cup = "Tea";

switch (cup) {
  case "coffee":
    console.log("I like coffee");
    console.log("Drinking coffee is healthy");
  case 'Tea':
    console.log("Tea is great!")
    break;
  case 'Bagel':
    console.log("Bagels are good for breakfast");
  default:
    console.log("No food");

}



// tenary operator

userInput > 100 ? console.log('good') : console.log('wrong number')


// or write this way:
const resultN = userInput > 100 ? 'good' : 'wrong number';
console.log(resultN);


console.log(`The number you guessed is ${userInput > 100 ? 'good' : 'wrong number'}`);



if (userInput > 21) console.log(`you can drink wine!`);

let gotNumber;
if (userInput) gotNumber = true;
if (gotNumber) console.log('Got your age');




function show() {
    console.log("Amazing Day!.......");
}

show();
show();
show();
show();
show();
show();
show();
show();
show();



function calBMI(mass, height) {
    const valueBMI = mass / (height * height);
    return valueBMI;
}


//  console.log(calBMI(userInput, 100));
// or 
const value1 = calBMI(userInput, 100);
console.log(value1);


// Practice:
// create a function called 
// heatFood(g, s, mode)

// Call the function, it will do
//     1. log the user's arguments to console;
// 2. log the message":" Your ? grams food will be heated for ? seconds under ? mode" to console;


function heatFood(weight, time, mode) {
    console.log(`Weight: ${weight}(grams), Seconds: ${time}, Mode: ${mode}`);

    console.log(`Your food of ${weight} grams will be heated for ${time} seconds in ${mode} mode.`);
}

heatFood(25, 60, "defrost");


// function headDiner(weight, time, mode) {
//     console.log(`${weight}, ${time} ,${mode}`);
//     const readToEat = `Your${weight}grams food will be headted for ${time} seconds under ${mode} mode`

//     return readToEat;
// }

// console.log(headDiner(userInput, 120, 'warmup'));

function timesGuestNum(food) {
    return food * 12;
}


function headDiner(weight, time, mode) {
    // console.log(`${weight}, ${time} ,${mode}`);

    const weightNew = timesGuestNum(weight);
    const timeNew = timesGuestNum(time);

    const readToEat = `Your${weightNew} grams food will be headted for ${timeNew} seconds under ${mode} mode`

    return readToEat;
}
console.log(headDiner(userInput, 120, 'warmup'))


