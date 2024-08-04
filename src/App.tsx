import { useContext } from 'react';
import StartScreen from './components/StartScreen.tsx';
import { QuizContext } from './Context/QuizContext.tsx';
import QuizScreen from './components/QuizScreen.tsx';
function App() {
  const { screen, setScreen } = useContext(QuizContext);
  console.clear;
  function handleStart() {
    setScreen('quiz');
  }

  // console.log(screen);

  return (
    <>
      <div className="min-h-screen bg-red-100 flex justify-center items-center">
        {screen === 'start' && (
          <>
            <StartScreen onStart={handleStart} />
          </>
        )}
        {screen === 'quiz' && <QuizScreen />}
      </div>
    </>
  );
}

export default App;
