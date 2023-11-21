import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Heading from "./components/Heading";
import TodoItems from "./components/TodoItems";
import NoITems from "./components/NoItems";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
  ]);

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [
    {
      name: "Buy Ghee",
      dueDate: "Today",
    },
  ];

  return (
    <TodoItemsContext.Provider value={defaultTodoItems}>
      <div className="container text-center">
        <Heading />

        <div className="container text-center">
          <AddTodo todoItems={todoItems} setTodoItems={setTodoItems} />

          {/* {todoItems.length === 0 ? <NoITems /> : null} */}
          <NoITems todoItems={todoItems} />
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />

          {/* <AddTodoItem1 />
        <AddTodoItem2 /> */}
        </div>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
