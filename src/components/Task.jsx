import React from "react";
import { FcOk } from "react-icons/Fc";


const Task = () => {
  return (
    <div className="body-task">
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
