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
  const randomStep = Math.floor(Math.random() * 10) + 3;
  const getLength = Math.floor(Math.random() * 10) + 7;
  const hideStep = Math.floor(Math.random() * 7) + 1;
  const gameProgression = generateProgression(firstNumber, randomStep, getLength);
  const gameAnswer = String(gameProgression[hideStep]);
  gameProgression[hideStep] = '..';
  const gameQuestion = gameProgression.join(' ');
  return [gameQuestion, gameAnswer];
};

const progression = () => game(description, getQuestionAnswer);

export default progression;
