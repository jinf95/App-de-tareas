import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="title">Gestor de Tareas</h1>
      <Tasks/>
 

    </div>
  );
}

export default App;
