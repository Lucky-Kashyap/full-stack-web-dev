import styles from "./Item.module.css";

const Item = ({ item, handleBuyButton, bought }) => {
  // const handleBuyButton = (item) => {
  //   console.log(`${item} being bought....!!!!`);
  // };

  return (
    <li className={`${styles.foodItem} list-group-item ${bought && "active"}`}>
      {item}
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={() => console.log(`${item} Bought...!!!`)}
        // onClick={() => handleBuyButton(item)}
        // onClick={() => handleBuyButton(item)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
