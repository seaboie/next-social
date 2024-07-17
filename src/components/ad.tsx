import Image from "next/image";
import React from "react";

export default function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* TOP  */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="text-lg font-bold text-gray-500">Sponsored Ads.</span>
        <Image src={"/more.png"} width={18} height={18} alt="" priority />
      </div>
      {/* BOTTOM  */}
      <div
        className={`mt-4 flex flex-col ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        {/* Image  */}
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src={
              "https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover cursor-pointer rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* SUB HEAD  */}
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            width={24}
            height={24}
            alt=""
            priority
            className="w-6 h-6 object-cover cursor-pointer rounded-full"
          />
          <span className="text-blue-500 font-medium">BigChef Lounge.</span>
        </div>
        {/* DESCRIPTION  */}
        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          {size === "sm"
            ? "SM Lorem ipsum dolor sit amet maiores!"
            : size === "md"
            ? "MD Lorem ipsum dolor sit amet Molestiae,LG Lorem ipsum dolor sit amet consectetur maiores! sit amet consectetur adipisicing elit. Molestiae, maiores!"
            : "LG Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores! MD Lorem ipsum dolor sit amet Molestiae,LG Lorem ipsum dolor sit amet consectetur maiores! sit amet consectetur adipisicing elit. Molestiae, maiores"}
        </p>
        {/* BUTTON  */}
        <button className="p-2 bg-gray-200 text-gray-500 text-sm rounded-lg font-bold">
          Learn more
        </button>
      </div>

      {/* Example ......... IMAGE  */}
      <div className="my-6 w-full relative aspect-video">
        <Image
          src={
            "https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          }
          fill
          alt=""
          priority
          className="object-cover cursor-pointer rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {/* SUB HEAD  */}
      <div className="flex items-center gap-2 text-xs">
        <Image
          src={
            "https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          }
          width={0}
          height={0}
          alt=""
          priority
          className="w-5 h-5 object-cover rounded-full"
        />
        <span className="flex-1">BigChef Lounge</span>
      </div>
      {/* SUB DESCRIPTION  */}
      <div className="mt-2 text-xs">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          aliquam repudiandae beatae necessitatibus corporis quibusdam omnis
          aspernatur, accusamus voluptates blanditiis.
        </span>
      </div>

      <div className="flex self-stretch">
        <button className="my-4 p-2 w-full bg-gray-200 text-gray-500 text-sm font-bold rounded-lg">
          Learn more
        </button>
      </div>

      {/* BOTTOM  */}
    </div>
  );
}
