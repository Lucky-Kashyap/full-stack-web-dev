import { useEffect } from "react";
import { useState } from "react";

const ClockTimeDate = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    // console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // const dateObj = new Date();

  const date = timer.toLocaleDateString();

  const time = timer.toLocaleTimeString();

  return (
    <p className="lead">
      This is the current time: {date} - {time}
    </p>
  );
};

export default ClockTimeDate;
