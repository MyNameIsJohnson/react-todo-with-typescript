import React from "react";
import classes from "./TodoItems.module.css";
// type Props = {
//   text: string;
// };

const TodoItems: React.FC<{ text: string }> = (props) => {
  return <li className={classes.items}>{props.text}</li>;
};

export default TodoItems;
