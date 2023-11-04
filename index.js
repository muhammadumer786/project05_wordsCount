#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let wordCount = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: chalk.blue("enter your text here to count words: "),
        validate: (ans) => {
            if (!ans) {
                return chalk.green("please enter here your text to count words: ");
            }
            else {
                return true;
            }
        }
    }
]);
let words = wordCount.sentence.trim().split(" ");
// console.log(words);
console.log(chalk.yellow(`your words are : ${words.length}`));
