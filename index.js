#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon('Lets Start Calculation!');
    await sleep();
    rainbowTitle.stop();
    console.log(`                     _____________________
                    |  _________________  |
                    | |                 | |
                    | |_________________| |
                    |  ___ ___ ___   ___  |
                    | | 7 | 8 | 9 | | + | |
                    | |___|___|___| |___| |
                    | | 4 | 5 | 6 | | - | |
                    | |___|___|___| |___| |
                    | | 1 | 2 | 3 | | x | |
                    | |___|___|___| |___| |
                    | | . | 0 | = | | / | |
                    | |___|___|___| |___| |
                    |_____________________|

                 _________________________________
                | 𝓒𝓪𝓵𝓬𝓾𝓵𝓪𝓽𝓸𝓻 𝓑𝔂 𝓐𝓱𝓶𝓮𝓭 𝓡𝓪𝔃𝓪 𝓢𝓱𝓪𝓲𝓴𝓱 |
                |_________________________________|
    `);
}
await welcome();
async function askQuestion() {
    var answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "Operator",
            message: "Which type of calculation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2:",
        }
    ]);
    // Use user feedback for... whatever!!
    if (answers.Operator == "Addition") {
        console.log(chalk.bgGreen(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.Operator == "Subtraction") {
        console.log(chalk.bgGreen(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.Operator == "Multiplication") {
        console.log(chalk.bgGreen(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.Operator == "Division") {
        console.log(chalk.bgGreen(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
;
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue? Press Y or N: "
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'YES' || again.restart == 'yes');
}
startAgain();
