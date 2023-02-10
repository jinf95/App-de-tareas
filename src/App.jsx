import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="title">Gestor de Tareas</h1>
      <section className="main">
        <aside>
          <Categories/>
        </aside>
        <Tasks/>
      </section>
    </div>
  );
}

export default App;
