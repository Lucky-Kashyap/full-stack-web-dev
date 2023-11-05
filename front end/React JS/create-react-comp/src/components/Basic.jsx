const Basic = () => {
  const mentor = "Prashant";

  const number = 456;

  const fullName = () => {
    return "Prashant Jain";
  };

  return (
    <>
      <h3>
        Hello this is best React Course by : {mentor} message no. {number}
        calling function {fullName()}
      </h3>
    </>
  );
};

export default Basic;
