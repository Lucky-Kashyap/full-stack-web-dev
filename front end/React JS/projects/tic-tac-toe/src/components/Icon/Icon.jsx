import React from "react";
import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";
const Icon = ({ name }) => {
  if (name === "circle") {
    return <FaRegCircle size={250} />;
  } else if (name === "cross") {
    return <FaTimes size={200} />;
  } else {
    return <FaPen size={200} />;
  }
};

export default Icon;
