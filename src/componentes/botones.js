import React from "react";
import '../style/botones.css';

function Boton({simbolo, manejarInput}) {
    return (
        <button 
            className={Number.isInteger(simbolo)? 'numero' : 'operador'}
            onClick={manejarInput}> {/* Asigna la función manejarInput al evento onClick del botón. */}
            {simbolo} {/* Muestra el contenido de simbolo dentro del botón. */}
        </button>
    )
}

export default Boton