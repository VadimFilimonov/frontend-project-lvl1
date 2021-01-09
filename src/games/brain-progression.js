import readlineSync from 'readline-sync';

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

const buildProgression = () => {
  const progressionLength = 10;
  const progression = [];
  const step = getRandomInt();
  let index = 0;
  while (index < progressionLength) {
    if (index === 0) {
      const startNumber = getRandomInt();
      progression.push(startNumber);
    } else {
      const prevNumber = progression[index - 1];
      const number = prevNumber + step;
      progression.push(number);
    }
    index += 1;
  }
  return progression;
};

export const description = () => 'What number is missing in the progression?';

export default () => {
  const progression = buildProgression();
  const skipIndex = getRandomInt(10);
  const correctAnswer = progression[skipIndex];
  progression[skipIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer !== correctAnswer) {
    const error = { userAnswer, correctAnswer };
    throw error;
  }
};
