export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  score: number;
}
