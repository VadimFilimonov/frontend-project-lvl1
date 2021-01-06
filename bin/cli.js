import readlineSync from 'readline-sync';

let name;

export const askName = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const getName = () => name;

export default askName;
