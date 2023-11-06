import "./App.css";
import AddTodo from "./components/AddTodo";
import AddTodoItem1 from "./components/AddTodoItem1";
import AddTodoItem2 from "./components/AddTodoItem2";
import Heading from "./components/Heading";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <div className="container text-center">
      <Heading />
      <div className="container text-center">
        <AddTodo />

        <TodoItems todoItems={todoItems} />

        {/* <AddTodoItem1 />
        <AddTodoItem2 /> */}
      </div>
    </div>
  );
}

export default App;
