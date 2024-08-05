#!usr/bin/env node
import { input, select } from "@inquirer/prompts";
console.log("\n\t\t Welcome to the Personality test!\n");
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    userInput(input) {
        if (input == "1") {
            this.personality = "Extrovert";
        }
        else if (input == "2") {
            this.personality = "Introvert";
        }
        else {
            this.personality = "Mystery";
        }
    }
    get Personality() {
        return this.personality;
    }
}
const name = await input({
    message: "What is your name?",
});
class Main {
    async main() {
        let person = new Person();
        let input = await select({
            message: "Choose your personality type",
            choices: [
                { name: "If you like to talk to others.", value: "1" },
                { name: "If you would rather keep it yourelf.", value: "2" },
            ],
        });
        person.userInput(input);
        console.log(`Your name is ${name} and your personality type is ${person.Personality}.`);
    }
}
const myObj = new Main();
myObj.main();
