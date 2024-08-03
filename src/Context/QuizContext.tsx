import React, { createContext, useState } from 'react';
import { Question } from '../types/quiz';

const QuizContext = createContext<QuizContextType>({} as QuizContextType);
interface QuizProviderProps {
  children: React.ReactNode;
}
type Screen = 'start' | 'quiz' | 'result' | 'review';
interface QuizContextType {
  screen: Screen;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  showScore: boolean;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [screen, setScreen] = useState<Screen>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  return (
    <QuizContext.Provider
      value={{
        screen,
        setScreen,
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        showScore,
        setShowScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
