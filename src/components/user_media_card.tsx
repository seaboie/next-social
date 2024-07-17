import ImageContentFillVertical from "@/app/layout/image/image_content_fill_vertical";
import LayoutCard from "@/app/layout/layout/layout_card";
import LayoutTwoColumnBetween from "@/app/layout/layout/layout_two_column_between";
import TextBaseHead from "@/app/layout/text/text_base_head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserMediaCard({ userId }: { userId: string }) {
  return (
    <LayoutCard>
      {/* TOP HEAD */}
      <LayoutTwoColumnBetween>
        <TextBaseHead text="User Media" />
        <Link href={`/`} className="text-blue-500 text-xs">
          See all
        </Link>
      </LayoutTwoColumnBetween>
      {/* BOTTOM  */}
      <div className="flex justify-evenly gap-2 flex-wrap">
        {/* 1 */}
        {/* <div className="relative w-1/5 h-24"> */}
        <ImageContentFillVertical
          url="https://images.pexels.com/photos/14524370/pexels-photo-14524370.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="somethings"
        />
        {/* 2 */}
        <ImageContentFillVertical
          url="https://images.pexels.com/photos/27011329/pexels-photo-27011329.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="somethings"
        />
        {/* 3 */}
        <ImageContentFillVertical
          url="https://images.pexels.com/photos/19342868/pexels-photo-19342868.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="somethings"
        />
        {/* 4 */}
        <ImageContentFillVertical
          url="https://images.pexels.com/photos/7301825/pexels-photo-7301825.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="somethings"
        />
        {/* 5 */}
        <ImageContentFillVertical
          url="https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="somethings"
        />
        {/* 6 */}
        <ImageContentFillVertical
          url="https://images.pexels.com/photos/26929075/pexels-photo-26929075.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="somethings"
        />
        {/* 7 */}
        <ImageContentFillVertical
          url="https://images.pexels.com/photos/27114459/pexels-photo-27114459.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="somethings"
        />
        {/* 8 */}
        <ImageContentFillVertical
          url="https://images.pexels.com/photos/26245942/pexels-photo-26245942.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="somethings"
        />
      </div>
    </LayoutCard>
  );
}
