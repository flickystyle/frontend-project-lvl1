import game from '../index.js';
import getRandomNumber from '../random_number.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => game(description, getQuestionAnswer);

export default runEvenGame;
