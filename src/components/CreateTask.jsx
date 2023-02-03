import React from "react";

const CreateTask = () => {
  return (
    <div className="create-task">
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
        <h2 className="linea"><span>Categorias</span></h2>
        <div>
          <button>Urgente</button>
          <button>Importante</button>
          <button>Completada</button>
          <button>Estudiar</button>
          <button>Más Tarde</button>
        </div>
      </section>
      <button className="submit-task" type="submit">CREAR</button>
    </div>
  );
};

export default CreateTask;
