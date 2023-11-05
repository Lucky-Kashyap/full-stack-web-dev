const ClockTimeDate = () => {
  const dateObj = new Date();

  const date = dateObj.toLocaleDateString();

  const time = dateObj.toLocaleTimeString();

  return (
    <p className="lead">
      This is the current time: {date} - {time}
    </p>
  );
};

export default ClockTimeDate;
