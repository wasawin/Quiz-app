import { useContext, useState } from 'react';
import StartScreen from './components/StartScreen.tsx';
import { QuizContext } from './Context/QuizContext.tsx';
function App() {
  const { screen, setScreen } = useContext(QuizContext);
  console.clear;
  function handleStart() {
    setScreen('quiz');
  }

  console.log(screen);

  return (
    <>
      <div className="min-h-screen bg-red-100 flex justify-center items-center">
        {screen && <StartScreen onStart={handleStart} />}
      </div>
    </>
  );
}

export default App;
