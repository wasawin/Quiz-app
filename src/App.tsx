import { useContext } from 'react';
import StartScreen from './components/StartScreen.tsx';
import { QuizContext } from './Context/QuizContext.tsx';
import QuizScreen from './components/QuizScreen.tsx';
import ResultScreen from './components/ResultScreen.tsx';
import ReviewScreen from './components/ReviewScreen.tsx';
function App() {
  const { screen, setScreen, shuffledQuestions } = useContext(QuizContext);
  console.clear;
  function handleStart() {
    shuffledQuestions();
    setScreen('quiz');
  }

  return (
    <>
      <div className="min-h-screen bg-red-100 flex justify-center items-center">
        {screen === 'start' && (
          <>
            <StartScreen onStart={handleStart} />
          </>
        )}
        {screen === 'quiz' && <QuizScreen />}
        {screen === 'result' && <ResultScreen />}
        {screen === 'review' && <ReviewScreen />}
      </div>
    </>
  );
}

export default App;
