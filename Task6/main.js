//assign 293 to a constant "kelvin"
const kelvin = 293;
//convert kelvin to celsius
const celsius = kelvin-273;
//convert celsius to fahrenheit
var fahrenheit = celsius*(9/5)+32;
//round off fahrenheit
var fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is "+fahrenheit+" degrees Fahrenheit");