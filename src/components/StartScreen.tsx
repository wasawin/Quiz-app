import React from 'react';
import Button from './Button';
import { QuizContext } from '../Context/QuizContext.tsx';
import { useContext } from 'react';

const StartScreen: React.FC = () => {
  const { handleStart } = useContext(QuizContext);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz!</h1>

      <Button onClick={handleStart}>Start Quiz</Button>
    </div>
  );
};

export default StartScreen;
