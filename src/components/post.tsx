import Image from "next/image";
import React from "react";
import Comments from "./comments";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/26929075/pexels-photo-26929075.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            width={40}
            height={40}
            alt=""
            priority
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src={"/more.png"} width={16} height={16} alt="" priority />
      </div>
      {/* DESC  */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/25772520/pexels-photo-25772520.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe
          nulla maiores expedita natus corrupti iste repellendus itaque. Error
          asperiores reprehenderit praesentium recusandae. Quis eum architecto,
          ex nesciunt officiis enim.
        </p>
      </div>
      {/* INTERACTION  */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="p-2 flex items-center gap-4 bg-slate-50 rounded-xl">
            <Image
              src={"/like.png"}
              width={16}
              height={16}
              alt=""
              priority
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="p-2 flex items-center gap-4 bg-slate-50 rounded-xl">
            <Image
              src={"/comment.png"}
              width={16}
              height={16}
              alt=""
              priority
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="p-2 flex items-center gap-4 bg-slate-50 rounded-xl">
            <Image
              src={"/share.png"}
              width={16}
              height={16}
              alt=""
              priority
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>

      {/* COMMENT  */}
      <Comments />
    </div>
  );
}
