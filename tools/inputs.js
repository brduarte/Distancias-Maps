const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

async function inputText(label) {

    const response = await prompt({
        type: 'input',
        name: 'value',
        message: label
    });

    return response.value;

}

async function inputList(label, options = []) {

    const response = await prompt({
        type: 'list',
        name: 'value',
        message: label,
        choices: options
    });

    return response.value;

}

module.exports = {
    inputText,
    inputList
};