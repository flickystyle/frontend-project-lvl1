import getRandomNumber from '../random_number.js';
import game from '../index.js';

const generateProgression = (first, step, length) => {
  const progressArr = [];
  for (let i = 0; i < length; i += 1) {
    progressArr.push(first + step * i);
  } return progressArr;
};

const description = 'What number is missing in the progression?';

const getQuestionAnswer = () => {
  const firstNumber = getRandomNumber();
  const randomStep = getRandomNumber(2, 10);
  const getLength = getRandomNumber(5, 10);
  const hideIndex = getRandomNumber(0, getLength - 1);
  const gameProgression = generateProgression(firstNumber, randomStep, getLength);
  const correctAnswer = String(gameProgression[hideIndex]);
  gameProgression[hideIndex] = '..';
  const question = gameProgression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => game(description, getQuestionAnswer);

export default runProgressionGame;
