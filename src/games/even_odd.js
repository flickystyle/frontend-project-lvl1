import game from '../index.js';
import getRandomNumber from '../random_number.js';

const evenNumber = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const gameQuestion = getRandomNumber();
  const gameAnswer = evenNumber(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

const evenOdd = () => game(description, getQuestionAnswer);

export default evenOdd;
