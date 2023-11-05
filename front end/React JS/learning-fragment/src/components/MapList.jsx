const MapList = () => {
  const foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

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
