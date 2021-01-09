import readlineSync from 'readline-sync';

const OPERATORS = ['+', '-', '*'];

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

export const description = () => 'What is the result of the expression?';

export default () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operator = OPERATORS[getRandomInt(3)];
  const expression = `${number1} ${operator} ${number2}`;
  // TODO: change eval to func
  const correctAnswer = String(eval(expression));
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    const error = { userAnswer, correctAnswer };
    throw error;
  }
};
