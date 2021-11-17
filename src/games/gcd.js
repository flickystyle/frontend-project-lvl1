import getRandomNumber from '../random_number.js';
import game from '../index.js';

const greatestDivisorRec = (num1, num2) => {
  if (num2) {
    return greatestDivisorRec(num2, num1 % num2);
  }
  return num1;
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const gameQuestion = (`${firstRandomNumber} ${secondRandomNumber}`);
  const gameAnswer = String(greatestDivisorRec(firstRandomNumber, secondRandomNumber));
  return [gameQuestion, gameAnswer];
};

const gcd = () => game(description, getQuestionAnswer);

export default gcd;
