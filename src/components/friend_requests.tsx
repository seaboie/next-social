import ImageIconSmall from "@/app/layout/image/image_icon_small";
import ImageProfileMedium from "@/app/layout/image/image_profile_medium";
import LayoutCard from "@/app/layout/layout/layout_card";
import LayoutImageProfileTitle from "@/app/layout/layout/layout_image_profile_title";
import LayoutTwoColumnBetween from "@/app/layout/layout/layout_two_column_between";
import TextBaseHead from "@/app/layout/text/text_base_head";
import TextSmallHead from "@/app/layout/text/text_small_head";
import Link from "next/link";
import React from "react";

export default function FriendRequests() {
  return (
    <LayoutCard>
      {/* TOP  */}
      <LayoutTwoColumnBetween>
        <TextBaseHead text="Friend Requests." />
        <Link href={`/`} className="text-blue-500 text-xs">
          See all
        </Link>
      </LayoutTwoColumnBetween>
      {/* USER  */}
      <LayoutTwoColumnBetween>
        <LayoutImageProfileTitle>
          <ImageProfileMedium
            url="https://images.pexels.com/photos/26871563/pexels-photo-26871563.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
          />
          <TextSmallHead text="Dora Wong" />
        </LayoutImageProfileTitle>
        <div className="flex justify-end gap-3">
          <ImageIconSmall url="/accept.png" />
          <ImageIconSmall url="/reject.png" />
        </div>
      </LayoutTwoColumnBetween>
      <div className="flex items-center justify-between">
        <LayoutImageProfileTitle>
          <ImageProfileMedium
            url="https://images.pexels.com/photos/26871563/pexels-photo-26871563.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
          />
          <TextSmallHead text="Howard Harrison" />
        </LayoutImageProfileTitle>
        <div className="flex justify-end gap-3">
          <ImageIconSmall url="/accept.png" />
          <ImageIconSmall url="/reject.png" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <LayoutImageProfileTitle>
          <ImageProfileMedium
            url="https://images.pexels.com/photos/26871563/pexels-photo-26871563.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
          />
          <TextSmallHead text="Alfred Griffith" />
        </LayoutImageProfileTitle>
        <div className="flex gap-3">
          <ImageIconSmall url="/accept.png" />
          <ImageIconSmall url="/reject.png" />
        </div>
      </div>
    </LayoutCard>
  );
}
