import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Card = () => {
  return (
    <div className="relative w-60 h-72 overflow-hidden rounded-[50px] bg-zinc-900/90 text-white px-8 py-10">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-4 font-semibold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quos ad
        aspernatur
      </p>
      <div className="footer absolute bottom-0 w-full  py-3 px-8 left-0">
        <div className="flex items-center justify-between mb-5">
          <h5>.4mb</h5>
          <span className="w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center">
            <LuDownload />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
