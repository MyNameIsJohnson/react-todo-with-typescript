import React from "react";
import Todo from "../models/todo";
import TodoItems from "./TodoItems";
import classes from "./Todos.module.css";
type Props = {
  items: Todo[];
};

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItems key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
