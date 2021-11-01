import readlineSync from 'readline-sync';
import getRandomNumber from '../random_number.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i < 4; i += 1) {
    const num = getRandomNumber();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('You answer: ');
    if (num % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        return `Let's try again, ${userName}!`;
      }
    }
    if (num % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        return `Let's try again, ${userName}!`;
      }
    }
  } return console.log(`Congratulations, ${userName}!`);
};
