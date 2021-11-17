import readlineSync from 'readline-sync';

const gameRounds = 3;

const game = (description, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < gameRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
