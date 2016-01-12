/**
 * Created by FeNiX on 12-Jan-16.
 */
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
var questions = [
    "What's your name?",
    "How old are you?",
    "How do you like to be called on the internet?"
];
var answers = [];
var i = 0;
//do the first question
rl.setPrompt(questions[i]+"> ");
rl.prompt();
rl.on("line", function(line){
    "use strict";
    //read the answer
    answers[i] = line;
    i++;
    //check if done, else continue asking
    if (i == questions.length) {
        rl.close();
        console.log("Hello "+answers[0]+", you are "+answers[1]+", and you like to be called "+answers[2]+".");
        process.exit();
    } else {
        rl.setPrompt(questions[i]+"> ");
        rl.prompt();
    }
});