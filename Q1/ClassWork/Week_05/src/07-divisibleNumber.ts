// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

import * as readlineSync from "readline-sync";

function suggestClothing(temperature: number): string {
  if (temperature < 10) {
    return "It's very cold. Please wear heavy winter clothes.";
  } else if (temperature >= 10 && temperature < 20) {
    return "It's cold. Consider wearing a jacket or sweater.";
  } else if (temperature >= 20 && temperature < 30) {
    return "It's cool. A light jacket or long sleeves may be suitable.";
  } else {
    return "It's warm. You can wear light and comfortable clothes.";
  }
}

// Get user input
const userTemperature: number = parseFloat(
  readlineSync.question("Enter the temperature in Celsius: ")
);

const clothingAdvice: string = suggestClothing(userTemperature);
console.log(clothingAdvice);
