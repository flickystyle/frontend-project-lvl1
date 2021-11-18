import getRandomNumber from '../random_number.js';
import game from '../index.js';

const calculate = (firstNum, operator, secondNum) => {
  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = firstNum + secondNum;
      break;
    case '-':
      rightAnswer = firstNum - secondNum;
      break;
    case '*':
      rightAnswer = firstNum * secondNum;
      break;
    default:
      rightAnswer = null;
  } return rightAnswer;
};

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getQuestionAnswer = () => {
  const randomOperator = operators[getRandomNumber(0, operators.length)];
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const question = (`${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);
  const correctAnswer = String(calculate(firstRandomNumber, randomOperator, secondRandomNumber));
  return [question, correctAnswer];
};

const runCalcGame = () => game(description, getQuestionAnswer);

export default runCalcGame;
