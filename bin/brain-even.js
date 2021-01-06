#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askName, getName } from './cli.js';

const MIN_CORRECT_ANSWERS = 3;

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

const isEven = (number) => number % 2 === 0;

console.log('Welcome to the Brain Games!');
askName();
const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswers = 0;
while (correctAnswers < MIN_CORRECT_ANSWERS) {
  const random = getRandomInt();
  const correctAnswer = isEven(random) ? 'yes' : 'no';
  console.log(`Question: ${random}`);
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
