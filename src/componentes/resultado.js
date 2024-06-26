import React from "react";
import '../style/resultado.css'

// Define un componente funcional que recibe 'input' como prop.
const Resultado = ({input}) => ( 
    <div className="input">
            {input}{/* Aplica la clase CSS 'input' al div contenedor. */}
    </div>
);

export default Resultado;