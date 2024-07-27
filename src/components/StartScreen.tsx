import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz!</h1>
      <button
        onClick={onStart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
