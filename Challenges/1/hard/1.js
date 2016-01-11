const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
var c = 101; //ceiling
var f = 1; //floor
var r = false; //result of the asker function
var num = null;
function asker() {
    return Math.floor( (c + f)/2 );
}
function check(answer) {
    switch (answer) {
        case "l": //lower
            c = num;
            return true;
        case "h": //higher
            f = num;
            return true;
        case "y": //Win
            console.log("Good Game");
            return false;
        default:
            return true;
    }
}
num  = asker();
rl.setPrompt("Is this your number: ["+num+"]? (y)es, No? Is it (h)igher or is it (l)ower?\n");
rl.prompt();
rl.on('line', (line) => {
    var answer = line.trim();
    r = check(answer);
    if (!r) {
        process.exit(0);
    }
    num  = asker();
    rl.setPrompt("Is this your number: ["+num+"]? (y)es, No? Is it (h)igher or is it (l)ower?\n");
    rl.prompt();
});