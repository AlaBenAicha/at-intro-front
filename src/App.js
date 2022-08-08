import logo from './logo.svg';
import './App.css';
import Karim from './components/Karim'
import Fares from './components/Fares';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Karim/><div className='o'></div>
        <div className='circle'>
        <div className='bow'></div>
        <Fares />
</div>
      </header>
    </div>
  );
}

export default App;
