const Card = () => {
  const number = Math.floor(Math.random() * 10);
  return (
    <div>
      <h2 style={{ backgroundColor: "#777688" }}>
        Random Number is : {number}
      </h2>
    </div>
  );
};

export default Card;
