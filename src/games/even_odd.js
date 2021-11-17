import game from '../index.js';
import getRandomNumber from '../random_number.js';

const evenNumber = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = evenNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenOdd = () => game(description, getQuestionAnswer);

export default evenOdd;
