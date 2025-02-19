// app.js
import { welcomeUser, celsiusToFahrenheit, factorial, getRandomNumber } from './utilities.js';

// Test the functions
welcomeUser("Ayush", "Patel");

console.log(`30°C in Fahrenheit: ${celsiusToFahrenheit(30)}`);
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Random number between 1 and 10: ${getRandomNumber(1, 10)}`);
