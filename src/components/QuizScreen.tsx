import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';
import { QuizState } from '../types/quiz.ts';
// import { questions } from '../data/questions.ts';

function QuizScreen() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setScreen,
    questions,
    setScore,
    setAnswers,
  } = useContext(QuizContext);

  function handleNext() {
    const currentDoQuestion = questions[currentQuestionIndex];

    setAnswers((prevAnswers) => {
      const newAnswer: QuizState = {
        currentQuestionIndex: currentDoQuestion.id,
        selectedOption,
        correctAnswer: currentDoQuestion.correctAnswer,
      };
      return [...prevAnswers, newAnswer];
    });

    if (selectedOption === currentDoQuestion.correctAnswer) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        return newScore;
      });
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setScreen('result');
    }
  }

  useEffect(() => {
    console.log('chack questions', questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  function handleAnswer(answer: number) {
    setSelectedOption(answer);
  }

  return (
    <div className="flex flex-col items-center gap-4 justify-center py-6 w-2/3 bg-gray-100">
      <div className="text-center">
        <h1>Quiz</h1>
        <p>
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <p>{questions[currentQuestionIndex].text}</p>
      <ul className="space-y-2">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li key={index}>
            <label
              htmlFor={option}
              className=" flex cursor-pointer  rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
            >
              <input
                type="radio"
                name="option"
                id={option}
                value={option}
                checked={selectedOption === index}
                onChange={() => handleAnswer(index)}
                className="sr-only"
              />
              <p className="text-gray-700">{option}</p>
            </label>
          </li>
        ))}
      </ul>

      <button
        onClick={handleNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default QuizScreen;
