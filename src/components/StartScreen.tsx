import React from 'react';
import Button from './Button';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz!</h1>

      <Button onClick={onStart}>Start Quiz</Button>
    </div>
  );
};

export default StartScreen;
