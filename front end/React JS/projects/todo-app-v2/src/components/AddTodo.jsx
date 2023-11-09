import { useRef } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";

const AddTodo = ({ todoItems, setTodoItems }) => {
  const item = useRef(null);
  const date = useRef(null);

  const addTodo = () => {
    // setTodoItems({
    //   name: item.current.value,
    //   date: date.current.value,
    //   ...todoItems,
    // });

    const todo = {
      name: item.current.value,
      dueDate: date.current.value,
    };

    // console.log(todo);

    setTodoItems([...todoItems, todo]);

    item.current.value = "";
    date.current.value = "";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="text" ref={item} placeholder="Enter data" />
        </div>
        <div className="col-4">
          <input type="date" ref={date} />
        </div>
        <div className="col-2">
          <button className="btn btn-success add" onClick={addTodo}>
            <BiMessageSquareAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
