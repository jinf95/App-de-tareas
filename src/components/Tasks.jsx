import React from "react";
import Task from "./Task";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="header-tasks">
        <button>Agregar Tarea</button>
      </div>
      <section className="box">
          <Task />
        <div className="footer-tasks">
          <p>5 tareas</p>
          <p>Todas</p>
          <p>Completadas</p>
        </div>
      </section>
    </div>
  );
};

export default Tasks;
