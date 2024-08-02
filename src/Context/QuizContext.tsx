import { createContext } from 'react';

type Screen = 'start' | 'quiz' | 'result' | 'review';

interface QuizContextType {
  screen: Screen;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
); //createContext<QuizContextType | undefined>(undefined);

export default QuizContext;
