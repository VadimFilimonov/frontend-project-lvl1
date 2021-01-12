import engine from '../index.js';
import getRandomInt from '../utilities.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return { question, correctAnswer };
};

export default () => engine(game, description);
