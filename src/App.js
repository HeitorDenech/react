import './App.css';
import Saudacao from './components/Saudacao';

function App() {
  let name = "Heitor"

  return (
    <div className="App">
      <Saudacao
        name={name}
      />
    </div>
  );
}

export default App;
