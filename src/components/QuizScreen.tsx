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
    const currentQuestion = questions[currentQuestionIndex];

    //update answer
    setAnswers((prevAnswers) => {
      const updatedAnswers: QuizState[] = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = {
        currentQuestionIndex: currentQuestion.id,
        selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
      };
      return updatedAnswers;
    });

    //check selected option is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      // check answer empty or answer history is wrong to change score +1
      if (
        !answers[currentQuestionIndex] ||
        answers[currentQuestionIndex].selectedOption !==
          currentQuestion.correctAnswer
      ) {
        setScore((prevScore) => prevScore + 1);
      }

      // check answer is wrong and  check answer history is correct to change score -1
    } else if (
      selectedOption !== currentQuestion.correctAnswer &&
      answers[currentQuestionIndex] &&
      answers[currentQuestionIndex].selectedOption ===
        currentQuestion.correctAnswer
    ) {
      setScore((prevScore) => prevScore - 1);
    }

    //check last question
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
    answers[currentQuestionIndex]
      ? setSelectedOption(answers[currentQuestionIndex].selectedOption)
      : setSelectedOption(null);
  }, [currentQuestionIndex, answers]);

  useEffect(() => {
    console.log('chack questions', questions[currentQuestionIndex]);
    console.log('score', score);
  }, [currentQuestionIndex, score, questions]);

  function handleAnswer(answer: number) {
    setSelectedOption(answer);
  }

  return (
    <div className="flex flex-col items-center gap-4 justify-center py-6 px-4 w-full md:w-3/4 lg:w-2/4 bg-gray-100">
      <div className="text-center">
        <h1>Quiz</h1>
        <p>
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <p>{questions[currentQuestionIndex].text}</p>
      <ul className="grid grid-cols-1 md:gr3d4cols-2 gap-4 w-full max-w-xl mx-auto mt-4">
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
      <div className="grid  grid-cols-2 w-full gap-2">
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
