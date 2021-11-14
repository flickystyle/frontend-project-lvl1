import readlineSync from 'readline-sync';

const game = (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const gameRounds = 3;

  for (let i = 0; i < gameRounds; i += 1) {
    const [gameQuestion, gameCorrectAnswer] = getQuestionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (gameCorrectAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameCorrectAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default game;
