"use strict";
/*

Q 03:
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

*/
// Storing a person's name in a variable
let personName = "MuhammaD yasiN";
// Printing the person's name in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);
// Printing the person's name in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);
// Printing the person's name in title case. Function to convert a string to title case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
// Printing the person's name in title case
console.log(`Titlecase: ${toTitleCase(personName)}`);
/*

In this code:

toLowerCase() is used to convert the name to lowercase.
toUpperCase() is used to convert the name to uppercase.
For title case, this code, the toTitleCase function is used to convert the entire string to title case. The function first converts the entire string to lowercase, then splits it into an array of words, capitalizes the first letter of each word, and finally joins the words back into a string.
*/
