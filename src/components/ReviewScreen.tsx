import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';

function ReviewScreen() {
  const { score, questions, answers } = useContext(QuizContext);
  console.log(questions);
  console.log(score);
  console.log(answers);

  return <div>ReviewScreen</div>;
}

export default ReviewScreen;
