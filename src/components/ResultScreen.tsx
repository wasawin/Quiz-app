import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';
import Button from './Button.tsx';

function ResultScreen() {
  const { score, questions, setScreen } = useContext(QuizContext);

  function handleReview() {
    setScreen('review');
  }
  return (
    <>
      <div className="text-center space-y-4">
        <p>
          Score : {score} of {questions.length}
        </p>
        <Button onClick={handleReview}>Review</Button>
      </div>
    </>
  );
}

export default ResultScreen;
