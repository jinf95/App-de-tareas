import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Categories = () => {

    const {theme} = useContext(ThemeContext);
    const handleModalContainerClick = e => e.stopPropagation()
  return (
      <div className={`create-categories ${theme}`} onClick={handleModalContainerClick}>
        <h2 className="linea">
          <span>Categorias</span>
        </h2>
        <div>
          <button className="btn-urgent">Urgente</button>
          <button className="btn-important">Importante</button>
          <button className="btn-completed">Completada</button>
          <button className="btn-toStudy">Estudiar</button>
          <button className="btn-later">Más Tarde</button>
        </div>
        <button className="create-categorie" type="submit">
          AGREGAR CATEGORIA
        </button>
      </div>
  );
};

export default Categories;
