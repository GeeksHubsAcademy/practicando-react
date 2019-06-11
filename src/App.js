import React from 'react';
import './App.css';
// import Counter from "./components/Counter/Counter.jsx";
// import Greeting from "./components/Greeting/Greeting.jsx";
import Task from "./components/Task/Task.jsx";


function App() {

  return (
    < div className="App" >
      <h1>Tasks:</h1>
      <Task
        title={"estudiar React"}
        subTasks={[
          {
            title: "aprender props y state",
            description: "ir haciendo ejercicios freeCodeCamp"
          },
          {
            title: "aprender lifecycle",
            description: "ir conectando con la API the backend"
          },
          {
            title: "aprender React Router",
            description: "ir creando diferentes vistas"
          }
        ]} />

      {/* Counters:
      <Counter start={5} step={5}/>
      <Counter start={10}/>
      <Greeting /> */}
    </div>
  );
}
export default App;
