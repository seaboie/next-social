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
        <div className="p-2 w-full flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm">
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
      <div className="">
        {/* COMMENT  */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR  */}
          <Image
            src={
              "https://images.pexels.com/photos/19823330/pexels-photo-19823330.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            width={0}
            height={0}
            alt=""
            priority
            className="w-10 h-10 rounded-full"
          />
          {/* DESCRIPTION  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spencer.</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis aliquam repudiandae beatae necessitatibus corporis
              quibusdam omnis aspernatur, accusamus voluptates blanditiis.
            </p>
            <div className="mt-2 flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  width={0}
                  height={0}
                  alt=""
                  priority
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes.</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON  */}
          <Image
            src={"/more.png"}
            width={0}
            height={0}
            alt=""
            priority
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
