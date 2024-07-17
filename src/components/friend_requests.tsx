import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FriendRequests() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-lg font-bold text-gray-500">Friend Requests.</span>
        <Link href={`/`} className="text-blue-500 text-xs">
          See all
        </Link>
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
          <Image
               src={"/accept.png"}
               width={0}
               height={0}
               alt=''
               priority
               className='w-4 h-4 cursor-pointer'
             />
             <Image
                  src={"/reject.png"}
                  width={0}
                  height={0}
                  alt=''
                  priority
                  className='w-4 h-4 cursor-pointer'
                />
        </div>
      </div>
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
          <Image
               src={"/accept.png"}
               width={0}
               height={0}
               alt=''
               priority
               className='w-4 h-4 cursor-pointer'
             />
             <Image
                  src={"/reject.png"}
                  width={0}
                  height={0}
                  alt=''
                  priority
                  className='w-4 h-4 cursor-pointer'
                />
        </div>
      </div>
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
          <Image
               src={"/accept.png"}
               width={0}
               height={0}
               alt=''
               priority
               className='w-4 h-4 cursor-pointer'
             />
             <Image
                  src={"/reject.png"}
                  width={0}
                  height={0}
                  alt=''
                  priority
                  className='w-4 h-4 cursor-pointer'
                />
        </div>
      </div>
    </div>
  );
}
