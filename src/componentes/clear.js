import React from "react";
import '../style/clear.css'

// Define un componente que recibe 'limpiarInput' y 'children' como props.
const BotonClear = ({ limpiarInput, children }) => (
    <div className="boton-clear" onClick={limpiarInput}>
        {children} {/* Aplica la clase CSS 'boton-clear' al div contenedor y asigna la función 'limpiarInput' al evento 'onClick' */}
    </div>
);

export default BotonClear 