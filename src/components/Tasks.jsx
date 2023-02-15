import React, { useContext } from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";
import { useModal } from "../hooks/useModal";
import Categories from "./Categories";
import Modal from "./Modal";
import ThemeContext from "../context/ThemeContext";

const Tasks = () => {
  const [isOpen1, openModal1, closeModal1] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`tasks ${theme}`}>
      <div className="header-tasks">
        <button className="btn-add-task" onClick={openModal1}>
          Agregar Tarea
        </button>
        <Modal isOpen={isOpen1} closeModal={closeModal1}>
          <CreateTask />
        </Modal>
        <button className="btn-add-category" onClick={openModal2}>
          Agregar Categoria
        </button>
        <Modal isOpen={isOpen2} closeModal={closeModal2}>
          <Categories />
        </Modal>
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
