import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';

function ResultScreen() {
  const { score, questions } = useContext(QuizContext);

  return (
    <div>
      Score : {score} of {questions.length}
    </div>
  );
}

export default ResultScreen;
