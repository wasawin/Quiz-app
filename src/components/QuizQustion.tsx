import React from 'react';
import { Question } from '../types/quiz';

interface QuizScreenProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  onFinish: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  onAnswer,
  onFinish,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left p-2 border rounded hover:bg-gray-100"
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={onFinish}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Finish Quiz
      </button>
    </div>
  );
};

export default QuizScreen;
