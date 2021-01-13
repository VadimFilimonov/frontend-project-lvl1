import readlineSync from 'readline-sync';

const MIN_CORRECT_ANSWERS = 3;

export default (game, description) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let correctAnswers = 0;
  while (correctAnswers < MIN_CORRECT_ANSWERS) {
    const { question, correctAnswer } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    correctAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
