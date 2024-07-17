import ImageProfileMedium from "@/app/layout/image/image_profile_medium";
import ImageProfileSmall from "@/app/layout/image/image_profile_small";
import LayoutCard from "@/app/layout/layout/layout_card";
import LayoutImageProfileTitle from "@/app/layout/layout/layout_image_profile_title";
import LayoutSpecialImageTitleDescription from "@/app/layout/layout/layout_special_image_title_description";
import LayoutTwoColumnBetween from "@/app/layout/layout/layout_two_column_between";
import TextBaseHead from "@/app/layout/text/text_base_head";
import TextSmallHead from "@/app/layout/text/text_small_head";
import Link from "next/link";
import React from "react";

export default function BirthDay() {
  return (
    <LayoutCard>
      {/* TOP  */}
      <LayoutTwoColumnBetween>
        <TextBaseHead text="Birthdays" />
      </LayoutTwoColumnBetween>
      {/* USER  */}
      <LayoutTwoColumnBetween>
        <LayoutImageProfileTitle>
          <ImageProfileMedium
            url="https://images.pexels.com/photos/26871563/pexels-photo-26871563.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
          />
          <TextSmallHead text="Ernest Buchanan" />
        </LayoutImageProfileTitle>
        <button className="px-2 py-1 bg-blue-500 text-white text-sm rounded-md">
          Celebrate
        </button>
      </LayoutTwoColumnBetween>
      {/* UPCOMING GIFT */}
      <LayoutSpecialImageTitleDescription>
        <ImageProfileSmall url="/gift.png" alt="" />
        <Link href={`/`} className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays.
          </span>
          <span className="text-gray-500">
            Lorem ipsum dolor sit consectetur
          </span>
        </Link>
      </LayoutSpecialImageTitleDescription>
    </LayoutCard>
  );
}
