const fs = require("fs");

// fetch the file names inside the directory
// let files = fs.readdirSync("./");

// console.log(files);

let readFile = fs.readFileSync("./readline.js","utf8");

console.log(readFile);