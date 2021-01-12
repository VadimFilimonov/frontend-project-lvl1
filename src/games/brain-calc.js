import engine from '../index.js';
import getRandomInt from '../utilities.js';

const OPERATORS = ['+', '-', '*'];

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

const description = 'What is the result of the expression?';

const game = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operatorIndex = getRandomInt(3);
  const operator = OPERATORS[operatorIndex];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calcAnswer(number1, number2, operator));
  return { question, correctAnswer };
};

export default () => engine(game, description);
