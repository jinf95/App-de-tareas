import React from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";
import { useModal } from "../hooks/useModal"

const Tasks = () => {
  
  const [isOpen, openModal, closeModal] = useModal(false)

  return (
    <div className="tasks">
      <div className="header-tasks">
        <button onClick={openModal}>Agregar Tarea</button>
        <CreateTask isOpen={isOpen} closeModal={closeModal}/>
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
