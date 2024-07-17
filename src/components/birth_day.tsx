import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BirthDay() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-lg font-bold text-gray-500">Birthdays</span>
      </div>
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/26871563/pexels-photo-26871563.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            width={0}
            height={0}
            alt=""
            priority
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Ernest Buchanan</span>
        </div>
        <div className="flex justify-end gap-3">
          <button className="px-2 py-1 bg-blue-500 text-white text-sm rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING  */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image
          src={"/gift.png"}
          width={24}
          height={24}
          alt=""
          priority
          className=""
        />
        <Link href={`/`} className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays.
          </span>
          <span className="text-gray-500">
            Lorem ipsum dolor sit consectetur
          </span>
        </Link>
      </div>
    </div>
  );
}
