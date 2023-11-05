const AddTodo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter data" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
