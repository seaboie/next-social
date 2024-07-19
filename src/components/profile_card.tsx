import ButtonDefault from "@/app/layout/button/button_default";
import ImageContentFill from "@/app/layout/image/image_content_fill";
import LayoutCard from "@/app/layout/layout/layout_card";
import TextExtraLarge from "@/app/layout/text/text_extra_large";
import TextExtraLargeSemiBold from "@/app/layout/text/text_extra_large_semi_bold";
import TextExtraSmallHead from "@/app/layout/text/text_extra_small_head";
import TextSmallHead from "@/app/layout/text/text_small_head";
import Image from "next/image";
import React from "react";

export default function ProfileCard() {
  return (
    <LayoutCard>
      <div className="relative h-20">
        <Image
          src={
            "https://images.pexels.com/photos/26840789/pexels-photo-26840789.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          }
          fill
          alt=""
          priority
          className="rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src={
            "https://images.pexels.com/photos/23325663/pexels-photo-23325663.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          }
          width={64}
          height={64}
          alt="somethings"
          priority
          className="absolute  w-16 h-16 rounded-full object-cover m-auto left-0 right-0 -bottom-8 ring-2 ring-white z-20"
        />
      </div>
      <div className="my-6 w-full h-20 flex items-center flex-col gap-2">
        <TextExtraLargeSemiBold text="Isabel Lyons" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image
              src={
                "https://images.pexels.com/photos/23325663/pexels-photo-23325663.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              }
              width={12}
              height={12}
              alt="somethings"
              priority
              className="w-3 h-3 rounded-full object-cover"
            />
            <Image
              src={
                "https://images.pexels.com/photos/23325663/pexels-photo-23325663.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              }
              width={12}
              height={12}
              alt="somethings"
              priority
              className="w-3 h-3 rounded-full object-cover"
            />
            <Image
              src={
                "https://images.pexels.com/photos/23325663/pexels-photo-23325663.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              }
              width={12}
              height={12}
              alt="somethings"
              priority
              className="w-3 h-3 rounded-full object-cover"
            />
          </div>
          <TextExtraSmallHead text="500 Followers" />
          
        </div>
        <ButtonDefault text="My Profile" />
      </div>
    </LayoutCard>
  );
}
