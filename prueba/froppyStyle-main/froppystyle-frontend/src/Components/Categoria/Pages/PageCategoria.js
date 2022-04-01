import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContainerCategoria } from "../Components/ContainerCategoria";
import { Categoria } from "../Components/Categoria";
import "./pageCategoria.css";
import { SearchCategoria } from "../Components/SearchCategoria";
import { ButtonAgregarCategoria } from "../Components/ButtonAgregarCategoria";
const categorias = [
  {
    id: 1,
    nombre: "Desodorantes",
    url: "https://images.pexels.com/photos/2261165/pexels-photo-2261165.jpeg?cs=srgb&dl=pexels-robin-schreiner-2261165.jpg&fm=jpg",
  },
  {
    id: 2,
    nombre: "Perfumes",
    url: "https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg?cs=srgb&dl=pexels-dom-j-297494.jpg&fm=jpg",
  },
  {
    id: 3,
    nombre: "Brochas",
    url: "https://images.pexels.com/photos/4835419/pexels-photo-4835419.jpeg?cs=srgb&dl=pexels-cottonbro-4835419.jpg&fm=jpg",
  },
];
const PageCategoria = (props) => {
  return (
    <>
      <ContainerCategoria>
        <div className="row page-categoria-contenedor">
          <SearchCategoria />
          <ButtonAgregarCategoria />
          {categorias.map((categoria) => (
            <div className="col col-lg-4">
              <Categoria nombre={categoria.nombre} imagen={categoria.url} />
            </div>
          ))}
        </div>
      </ContainerCategoria>
    </>
  );
};
export { PageCategoria };
