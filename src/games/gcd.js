import getRandomNumber from '../random_number.js';
import game from '../index.js';

const greatestDivisor = (num1, num2) => (num2 === 0 ? num1 : greatestDivisor(num2, num1 % num2));

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const question = (`${firstRandomNumber} ${secondRandomNumber}`);
  const correctAnswer = String(greatestDivisor(firstRandomNumber, secondRandomNumber));
  return [question, correctAnswer];
};

const gcd = () => game(description, getQuestionAnswer);

export default gcd;
