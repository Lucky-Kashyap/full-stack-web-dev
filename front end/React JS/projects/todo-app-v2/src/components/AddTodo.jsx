import { useRef, useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";

const AddTodo = ({ todoItems, setTodoItems }) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  // const item = useRef(null);
  // const date = useRef(null);

  const addTodo = () => {
    // setTodoItems({
    //   name: item.current.value,
    //   date: date.current.value,
    //   ...todoItems,
    // });

    // const todo = {
    //   name: item.current.value,
    //   dueDate: date.current.value,
    // };

    // console.log(todo);

    const todo = {
      name: item,
      dueDate: date,
    };

    setTodoItems([...todoItems, todo]);

    setItem("");
    setDate("");

    // item.current.value = "";
    // date.current.value = "";
  };

  const handleItem = (e) => {
    setItem(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {/* <input type="text" ref={item} placeholder="Enter data" /> */}
          <input
            type="text"
            value={item}
            onChange={handleItem}
            placeholder="Enter data"
          />
        </div>
        <div className="col-4">
          {/* <input type="date" ref={date} /> */}
          <input type="date" value={date} onChange={handleDate} />
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
