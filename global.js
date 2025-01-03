
/* below code used to get the (folder or directory) name and file name from our current location */
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));


for(let key in global) {
    // console.log(key);

    /* results */
    // clearImmediate
    // setImmediate
    // clearInterval
    // clearTimeout
    // setInterval
    // setTimeout
    // queueMicrotask
    // structuredClone
    // atob
    // btoa
    // performance
    // fetch
    // crypto
    // navigator
}
/* contains 2 elements of array. index - 1 => node path , index - 2 => current file path  */
// console.log(process.argv);

/* standard input and output to make interact with the console */

const questions = [
    "What is your name?",
    "Are you a developer?",
    "What is your preferred programming language?"
];

let answers = [];

const ask = (index) => {
    process.stdout.write(`\n \n \n ${questions[index]}`);
    process.stdout.write(` > `);
}

ask(answers.length);

process.stdin.on("data", (data) => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    process.stdout.write(`\n \n \n`);
    process.stdout.write(`Thanks for your answers @ ${answers[0]}`);
});