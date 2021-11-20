import getRandomNumber from '../random_number.js';
import game from '../index.js';

const calculate = (firstNum, operator, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return null;
  }
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
