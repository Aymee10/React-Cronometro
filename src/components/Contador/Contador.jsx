import './Contador.css';

function Contador({ tiempo, color }) {
  return (
    <div className="contador" style={{ color }}>
     <p>Tiempo transcurrido:</p>
      {tiempo} s
    </div>
  );
}

export default Contador;