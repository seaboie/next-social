import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <div className="">
      {/* WRITE  */}
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/19823330/pexels-photo-19823330.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          }
          width={0}
          height={0}
          alt=""
          priority
          className="w-8 h-8 rounded-full"
        />
        <div className="p-2 w-full flex items-center justify-between bg-slate-100 rounded-xl text-sm">
          <input
            type="text"
            name=""
            id=""
            placeholder="Write a comment ..."
            className="flex-1 bg-transparent outline-none"
          />
          <Image
            src={"/emoji.png"}
            width={16}
            height={16}
            alt=""
            priority
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS  */}
      <div className=""></div>
    </div>
  );
}
