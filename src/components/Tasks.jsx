import React from "react";
import Task from "./Task";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="header-tasks">
        <button>Agregar Tarea</button>
      </div>
      <div>
        <Task />
      </div>
      <div className="footer-tasks">
        <p>5 tareas</p>
        <p>All</p>
        <p>Completadas</p>
      </div>
    </div>
  );
};

export default Tasks;
