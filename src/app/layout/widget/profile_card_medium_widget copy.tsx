import React from "react";
import Image from "next/image";
import TextTwoExtraLargeSemiBold from "../text/text_two_extra_large_semi_bold";

export default function ProfileCardMediumWidget({
  coverImage,
  coverAlt,
  profileImage,
  profileAlt,
  name,
  followerCount,
  buttonTitle,
}: {
  coverImage: string;
  coverAlt: string;
  profileImage: string;
  profileAlt: string;
  name: string;
  followerCount: string;
  buttonTitle: string;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="relative w-full"
        style={{ aspectRatio: 1 / 0.6 }}
      >
        {/* Image Cover */}
        <div className="relative w-full h-1/2">
          <Image
            src={coverImage}
            fill
            alt={coverAlt}
            priority
            className="rounded-t-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-1/2 flex flex-col items-center justify-center">
          <div className="h-2/5 w-full"></div>
          <div className="h-3/5 w-full flex flex-col items-center">
            <TextTwoExtraLargeSemiBold text="Jane Gibbs"/>
            <div className="flex items-center gap-8">
                <div className="flex flex-col text-xs items-center justify-evenly">
                    <div className="">142</div>
                    <div className="">Posts</div>
                </div>
                <div className="flex flex-col text-xs items-center justify-evenly">
                    <div className="">1.2 K</div>
                    <div className="">Followers</div>
                </div>
                <div className="flex flex-col text-xs items-center justify-evenly">
                    <div className="">1.4 K</div>
                    <div className="">Following</div>
                </div>
            </div>
          </div>
        </div>
        <Image
          src={profileImage}
          width={200}
          height={200}
          alt={profileAlt}
          priority
          className="absolute  w-1/5  rounded-full object-cover m-auto left-0 right-0 ring-2 ring-white z-20 bottom-1/3"
          style={{ aspectRatio: 1 / 1 }}
        />
      </div>
      
    </div>
  );
}
