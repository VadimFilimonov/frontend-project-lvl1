import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

export const description = () => 'Find the greatest common divisor of given numbers.';

export default () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  console.log(`Question: ${number1} ${number2}`);
  const correctAnswer = gcd(number1, number2);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== correctAnswer) {
    const error = { userAnswer, correctAnswer };
    throw error;
  }
};
