import React from "react";
import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";
const Icon = ({ name }) => {
  if (name === "circle") {
    return <FaRegCircle />;
  } else if (name === "cross") {
    return <FaTimes />;
  } else {
    return <FaPen />;
  }
};

export default Icon;
