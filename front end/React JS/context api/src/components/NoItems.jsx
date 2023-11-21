import { useContext } from "react";
import styles from "./NoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const NoITems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {" "}
      {todoItems.length === 0 && (
        <>
          <p className={styles.noitem}>Enjoy Your Day</p>

          <h2>There is nothing else to show you can add</h2>
        </>
      )}
    </>
  );
};

export default NoITems;
