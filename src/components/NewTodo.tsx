import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

// declare FC that returns nothing but takes param type string
const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  // must be explitic with what kind of data to store. Use generic type <-set concrete obj- i.e. HTMLInputElement(-starting value-)>
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // ref is not set to a value yet, therefore -?-
    // if connection not established null will be enteredText
    // use -!- if for certain the connection will not be null
    // refs could be null or not be connected
    let enteredText = todoTextInputRef.current!.value;

    //validate text entered by user
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    // We want to call a function to be stored in App component with props expecting it to get a function as a value
    todoCtx.addTodo(enteredText);
    // Clear input after submit
    todoTextInputRef.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
