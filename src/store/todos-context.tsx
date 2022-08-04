import React, { useState, PropsWithChildren } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
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

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
