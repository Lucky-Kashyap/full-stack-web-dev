import styles from "./NoItems.module.css";

const NoITems = ({ todoItems }) => {
  return (
    <>
      {" "}
      <p className={styles.noitem}>Enjoy Your Day</p>
      {todoItems.length === 0 && (
        <h2>There is nothing else to show you can add</h2>
      )}
    </>
  );
};

export default NoITems;
