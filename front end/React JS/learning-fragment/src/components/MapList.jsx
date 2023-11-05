const MapList = () => {
  // const foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  const foodItems = [];

  if (foodItems.length === 0) {
    return <h3>I am still hungry</h3>;
  }

  return (
    <>
      <h3>Food</h3>

      <ul className="list-group">
        {foodItems.map((item, i) => (
          <li className="list-group-item" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapList;
