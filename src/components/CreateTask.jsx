import React from "react";

const CreateTask = () => {
  return (
    <div className="create-task">
      <section className="form-createTask">
        <h3>Crear Tarea</h3>
        <input
          type="text"
          name=""
          id=""
          placeholder="Descripción de la tarea..."
        />
      </section>
      <section className="cat-createTask">
        <h4>Categorias</h4>
        <div>
          <button>Urgente</button>
          <button>Importante</button>
          <button>Completada</button>
          <button>Estudiar</button>
          <button>Más Tarde</button>
        </div>
      </section>
      <button type="submit">Crear</button>
    </div>
  );
};

export default CreateTask;
