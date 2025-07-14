import { useState, useEffect, useRef } from 'react';
import Contador from '../Contador/Contador'
import Boton from '../Boton/Boton'
import beep from '../../assets/sound/beep.mp3'


function Cronometro(){
  const [tiempo, setTiempo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervaloRef = useRef(null);
  const beepSoundRef = useRef(null);
  const [color,setColor]=useState('black');


  useEffect(() => {
    beepSoundRef.current = new Audio(beep);
  }, []);
  
  useEffect(() => {
    if (isRunning) {
      intervaloRef.current = setInterval(() => {
        setTiempo(t => t + 1);
      }, 1000);
    } else {
      clearInterval(intervaloRef.current);
    }
    return () => clearInterval(intervaloRef.current);
  }, [isRunning, tiempo]);

  useEffect(() => {
    if (tiempo === 10 && beepSoundRef.current) {
      beepSoundRef.current.play();
     
    }
    if(tiempo<10){
      setColor('black');
    }else if(tiempo>10&&tiempo<20){
    setColor('blue');
  }else if(tiempo>=20&&tiempo<30){
     setColor('red');
  }
  }, [tiempo]);

const toggleRun = () => {
     setIsRunning(!isRunning);
  };

  const reiniciar = () => {
    setIsRunning(false);
    setTiempo(0);
  };
  
  
 

return(
<div className='div-Cronometro'>

       <Contador tiempo={tiempo} color={color} />
      <div>
        <Boton texto={isRunning ? 'Pausar' : 'Iniciar'} onClick={toggleRun} />
        <Boton texto="Reiniciar" onClick={reiniciar} />
      </div>
      
   </div>)
}
export default Cronometro;