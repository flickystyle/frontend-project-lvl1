import getRandomNumber from '../random_number.js';
import game from '../index.js';

const calcNumbers = (firstNum, operator, secondNum) => {
  let rightAnswer;
  if (operator === '+') {
    rightAnswer = firstNum + secondNum;
  } else if (operator === '-') {
    rightAnswer = firstNum - secondNum;
  } else if (operator === '*') {
    rightAnswer = firstNum * secondNum;
  }
  return rightAnswer;
};

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getQuestionAnswer = () => {
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const gameQuestion = (`${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);
  const gameAnswer = String(calcNumbers(firstRandomNumber, randomOperator, secondRandomNumber));
  return [gameQuestion, gameAnswer];
};

const calc = () => game(description, getQuestionAnswer);

export default calc;
