import Image from "next/image";
import React from "react";

export default function ImageIconSmall({ url }: { url: string }) {
  return (
    <Image
      src={url}
      width={0}
      height={0}
      alt=""
      priority
      className="w-4 h-4 object-cover cursor-pointer"
    />
  );
}
