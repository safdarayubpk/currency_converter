#!/usr/bin/env node
// Currency Converter in TypeScript
// Importing inquirer library
import inquirer from "inquirer";
// Object containing currency exchange rates relative to USD (base currency)
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
// Prompting the user for input using inquirer
const userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: Object.keys(currency), // Dynamically generating currency choices from the keys of the currency object
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: Object.keys(currency), // Dynamically generating currency choices from the keys of the currency object
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    },
]);
// Extracting exchange rates for the currencies selected by the user
const fromAmount = currency[userAnswer.from] || 1; // Default to 1 if the currency is not found
const amount = userAnswer.amount || 0; // Default to 0 if no amount is provided
const toAmount = currency[userAnswer.to] || 1; // Default to 1 if the currency is not found
// Converting the amount from 'from' currency to 'to' currency
const convertedAmount = (amount / fromAmount) * toAmount;
// Outputting the converted amount
console.log(convertedAmount);
