import React from 'react';

type Screen = 'start' | 'quiz' | 'result' | 'review';

interface QuizContextType {
  screen: Screen;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const QuizContext = React.createContext<QuizContextType | undefined>(
  undefined
);
