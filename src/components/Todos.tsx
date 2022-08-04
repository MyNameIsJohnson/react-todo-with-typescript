import React, { useContext } from "react";
import TodoItems from "./TodoItems";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";
// type Props = {
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
// };

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
