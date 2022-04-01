import React from "react";
import "./buttonAgregarCategoria.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ButtonAgregarCategoria = (props) => {
  return (
    <div className="button-agregar">
      <div className="button-agregar-contenedor">
        <button type="button" className="btn btn-primary">
          + Agregar
        </button>
      </div>
    </div>
  );
};
export { ButtonAgregarCategoria };
