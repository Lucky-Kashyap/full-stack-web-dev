import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Heading from "./components/Heading";
import TodoItems from "./components/TodoItems";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
  ]);

  return (
    <div className="container text-center">
      <Heading />
      <div className="container text-center">
        <AddTodo todoItems={todoItems} setTodoItems={setTodoItems} />

        <TodoItems todoItems={todoItems} />

        {/* <AddTodoItem1 />
        <AddTodoItem2 /> */}
      </div>
    </div>
  );
}

export default App;
