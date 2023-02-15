import React, { useContext } from "react";
import { FcOk } from "react-icons/Fc";
import ThemeContext from "../context/ThemeContext";

const Task = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`body-task ${theme}`}>
      <section>
      <FcOk className="check"/>
        <p className="task">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="categorie">Categoria</p>
      </section>
      <section>
      <FcOk className="check"/>
        <p className="task">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="categorie">Categoria</p>
      </section>
      <section>
        <FcOk className="check"/>
        <p className="task">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="categorie">Categoria</p>
      </section>
    </div>
  );
};

export default Task;
