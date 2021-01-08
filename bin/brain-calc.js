#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askName, getName } from './cli.js';

const MIN_CORRECT_ANSWERS = 3;
const OPERATORS = ['+', '-', '*'];

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

console.log('Welcome to the Brain Games!');
askName();
const name = getName();
console.log('What is the result of the expression?');
let correctAnswers = 0;
while (correctAnswers < MIN_CORRECT_ANSWERS) {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operator = OPERATORS[getRandomInt(2)];
  const expression = `${number1} ${operator} ${number2}`;
  // TODO: change eval to func
  const correctAnswer = String(eval(expression));
  console.log(`Question: ${expression}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
}
console.log(`Congratulations, ${name}!`);
process.exit();
