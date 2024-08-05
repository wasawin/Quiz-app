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
      <div>
        Score : {score} of {questions.length}
      </div>
      {/* <button
        onClick={handleReview}
      >
        Review
      </button> */}
      <Button onClick={handleReview}>Review</Button>
    </>
  );
}

export default ResultScreen;
