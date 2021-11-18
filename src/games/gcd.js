import getRandomNumber from '../random_number.js';
import game from '../index.js';

const getGrDivisor = (num1, num2) => (num2 === 0 ? num1 : getGrDivisor(num2, num1 % num2));

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const question = (`${firstRandomNumber} ${secondRandomNumber}`);
  const correctAnswer = String(getGrDivisor(firstRandomNumber, secondRandomNumber));
  return [question, correctAnswer];
};

const runGcdGame = () => game(description, getQuestionAnswer);

export default runGcdGame;
