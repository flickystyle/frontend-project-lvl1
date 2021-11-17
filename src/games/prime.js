import game from '../index.js';
import getRandomNumber from '../random_number.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  } if (num < 2) {
    return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAnswer = () => {
  const gameQuestion = getRandomNumber();
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

const prime = () => game(description, getQuestionAnswer);

export default prime;
