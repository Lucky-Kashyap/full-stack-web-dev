import React from "react";
import Card from "./Card";

const Foreground = () => {
  // const data = [
  //   {
  //     desc,filesize,closeordownload, tagdetails
  //   }
  // ]

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "43mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "23mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "19mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5">
      {/* <Card /> */}
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default Foreground;
