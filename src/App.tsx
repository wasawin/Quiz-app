import StartScreen from './components/StartScreen';

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
