import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';
import Button from './Button.tsx';

function ResultScreen() {
  const { score, questions, answers, handleStart, setScreen } =
    useContext(QuizContext);
  console.log(questions);
  console.log(score);
  console.log(answers);

  function handleBack() {
    console.log('test');

    setScreen('start');
  }

  return (
    <>
      <div className="grid grid-cols-1 place-content-center my-28 gap-4  p-4 w-1/2  bg-slate-200">
        {questions.map((question, index) => (
          <div key={index} className="bg-white p-2  space-y-3">
            <p className="text-pretty">
              {question.correctAnswer === answers[index]?.selectedOption
                ? '✅'
                : '❌'}
              {question.text}
            </p>
            <label
              htmlFor=""
              key={index}
              className="flex flex-col gap-2  justify-center"
            >
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
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
                  {option}{' '}
                </div>
              ))}
            </label>
          </div>
        ))}
        <Button onClick={handleStart}>Retry</Button>
        <Button onClick={handleBack}>Back</Button>
      </div>
    </>
  );
}

export default ResultScreen;
