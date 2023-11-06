function TodoItem({ todoName, todoDate }) {
  // const handleDelete = (todoName) => {
  //   const todo = todoItems.filter((item) => item.name !== todoName);
  //   setTodoItems(todo);
  // };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
