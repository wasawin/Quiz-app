import React, { createContext, useState } from 'react';
import { Question, QuizState } from '../types/quiz';
import { questions as questionsSet } from '../data/questions';
const QuizContext = createContext<QuizContextType>({} as QuizContextType);
interface QuizProviderProps {
  children: React.ReactNode;
}
type Screen = 'start' | 'quiz' | 'result';
interface QuizContextType {
  screen: Screen;
  setScreen: React.Dispatch<React.SetStateAction<Screen>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  answers: QuizState[];
  setAnswers: React.Dispatch<React.SetStateAction<QuizState[]>>;
  handleStart: () => void;
}

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [screen, setScreen] = useState<Screen>('start');
  const [questions, setQuestions] = useState<Question[]>(questionsSet);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<QuizState[]>([]);

  function settingQuestion() {
    const shuffled = questions.sort(() => Math.random() - 0.5);
    setScore(0);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setQuestions(shuffled);
  }
  function handleStart() {
    settingQuestion();
    setScreen('quiz');
  }
  return (
    <QuizContext.Provider
      value={{
        screen,
        setScreen,
        questions,
        setQuestions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        score,
        setScore,
        answers,
        setAnswers,
        handleStart,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
