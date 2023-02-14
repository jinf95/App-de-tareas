import React from "react";

const CreateTask = () => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <div className="create-task" onClick={handleModalContainerClick}>
      <section className="form-createTask">
        <h1>CREAR TAREA</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Descripción de la tarea..."
        />
      </section>
      <section className="cat-createTask">
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
      </section>
      <button className="submit-task" type="submit">
        CREAR
      </button>
    </div>
  );
};

export default CreateTask;
