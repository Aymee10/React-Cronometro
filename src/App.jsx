import './App.css';
import Cronometro from './components/Cronometro/Cronometro';
import Temporizador from './components/Temporizador/Temporizador';

function App() {
 

  return (
    <div className="app-container">
      <div className='div-elemento'> 
         <h2>Cronómetro</h2>
         <Cronometro/>
      </div>       
    </div>
  );
}

export default App;
