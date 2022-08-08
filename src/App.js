import logo from './logo.svg';
import './App.css';
import Karim from './components/Karim'
import Amina from './components/Amina'
import Fares from './components/Fares'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Karim/>
        {/* <Amina/>
        <Fares /> */}
      </header>
    </div>
  );
}

export default App;
