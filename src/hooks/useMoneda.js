import React, { Fragment, useState } from "react";

const useMoneda = (label, stateInicial, opciones) => {
  // State de nuestro custom hook
  const [state, actualizarState] = useState("");

  const Seleccionar = () => (
    <Fragment>
      <label>{label}</label>
      <select>
        <option value="">- Seleccione -</option>
        {opciones.map(opcion => (
          <option key={opcion.value} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </Fragment>
  );

  // Retornar state, interfaz y fn que modifica el state
  return [state, Seleccionar, actualizarState];
};

export default useMoneda;
