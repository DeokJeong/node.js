const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;

rl.on('line', (input) => {
    console.log(`Recived : ${input+input}`);
    count += 1;
    if (count === 2) {
        rl.close();
    }
});