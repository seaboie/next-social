import Image from "next/image";
import React from "react";

export default function ImageProfileSmall({
  url,
  alt,
}: {
  url: string;
  alt: string;
}) {
  return (
    <Image
      src={url}
      width={0}
      height={0}
      alt={alt}
      priority
      className="w-8 h-8 object-cover cursor-pointer rounded-full"
    />
  );
}
