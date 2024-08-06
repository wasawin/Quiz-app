import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';
import Button from './Button.tsx';

function ReviewScreen() {
  const { score, questions, answers, handleStart, setScreen } =
    useContext(QuizContext);
  console.log(questions);
  console.log(score);
  console.log(answers);

  function handleBack() {
    setScreen('start');
  }

  return (
    <>
      <div className="flex flex-col justify-center gap-4  p-4 bg-slate-200">
        {questions.map((question, index) => (
          <div key={index} className="bg-white p-2  space-y-3">
            <p>
              {question.correctAnswer === answers[index]?.selectedOption
                ? '✅'
                : '❌'}
              {question.text}
            </p>
            <label htmlFor="" className="flex flex-col gap-2  justify-center">
              {question.options.map((option, optionIndex) => (
                <div
                  className={`${
                    (question.correctAnswer ===
                      answers[index]?.selectedOption &&
                      optionIndex === question.correctAnswer &&
                      'bg-green-500/50') ||
                    (question.correctAnswer === optionIndex &&
                      'bg-green-500/50')
                  }
                  ${
                    answers[index]?.selectedOption === optionIndex &&
                    question.correctAnswer !== answers[index]?.selectedOption &&
                    'bg-red-600/50'
                  } 
                  flex justify-start items-center rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm max-h-10`}
                >
                  {optionIndex} {option}{' '}
                </div>
              ))}
            </label>
          </div>
        ))}
        <Button onClick={() => handleStart}>Retry</Button>
        <Button onClick={() => handleBack}>Back</Button>
      </div>
    </>
  );
}

export default ReviewScreen;
