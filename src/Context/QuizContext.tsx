import React, { createContext, useState } from 'react';
import { Question } from '../types/quiz';
import { questions as questionsSet } from '../data/questions';
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
  shuffledQuestions: () => void;
}

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [screen, setScreen] = useState<Screen>('start');
  const [questions, setQuestions] = useState<Question[]>(questionsSet);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function shuffledQuestions() {
    const shuffled = questions.sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
  }

  function answerquiz(answer: number) {
    const currentDoQuestion = questions[currentQuestion];
    if (answer === currentDoQuestion.correctAnswer) {
      setScore((score) => score + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen('result');
      setShowScore(true);
    }
  }

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
        shuffledQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
