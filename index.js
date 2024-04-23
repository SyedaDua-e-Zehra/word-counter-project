import inquirer from "inquirer";
// declare all const  "answer" assingn in inquirer.prompt 
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);
const words = answers.sentence.trim().split(" ");
// print array of word in console
console.log(words);
// print the word counter of the sentence to the console
console.log(`Your sentence wordcount is ${words.length}`);
