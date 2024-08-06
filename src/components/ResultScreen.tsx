import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';
import Button from './Button.tsx';

function ResultScreen() {
  const { score, questions, answers, handleStart, setScreen } =
    useContext(QuizContext);

  function handleBack() {
    setScreen('start');
  }

  return (
    <>
      <div className="grid grid-cols-1  place-content-center my-28 gap-5  p-4 w-full lg:w-3/4 max-w-3xl bg-slate-200 rounded-md border-2 border-slate-900">
        <div className="flex justify-center items-center content-center gap-4 text-center">
          <h1 className="text-3xl font-bold text-pretty">
            Result Score: {score}/{questions.length}
          </h1>
        </div>
        <details className="open:bg-white  open:ring-1 open:ring-black/5 open:shadow-lg rounded-lg">
          <summary className="bg-white p-4 rounded-md">
            Answer the question
          </summary>

          {questions.map((question, index) => (
            <div key={index} className="bg-white p-4   rounded-md space-y-4">
              <p className="text-pretty w-full bg-slate-500/50 px-2 py-5 rounded-md">
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
                  flex justify-start items-center  min-h-20 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm `}
                  >
                    {option}{' '}
                  </div>
                ))}
              </label>
            </div>
          ))}
        </details>
        <div className="space-y-2">
          <Button onClick={handleStart}>Retry</Button>
          <Button onClick={handleBack}>Back</Button>
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
