import React from "react";
import "./searchCategoria.css";
import "bootstrap/dist/css/bootstrap.min.css";
const SearchCategoria = (props) => {
  return (
    <div className="search">
      <div className="search-contenedor">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Categoria..."
        />
      </div>
    </div>
  );
};
export { SearchCategoria };
