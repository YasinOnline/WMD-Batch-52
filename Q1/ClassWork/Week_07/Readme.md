# Week 07
Today's class covered these main topics:

1. step04_unions_literals
2. step05a_objects
3. step05b_object_aliased
4. step05d_nested_objects
5. step05e_intersection_types
6.step03b_native_ECMAScript_modules

You can find the class code at <https://github.com/JahanzaibTayyab/Batch-52>

For your reading assignment (marked), please refer to  <https://github.com/panaverse/learn-typescript>

Today's Session Recording
<https://youtu.be/FP9xzUX_N9Y>

Reading Assignment

1: Difference between type and interface.
2: Difference between dot notation and Square notation in objects.

## Difference Between Type and Interface

Type and interface are both ways to define the shape of an object or a function in TypeScript. However, they have some differences in syntax, usage, and capabilities. Here are some of the main differences:

- Type can also be used to define other kinds of types, such as primitives, unions, and tuples, while interface can only be used for objects and functions¹².
- Type supports the creation of a new name for a type, while interface provides a way to define the entities².
- Type can create an intersection type by combining multiple types into a single type, while interface cannot create any new intersection interface¹².
- Interface can be extended or implemented by other interfaces or classes, while type can only be extended by using the & operator¹².
- Interface allows declaration merging, which means that multiple declarations with the same name will be merged into one, while type does not allow this and will raise an error if two types have the same name¹².
- Type is more flexible and expressive, while interface is more strict and clear³⁴.

In general, interface is preferred for describing object shapes and contracts, while type is more versatile and used for a broader range of type definitions⁵. However, the choice between them depends on the preference and the situation of the developer. I hope this helps you understand the difference between type and interface in TypeScript. 😊

Source: 12/30/2023
(1) Interfaces vs Types in TypeScript - Stack Overflow. <https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript>.
(2) What is the difference between interface and type in TypeScript. <https://www.geeksforgeeks.org/what-is-the-difference-between-interface-and-type-in-typescript/>.
(3) TypeScript: What is the difference between type and interface?. <https://7.dev/typescript-what-is-the-difference-between-type-and-interface/>.
(4) Interfaces vs. Types in TypeScript: Understanding the Differences and .... <https://bluesockets.com/typescript/interfaces-vs-types/>.
(5) TypeScript Type vs. Interface: Which One Should You Use? | WM - Web Mound. <https://www.webmound.com/typescript-type-vs-interface/>.

One major difference between type and interface in TypeScript is that type can be used to define other kinds of types, such as primitives, unions, and tuples, while interface can only be used to define object and function shapes¹². For example, you can create a type alias for a string or number type, but you cannot create an interface for them.

Another difference is that type supports the creation of intersection types by using the & operator, while interface cannot create any new intersection interface¹². For example, you can combine two types into one by using type Point = PartialPointX & { y: number; }, but you cannot do the same with interface.

If you want to learn more about the differences and similarities between type and interface in TypeScript, you can check out these resources:

- [Types vs. interfaces in TypeScript - LogRocket Blog](^1^)
- [Interfaces vs Types in TypeScript - Stack Overflow](^2^)
- [Typescript: Type and Interface difference | by Faez | Dev Genius](^3^)
- [TypeScript Type vs. Interface: Which One Should You Use? | WM - Web Mound](^4^)
- [TypeScript: What is the difference between type and interface?](^5^)

Source: 12/30/2023
(1) Types vs. interfaces in TypeScript - LogRocket Blog. <https://blog.logrocket.com/types-vs-interfaces-typescript/>.
(2) Interfaces vs Types in TypeScript - Stack Overflow. <https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript>.
(3) Types vs. interfaces in TypeScript - LogRocket Blog. <https://blog.logrocket.com/types-vs-interfaces-typescript/>.
(4) Interfaces vs Types in TypeScript - Stack Overflow. <https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript>.
(5) Typescript: Type and Interface difference | by Faez | Dev Genius. <https://blog.devgenius.io/typescript-type-and-interface-difference-a9f471e0a9d2>.
(6) TypeScript Type vs. Interface: Which One Should You Use? | WM - Web Mound. <https://www.webmound.com/typescript-type-vs-interface/>.
(7) TypeScript: What is the difference between type and interface?. <https://7.dev/typescript-what-is-the-difference-between-type-and-interface/>.

## Difference between "Dot Notation" and "Square Notation" in Objects

Dot notation and square bracket notation are two ways to access or modify the properties of an object in JavaScript. They have some similarities and differences in their syntax and usage. Here are some of the main points:

- Dot notation is faster to write and clearer to read. It uses a dot (.) followed by a valid property name to access or modify the value of that property. For example, `obj.name = "Bing"` sets the name property of the obj object to "Bing".
- Square bracket notation is more flexible and expressive. It uses square brackets ([]) with an expression that evaluates to a property name inside them to access or modify the value of that property. For example, `obj["name"] = "Bing"` does the same thing as dot notation. However, square bracket notation can also use variables, expressions, or strings with special characters as property names. For example, `obj[myVar] = "Bing"` sets the property whose name is the value of myVar to "Bing".
- Dot notation can only be used with valid property names, which are identifiers that start with a letter, underscore, or dollar sign, and can contain digits. Square bracket notation can be used with any property name, even if it contains spaces, dashes, dots, or other characters that are not allowed in identifiers. For example, `obj["first-name"] = "Bing"` is valid, but `obj.first-name = "Bing"` is not.
- Dot notation is more common and preferred for accessing simple and known properties, while square bracket notation is more useful for accessing dynamic and complex properties. However, the choice between them depends on the preference and the situation of the developer.

For more information, you can check out these resources:

- [Dot Notation vs Bracket Notation for Object Properties – What's the Difference?](^1^)
- [What's the difference between the square bracket and dot notations in Python?](^2^)
- [Dot and Bracket Notation in JavaScript Object](^3^)
- [JavaScript property access: dot notation vs. brackets?](^4^)

Source: 12/30/2023
(1) Dot Notation vs Bracket Notation for Object Properties – What's the .... <https://www.freecodecamp.org/news/dot-notation-vs-square-brackets-javascript/>.
(2) What's the difference between the square bracket and dot notations in .... <https://stackoverflow.com/questions/30250282/whats-the-difference-between-the-square-bracket-and-dot-notations-in-python>.
(3) Dot and Bracket Notation in JavaScript Object - DEV Community. <https://dev.to/capscode/dot-and-bracket-notation-in-javascript-object-12ij>.
(4) JavaScript property access: dot notation vs. brackets?. <https://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets>.
(5) difference between dot notation and bracket notation in javascript. <https://stackoverflow.com/questions/20736758/difference-between-dot-notation-and-bracket-notation-in-javascript>.

Dot notation and bracket notation are similar in TypeScript as they are in JavaScript, since TypeScript is a superset of JavaScript. However, there are some additional differences and considerations when using them in TypeScript. Here are some of the main points:

- Dot notation is more type-safe and provides better code completion and refactoring support than bracket notation. TypeScript can infer the type of the property and check for any errors or typos when using dot notation. For example, `obj.name` will have the type `string` and `obj.nam` will be flagged as an error. However, bracket notation can bypass the type checking and allow any expression that evaluates to a string. For example, `obj["name"]` will have the type `any` and `obj["nam"]` will not be detected as an error¹².
- Bracket notation can be used to access properties that are not valid identifiers, such as keywords, reserved words, or symbols. For example, `obj["class"]` or `obj[Symbol.iterator]` are valid, but `obj.class` or `obj.Symbol.iterator` are not. Dot notation can only be used with valid identifiers, which are names that start with a letter, underscore, or dollar sign, and can contain digits³⁴.
- Bracket notation can be used to access properties that are computed or dynamic, such as variables, expressions, or template literals. For example, `obj[myVar]` or `obj["name" + i]` or `obj[`${key}`]` are valid, but `obj.myVar` or `obj.name + i` or `obj.${key}` are not. Dot notation can only be used with static and known properties³⁴.
- Bracket notation can be used to access properties that are optional or nullable, such as properties with a question mark (?) or properties that can be undefined or null. For example, `obj["name"]?.toUpperCase()` or `obj["name"] ?? "default"` are valid, but `obj.name?.toUpperCase()` or `obj.name ?? "default"` are not. Dot notation requires the use of parentheses to access optional or nullable properties, such as `(obj.name)?.toUpperCase()` or `(obj.name) ?? "default"` .

In general, dot notation is preferred for accessing simple and known properties, while bracket notation is more useful for accessing complex and dynamic properties. However, the choice between them depends on the preference and the situation of the developer.

For more information, you can check out these resources:

- [TypeScript: Dot Notation vs Bracket Notation](^1^)
- [TypeScript: Property Accessors](^2^)
- [TypeScript: Property Names](^3^)
- [TypeScript: Identifier Names](^4^)
- [TypeScript: Optional Chaining]
- [TypeScript: Nullish Coalescing]

Source: 12/30/2023
(1) Dot Notation vs Bracket Notation for Object Properties – What's the .... <https://www.freecodecamp.org/news/dot-notation-vs-square-brackets-javascript/>.
(2) JavaScript property access: dot notation vs. brackets?. <https://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets>.
(3) The differences between Dot Notation and Bracket Notation in ... - Medium. <https://medium.com/@maxheadway/the-differences-between-dot-notation-and-bracket-notation-in-javascript-45b07a49ebc9>.
(4) JavaScript Dot Notation vs. Bracket Notation: Which to Use When. <https://plainenglish.io/blog/javascript-dot-notation-vs-bracket-notation-which-to-use-when-e24117e44d71>.
(5) Dot Notation vs Bracket Notation for Object Properties – What's the .... <https://www.freecodecamp.org/news/dot-notation-vs-square-brackets-javascript/>.
(6) JavaScript property access: dot notation vs. brackets?. <https://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets>.
(7) The differences between Dot Notation and Bracket Notation in ... - Medium. <https://medium.com/@maxheadway/the-differences-between-dot-notation-and-bracket-notation-in-javascript-45b07a49ebc9>.
(8) JavaScript Dot Notation vs. Bracket Notation: Which to Use When. <https://plainenglish.io/blog/javascript-dot-notation-vs-bracket-notation-which-to-use-when-e24117e44d71>.
