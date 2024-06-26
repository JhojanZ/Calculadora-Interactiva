import './App.css'; // Importa el archivo CSS para estilizar la aplicación.
import Boton from './componentes/botones'; // Importa el componente Boton.
import Resultado from './componentes/resultado'; // Importa el componente Resultado.
import BotonClear from './componentes/clear'; // Importa el componente BotonClear.
import { useState } from 'react'; // Importa el hook useState de React.
import { evaluate } from 'mathjs'; // Importa la función evaluate de mathjs para evaluar expresiones matemáticas.
import cube from './Imagenes/logo192.png';

function App() {
  // Define el estado 'input' y la función para actualizarlo 'setInput'.
  const [input, setInput] = useState('');

  // Función para agregar valores al estado 'input'.
  const agregarInput = val => {
    setInput(input + val);
  };

  // Función para limpiar el estado 'input'.
  const limpiarInput = () => {
    setInput("");
  };

  // Función para calcular el resultado de la expresión en 'input'.
  const calcularResultado = () => {
    try {
      setInput(evaluate(input)); // Evalúa la expresión y actualiza el estado 'input' con el resultado.
    } catch {
      alert("Entrada Incorrecta"); // Muestra una alerta si la expresión es inválida.
    }
  };

  // Renderiza la interfaz de la calculadora.
  return (
    <div className="App">
      
      <div className='contenedor-calculadora'>
        <Resultado input={input} /> {/* Muestra el resultado actual. */}
        
        {/* Crea botones para la calculadora */}
        {[1, 2, 3, '+', 
          4, 5, 6, '-', 
          7, 8, 9, '*', 
          '=', 0, '.', '/'
        ].map((simbolo, index) => (
          <Boton
            key={index} // Clave única para cada botón, necesaria para el correcto manejo de listas en React.
            simbolo={simbolo} // Pasa el símbolo del botón como prop.
            enviarNum={simbolo} // Pasa el símbolo del botón como prop.
            manejarInput={() => {(simbolo === '=') ? calcularResultado() : agregarInput(simbolo)}} // Define la función a ejecutar cuando se hace clic en el botón.
          />
        ))}
  
        <BotonClear limpiarInput={limpiarInput}>Clear</BotonClear> {/* Botón para limpiar la entrada. */}
      </div>
    </div>
  );
}

export default App; // Exporta el componente App como el componente principal.

