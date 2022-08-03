import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  // need state to manager above array with state. So the App component will rerender when the array changes and Todo component updates the list
  const [todos, setTodos] = useState<Todo[]>([]);
  // We need a way for the NewTodo to communicate back to the App component
  // Handler gets the todotext from NewTodo
  const addTodoHandler = (todotext: string) => {
    // Here we manipulate todo array
    const newTodo = new Todo(todotext);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  return (
    <div className="App">
      {/* add pointer  */}
      <NewTodo onAddTodo={addTodoHandler} />

      <Todos items={todos} />
    </div>
  );
}

export default App;
