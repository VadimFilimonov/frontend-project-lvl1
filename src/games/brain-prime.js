import readlineSync from 'readline-sync';

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const description = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    const error = { userAnswer, correctAnswer };
    throw error;
  }
};
