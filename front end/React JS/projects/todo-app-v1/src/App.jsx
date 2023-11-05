import "./App.css";
import AddTodo from "./components/AddTodo";
import AddTodoItem1 from "./components/AddTodoItem1";
import AddTodoItem2 from "./components/AddTodoItem2";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="container text-center">
      <Heading />
      <div className="container text-center">
        <AddTodo />

        <AddTodoItem1 />
        <AddTodoItem2 />
      </div>
    </div>
  );
}

export default App;
