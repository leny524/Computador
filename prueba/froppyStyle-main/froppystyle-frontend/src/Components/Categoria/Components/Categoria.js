import React from "react";
import "./categoria.css";
import "bootstrap/dist/css/bootstrap.min.css";
import brocha from "../../../imagenes/brocha.png";
const Categoria = (props) => {
  return (
    <div className="card categoria">
      <div className="categoria-imagen">
        <img src={props.imagen} className="categoria-img" />
      </div>
      <div className="card-body text-center categoria-contenedor-nombre">
        <h4>{props.nombre}</h4>
      </div>
      <div className="text-center categoria-contenedor-buttons">
        <button type="button" className="btn btn-success btn-categoria">
          editar
        </button>
        <button type="button" className="btn btn-danger btn-categoria">
          eliminar
        </button>
      </div>
    </div>
  );
};
export { Categoria };
