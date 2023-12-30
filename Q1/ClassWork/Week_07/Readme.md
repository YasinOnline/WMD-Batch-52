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

