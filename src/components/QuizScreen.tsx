import { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../Context/QuizContext.tsx';
import { QuizState } from '../types/quiz.ts';
import Button from './Button.tsx';
// import { questions } from '../data/questions.ts';

function QuizScreen() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setScreen,
    questions,
    setScore,
    answers,
    setAnswers,
    score,
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
      if (
        !answers[currentQuestionIndex] ||
        answers[currentQuestionIndex].selectedOption !==
          currentDoQuestion.correctAnswer
      ) {
        setScore((prevScore) => prevScore + 1);
      }
    } else if (
      answers[currentQuestionIndex] &&
      answers[currentQuestionIndex].selectedOption ===
        currentDoQuestion.correctAnswer
    ) {
      setScore((prevScore) => prevScore - 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setScreen('result');
    }
  }

  function handlePrev() {
    currentQuestionIndex > 0 &&
      setCurrentQuestionIndex(currentQuestionIndex - 1);
  }
  // setSelectedOption history;
  useEffect(() => {
    answers[currentQuestionIndex] &&
      setSelectedOption(answers[currentQuestionIndex].selectedOption);
  }, [currentQuestionIndex, answers]);

  useEffect(() => {
    console.log('chack questions', questions[currentQuestionIndex]);
    console.log('score', score);
  }, [currentQuestionIndex, score, questions]);

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
      <div className="flex space-x-4">
        <Button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={selectedOption === null}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default QuizScreen;
