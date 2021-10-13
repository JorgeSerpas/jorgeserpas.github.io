let temp1_celsius = 30
let temp1_convert = temp1_celsius*9/5+32;
console.log(`It's getting colder! Lets cover the temperature here, ${temp1_celsius}°C is ${temp1_convert}°F`);

let temp2_fahrenheight = 86;
let temp2_convert = (temp2_fahrenheight - 32)*5/9;
console.log(`It's getting colder! Let's cover the temperature here, ${temp2_fahrenheight}°F is ${temp2_convert}°C`);

let johnHeight = 1.95;
let johnWeight = 92;
let lucasHeight = 1.69;
let lucasWeight = 78;

let johnBMI = johnWeight / johnHeight * 2;
let lucasBMI = lucasWeight / lucasHeight * 2;

let lucasHigherBMI = lucasBMI > johnBMI;
let johnHigherBMI = johnBMI > lucasBMI;

johnBMI = johnBMI.toFixed(2)
lucasBMI = lucasBMI.toFixed(2)

if (lucasHigherBMI == true) {
    console.log(`Lucas' BMI (${lucasBMI}) is higher thans Johns. (${johnBMI}) BMI`);
}
else if (johnHigherBMI == true) {
    console.log(`John's BMI (${johnBMI}) is higher than Lucas'. (${lucasBMI}) BMI`);
}
else {
    console.log(`Both John and Lucas have the same BMI.`);
}
