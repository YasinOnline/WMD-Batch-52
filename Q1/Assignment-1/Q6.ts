/*

Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

*/

// Storing a person's name with whitespace characters
let personNameWithWhitespace: string = "\t  \nMuhammad Yasin \t\n";

// Printing the name with whitespace
console.log(`Name with Whitespace: "${personNameWithWhitespace}"`);

// Stripping whitespace from the name
let strippedName: string = personNameWithWhitespace.trim();

// Printing the name after stripping whitespace
console.log(`Stripped Name: "${strippedName}"`);

/*
The person's name is stored in the variable personNameWithWhitespace with a combination of "\t" and "\n" whitespace characters. The original name is printed first, and then the trim() function is used to remove leading and trailing whitespace, and the stripped name is printed.
*/
