import { useState } from "react";
import Item from "./Item";
import styles from "./MapList.module.css";

const MapList = ({ foodItems }) => {
  const [activeItems, setActiveItems] = useState([]);

  // foodItems = ["lucky", "divyanshu", "ajay"];

  // const foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // const foodItems = [];

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }

  // const emptyMessage =
  // foodItems.length === 0 ? <h3>I am Still Hungry.</h3> : null;

  // console.log(styles);

  const handleBuyButton = (foodItem, e) => {
    // console.log(`${foodItem} being bought....!!!!`);

    let newItems = [...activeItems, foodItem];

    setActiveItems(newItems);
  };
  return (
    <>
      {/* <h3 className={styles.food}>Food</h3> */}

      {/* {foodItems.length === 0 ? <h3>I am Still Hungry.</h3> : null} */}

      {/* {emptyMessage} */}

      {foodItems.length === 0 && <h3>I am Still Hungry</h3>}

      <ul className="list-group">
        {foodItems.map((item, i) => (
          <Item
            item={item}
            key={i}
            bought={activeItems.includes(item)}
            handleBuyButton={(e) => handleBuyButton(item, e)}
          />
        ))}
      </ul>
    </>
  );
};

export default MapList;
