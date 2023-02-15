import { useContext } from "react";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import ThemeContext from "./context/ThemeContext";

function App() {

  const {theme} = useContext(ThemeContext);
  
  return (
  
      <div className={`App ${theme}`}>
        <Navbar />
        <h1 className="title">Gestor de Tareas</h1>
        <section className="main">
          <aside>
            <Categories />
          </aside>
          <Tasks />
        </section>
      </div>
  );
}

export default App;
