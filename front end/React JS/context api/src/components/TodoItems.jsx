import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  const todoItemsFromContext = useContext(TodoItemsContext);

  console.log(todoItemsFromContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, i) => (
        <TodoItem
          key={i}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
