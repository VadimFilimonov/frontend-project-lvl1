import brainGames from './games/brain-games.js';
import brainEven, { description as descriptionEven } from './games/brain-even.js';
import brainCalc, { description as descriptionCalc } from './games/brain-calc.js';
import brainGcd, { description as descriptionGcd } from './games/brain-gcd.js';
import brainProgression, { description as descriptionProgression } from './games/brain-progression.js';
import brainPrime, { description as descriptionPrime } from './games/brain-prime.js';
import { getName } from './cli.js';

const MIN_CORRECT_ANSWERS = 3;

const GAMES = {
  'brain-even': brainEven,
  'brain-calc': brainCalc,
  'brain-gcd': brainGcd,
  'brain-progression': brainProgression,
  'brain-prime': brainPrime,
};

const DESCRIPTIONS = {
  'brain-even': descriptionEven(),
  'brain-calc': descriptionCalc(),
  'brain-gcd': descriptionGcd(),
  'brain-progression': descriptionProgression(),
  'brain-prime': descriptionPrime(),
};

export default (gameName = 'brain-even') => {
  brainGames();
  const userName = getName();
  const description = DESCRIPTIONS[gameName];
  const game = GAMES[gameName];
  console.log(description);
  let correctAnswers = 0;
  while (correctAnswers < MIN_CORRECT_ANSWERS) {
    try {
      game(userName);
      console.log('Correct!');
      correctAnswers += 1;
    } catch (e) {
      const { userAnswer, correctAnswer } = e;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
  process.exit();
};
