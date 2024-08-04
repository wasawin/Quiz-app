import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';
import { questions } from '../data/questions.ts';

function QuizScreen() {
  const { shuffledQuestions } = useContext(QuizContext);

  function handleAnswer() {
    shuffledQuestions();
    console.log(questions[0]);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-1/2 bg-gray-100">
      <div className="text-center">
        <h1>Quiz</h1>
      </div>

      <div>
        <p>{questions[0].text}</p>
        <p>{questions[0].options[0]}</p>
        <p>{questions[0].options[1]}</p>
        <p>{questions[0].options[2]}</p>
        <p>{questions[0].options[3]}</p>
      </div>

      <button
        onClick={handleAnswer}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Shuffled
      </button>
    </div>
  );
}

export default QuizScreen;
