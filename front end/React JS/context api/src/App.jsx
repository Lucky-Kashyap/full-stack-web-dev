import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Heading from "./components/Heading";
import TodoItems from "./components/TodoItems";
import NoITems from "./components/NoItems";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
  ]);

  // const deleteItem = (todoItemName) => {
  //   const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
  //   setTodoItems(newTodoItems);
  // };

  // const defaultTodoItems = [
  //   {
  //     name: "Buy Ghee",
  //     dueDate: "Today",
  //   },
  // ];

  return (
    <TodoItemsContextProvider>
      <div className="container text-center">
        <Heading />

        <div className="container text-center">
          <AddTodo />

          {/* {todoItems.length === 0 ? <NoITems /> : null} */}
          <NoITems />
          <TodoItems />

          {/* <AddTodoItem1 />
        <AddTodoItem2 /> */}
        </div>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
