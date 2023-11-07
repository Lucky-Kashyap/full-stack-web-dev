import styles from "./Item.module.css";

const Item = ({ item, handleBuyButton }) => {
  // const handleBuyButton = (item) => {
  //   console.log(`${item} being bought....!!!!`);
  // };

  return (
    <li className={`${styles.foodItem}`}>
      {item}
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={() => console.log(`${item} Bought...!!!`)}
        // onClick={() => handleBuyButton(item)}
        onClick={() => handleBuyButton(item)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
