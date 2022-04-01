import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./containerCategoria.css";
const ContainerCategoria = (props) => {
  return (
    <div className="card contenedor">
      <div className="card-body">{props.children}</div>
    </div>
  );
};
export { ContainerCategoria };
