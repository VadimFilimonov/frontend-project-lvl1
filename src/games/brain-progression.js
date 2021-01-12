import engine from '../index.js';
import getRandomInt from '../utilities.js';

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

const description = 'What number is missing in the progression?';

const game = () => {
  const progression = buildProgression();
  const skipIndex = getRandomInt(10);
  const correctAnswer = String(progression[skipIndex]);
  progression[skipIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => engine(game, description);
