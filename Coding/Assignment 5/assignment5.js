// Part A
const netsScore1 = 96;

const netsScore2 = 108;

const netsScore3 = 89;

const netsAverage = (netsScore1 + netsScore2 + netsScore3) / 3

console.log(`${netsAverage} Is the average score for The Brooklyn Nets`);


const knicksScore1 = 88;

const knicksScore2 = 91;

const knicksScore3 = 110;

const knicksAverage = (knicksScore1 + knicksScore2 + knicksScore3) / 3

console.log(`${knicksAverage} Is the average score for The New York Knicks`);


if (netsAverage > knicksAverage) {
    console.log(`Nets win the series!`);
}
else if (netsAverage === knicksAverage) {
    console.log(`It is a draw`);
}
else {
    console.log(`Knicks win the series!`)
}







// Number 3
const nets1 = 96;

const knicks1 = 109;

if (knicks1 > nets1) {
    console.log(`Knicks win game 1!`);
}
if (nets1 > knicks1) {
    console.log(`Nets win game 1!`);
}
else if (knicks1 >= 100 && knicks1 > nets1) {
    console.log(`Knicks win game 1!`);
}
else if (nets1 >= 100 && nets1 > knicks1) {
    console.log(`Nets win game 1!`);
}
else {
    console.log(`Neither teams wins game 1.`);
}

const nets2 = 112;

const knicks2 = 95;

if (knicks2 > nets2) {
    console.log(`Knicks win game 2!`);
}
if (nets2 > knicks2) {
    console.log(`Nets wins game 2!`);
}
else if (knicks2 >= 100 && knicks2 > nets2) {
    console.log(`Knicks win game 2!`);
}
else if (nets2 >= 100 && nets2 > knicks2) {
    console.log(`Nets win game 2!`);
}
else {
    console.log(`Neither team wins game 2.`);
}

const nets3 = 101;

const knicks3 = 123;

if (knicks3 > nets3) {
    console.log(`Knicks win game 3!`);
}
if (nets3 > knicks3) {
    console.log(`Nets win game 3!`);
}
else if (knicks3 >= 100 && knicks3 > nets3) {
    console.log(`Knicks win game 3!`);
}
else if (nets3 >= 100 && nets3 > knicks3) {
    console.log(`Nets win game 3!`);
}
else {
    console.log(`Neither team wins game 3.`);
}









// Number 4
const nets4 = 97;

const knicks4 = 88;

if (nets4 > knicks4) {
    console.log(`Nets win game 1!`);
}
if (knicks4 > nets4) {
    console.log(`Knicks win game 1!`);
}
else if (nets4 >= 100 && nets4 === knicks4) {
    console.log(`It's a draw!`);
}
else if (knicks4 >= 100 && knicks4 === nets4) {
    console.log(`It's a draw!`);
}
else {
    console.log(`Neither team wins.`);
}



const nets5 = 112;

const knicks5 = 95;

if (nets5 > knicks5) {
    console.log(`Nets win game 2!`);
}
if (knicks5 > nets5) {
    console.log(`Knicks win game 2!`);
}
else if (nets5 >= 100 && nets5 === knicks5) {
    console.log(`It's a draw.`);
}
else if (knicks5 >= 100 && knicks5 === nets5) {
    console.log(`It's a draw.`);
}
else {
    console.log(`Neither team wins.`);
}



const nets6 = 101;

const knicks6 = 123;

if (nets6 > knicks6) {
    console.log(`Nets win game 3!`);
}
if (knicks6 > nets6) {
    console.log(`Knicks win game 3!`);
}
else if (nets6 >= 100 && nets6 === knicks6) {
    console.log(`It's a draw.`);
}
else if (knicks6 >= 100 && knicks6 === nets6) {
    console.log(`It's a draw.`);
}
else {
    console.log(`Neither team wins.`);
}








// Part B
const bill = 275;

const tipPercent = 15 / 100;

const tipResult = bill * tipPercent

console.log(`The bill was ${bill}, the tip was ${tipResult} and the total value was ${bill + tipResult}`);


const bill2 = 28;

const tipPercent2 = 20 / 100;

const tipResult2 = bill2 * tipPercent2

console.log(`The bill was ${bill2}, the tip was ${tipResult2} and the total value was ${bill2 + tipResult2}`);


const bill3 = 430;

const tipPercent3 = 20 / 100;

const tipResult3 = bill3 * tipPercent3

console.log(`The bill was ${bill3}, the tip was ${tipResult3} and the total value was ${bill3 + tipResult3}`);











// Part C
let temp1_celsius = 30
let temp1_convert = temp1_celsius * 9 / 5 + 32;
console.log(`${temp1_celsius}°C is ${temp1_convert}°F`);

let temp2_fahrenheight = 86;
let temp2_convert = (temp2_fahrenheight - 32) * 5 / 9;
console.log(`${temp2_fahrenheight}°F is ${temp2_convert}°C`);
