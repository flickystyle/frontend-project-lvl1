import readlineSync from 'readline-sync';

const game = (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 1; i < 4; i += 1) {
    const [gameQuestion, gameAnswer] = getQuestionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (gameAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};

export default game;
