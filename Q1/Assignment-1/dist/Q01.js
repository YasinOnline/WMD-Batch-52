"use strict";
/*

Q 01:
Install Node.js, TypeScript and VS Code on your computer.

Ans:
TypeScript is a super tool for large-scale JavaScript applications, and Node.js is a powerful environment for running JavaScript outside of the browser. Let's get start with some basic exercises.

1. **Setting up environment:**

   First, make sure Node.js and npm (Node Package Manager) are installed. You can download Node.js and npm from [https://nodejs.org](https://nodejs.org). After you installed Node.js, you can check the installed version by running `node -v` and `npm -v` in your terminal.

   Next, you'll want to install TypeScript globally on your machine. You can do this by running `npm install -g typescript` in your terminal.

2. **Hello World with TypeScript:**

   Create a new file called `hello.ts` and add the following code:

   ```typescript
   const greeting: string = "Hello World";
   console.log(greeting);
   ```

   To compile your TypeScript into JavaScript, you can use the TypeScript compiler:

   ```shell
   tsc hello.ts
   ```

   This will create a new file in your directory called `hello.js` that contains the compiled JavaScript. You can run this file using Node.js:

   ```shell
   node hello.js
   ```

3. **Creating a Simple Server with Node.js and TypeScript:**

   Create a new file called `server.ts` and add the following code:

   ```typescript
   import http from 'http';

   const server = http.createServer((request, response) => {
     response.writeHead(200, {"Content-Type": "text/plain"});
     response.end("Hello World\n");
   });

   server.listen(8000);

   console.log("Server running at http://127.0.0.1:8000/");
   ```

   You can compile and run this file in the same way as the previous example.

Let me know if these exercises help you get started and if you have any questions along the way!

*/ 
