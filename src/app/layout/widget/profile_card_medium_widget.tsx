import React from "react";
import Image from "next/image";
import TextTwoExtraLargeSemiBold from "../text/text_two_extra_large_semi_bold";
import TextExtraSmallHead from "../text/text_extra_small_head";
import ButtonDefault from "../button/button_default";
import LayoutCard from "../layout/layout_card";
import TextExtraLargeSemiBold from "../text/text_extra_large_semi_bold";

export default function ProfileCardMediumWidget({
  coverImage,
  coverAlt,
  profileImage,
  profileAlt,
  name,
  posts,
  follower,
  following,
}: {
  coverImage: string;
  coverAlt: string;
  profileImage: string;
  profileAlt: string;
  name: string;
  posts: string;
  follower: string;
  following: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-t-md">
      <div className="relative w-full h-64">
        <Image
          src={
            "https://images.pexels.com/photos/19730924/pexels-photo-19730924.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          }
          fill
          alt=""
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src={
            "https://images.pexels.com/photos/23325663/pexels-photo-23325663.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          }
          width={112}
          height={112}
          alt=""
          priority
          className="absolute w-28 h-28 rounded-full left-0 right-0 m-auto ring-4 ring-white object-cover -bottom-16 "
        />
      </div>
      <div className="mt-20 text-2xl font-medium">{name}</div>
      <div className="my-4 flex items-center justify-center gap-12">
        <div className="flex flex-col text-xs items-center justify-evenly">
          <div className="text-base font-semibold">{posts}</div>
          <div className="">Posts</div>
        </div>
        <div className="flex flex-col text-xs items-center justify-evenly">
          <div className="text-base font-semibold">{follower} K</div>
          <div className="">Followers</div>
        </div>
        <div className="flex flex-col text-xs items-center justify-evenly">
          <div className="text-base font-semibold">{following} K</div>
          <div className="">Following</div>
        </div>
      </div>
    </div>
  );
}
