import logo from './logo.svg';
import './App.css';
import Karim from './components/Karim'
import Fares from './components/Fares';
function App() {
  return (
    <div className="App">
      <Karim />
      <div className='circle'>
        <div className='bow'></div>
      </div>
      <Fares />
    </div>
  );
}

export default App;
