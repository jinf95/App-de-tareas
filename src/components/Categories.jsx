import React from "react";

const Categories = () => {

    const handleModalContainerClick = e => e.stopPropagation()
  return (
      <div className="create-categories" onClick={handleModalContainerClick}>
        <h2 className="linea">
          <span>Categorias</span>
        </h2>
        <div>
          <button>Urgente</button>
          <button>Importante</button>
          <button>Completada</button>
          <button>Estudiar</button>
          <button>Más Tarde</button>
        </div>
        <button className="create-categorie" type="submit">
          Agregar Categoría
        </button>
      </div>
  );
};

export default Categories;
