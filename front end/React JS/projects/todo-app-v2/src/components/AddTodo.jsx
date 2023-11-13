import { useRef, useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";

const AddTodo = ({ todoItems, setTodoItems }) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  const noOfUpdates = useRef(0);

  // const item = useRef(null);
  // const date = useRef(null);

  const addTodo = (e) => {
    e.preventDefault();
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
    noOfUpdates.current += 1;
  };
  const handleDate = (e) => {
    setDate(e.target.value);

    console.log(`noOfUpdates are : ${noOfUpdates.current}`);
  };

  return (
    <div className="container">
      {/* <div className="row"> */}
      <form className="row" onSubmit={addTodo}>
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
          <button
            className="btn btn-success add"
            // onClick={addTodo}
            // onSubmit={addTodo}
          >
            <BiMessageSquareAdd />
          </button>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default AddTodo;
