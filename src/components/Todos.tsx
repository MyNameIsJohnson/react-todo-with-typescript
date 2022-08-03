import React from "react";
import Todo from "../models/todo";
import TodoItems from "./TodoItems";
import classes from "./Todos.module.css";
type Props = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

const Todos: React.FC<Props> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          onRemoveTodo={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
