"use strict";
/*

Q 03:
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

*/
// Storing a person's name in a variable
let personNameQ3 = "MuhammaD yAsiN";
// Printing the person's name in lowercase
console.log(`Lowercase: ${personNameQ3.toLowerCase()}`);
// Printing the person's name in uppercase
console.log(`Uppercase: ${personNameQ3.toUpperCase()}`);
// Printing the person's name in title case. Function to convert a string to title case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
// Printing the person's name in title case
console.log(`Titlecase: ${toTitleCase(personNameQ3)}`);
/*

In this code:

toLowerCase() is used to convert the name to lowercase.
toUpperCase() is used to convert the name to uppercase.
For title case, this code, the toTitleCase function is used to convert the entire string to title case. The function first converts the entire string to lowercase, then splits it into an array of words, capitalizes the first letter of each word, and finally joins the words back into a string.
*/
//  First, declare a variable to store the person's name. Then, use the `toLowerCase()`, `toUpperCase()`, and `replace()` functions to print the name in different cases. Here's a sample code:
let name = "MuhammaD yAsiN";
console.log(name.toLowerCase()); // Outputs: john doe
console.log(name.toUpperCase()); // Outputs: JOHN DOE
// Convert the first character of each word to uppercase (Title Case)
let titleCaseName = name.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
console.log(titleCaseName); // Outputs: John Doe
// In this code, `replace()` function with a regular expression (`/\w\S*/g`) is used to change the first character of each word in the string to uppercase and the rest to lowercase. This will give you the name in Title Case.
