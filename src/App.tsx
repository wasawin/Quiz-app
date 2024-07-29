import StartScreen from './components/StartScreen.tsx';

function App() {
  function onStart() {
    alert('Start Quiz');
  }
  return (
    <>
      <StartScreen onStart={onStart} />
    </>
  );
}

export default App;
