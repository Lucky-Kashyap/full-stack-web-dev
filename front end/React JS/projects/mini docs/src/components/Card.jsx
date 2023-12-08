import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 overflow-hidden rounded-[45px] bg-zinc-900/90 text-white px-8 py-10"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-4 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-900 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size={"3em"} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            {" "}
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
