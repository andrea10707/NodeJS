#!/usr/bin/env node

// Otteniamo gli argomenti passati dopo "node calc.js"
const args = process.argv.slice(2);

// Verifica che siano presenti 3 argomenti: numero1, operazione, numero2
if (args.length !== 3) {
  console.error("Uso: node calc.js <num1> <operazione> <num2>");
  console.error("Esempio: node calc.js 5 add 3");
  process.exit(1);
}

const [num1Str, operation, num2Str] = args;

const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Errore: i primi e ultimi argomenti devono essere numeri validi.");
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
  case "+":
    result = num1 + num2;
    break;
  case "sub":
  case "-":
    result = num1 - num2;
    break;
  case "mul":
  case "*":
    result = num1 * num2;
    break;
  case "div":
  case "/":
    if (num2 === 0) {
      console.error("Errore: divisione per zero non consentita.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error(`Operazione non riconosciuta: ${operation}`);
    console.error("Operazioni disponibili: add (+), sub (-), mul (*), div (/)");
    process.exit(1);
}

console.log(`Risultato: ${result}`);

