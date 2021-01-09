import readlineSync from 'readline-sync';

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

const isEven = (number) => number % 2 === 0;

export const description = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const random = getRandomInt();
  const correctAnswer = isEven(random) ? 'yes' : 'no';
  console.log(`Question: ${random}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    const error = { userAnswer, correctAnswer };
    throw error;
  }
};
