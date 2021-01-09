import readlineSync from 'readline-sync';

const OPERATORS = ['+', '-', '*'];

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

const calcAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return number1 + number2;
  }
};

export const description = () => 'What is the result of the expression?';

export default () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operatorIndex = getRandomInt(3);
  const operator = OPERATORS[operatorIndex];
  const expression = `${number1} ${operator} ${number2}`;
  // TODO: change eval to func
  const correctAnswer = calcAnswer(number1, number2, operator);
  console.log(`Question: ${expression}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== correctAnswer) {
    const error = { userAnswer, correctAnswer };
    throw error;
  }
};
