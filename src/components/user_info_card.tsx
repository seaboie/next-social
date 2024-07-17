import ButtonDefault from "@/app/layout/button/button_default";
import ImageProfileExtraSmall from "@/app/layout/image/image_profile_extra_small";
import LayoutCard from "@/app/layout/layout/layout_card";
import LayoutImageProfileTitle from "@/app/layout/layout/layout_image_profile_title";
import LayoutTwoColumnBetween from "@/app/layout/layout/layout_two_column_between";
import TextBaseHead from "@/app/layout/text/text_base_head";
import TextExtraSmallHead from "@/app/layout/text/text_extra_small_head";
import TextExtraSmallHeadBold from "@/app/layout/text/text_extra_small_head_bold";
import TextSmallHead from "@/app/layout/text/text_small_head";
import TextTwoExtraLarge from "@/app/layout/text/text_two_extra_large";
import Link from "next/link";
import React from "react";

export default function UserInfoCard({ userId }: { userId: string }) {
  return (
    <LayoutCard>
      <LayoutTwoColumnBetween>
        <TextBaseHead text="User Information" />
        <Link href={`/`} className="text-blue-500 text-xs">
          See all
        </Link>
      </LayoutTwoColumnBetween>
      {/* NAME  */}
      <LayoutImageProfileTitle>
        <TextTwoExtraLarge text="Virginia Fisher" />
        <TextSmallHead text="@lamadev" />
      </LayoutImageProfileTitle>
      {/* DESCRIPTION  */}
      <TextExtraSmallHead text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iusto dicta suscipit quibusdam amet ea illo ratione libero asperiores officia eum?" />
      {/* ICON LOCATION  */}
      <LayoutImageProfileTitle>
        <ImageProfileExtraSmall url="/map.png" alt="somethings" />
        <TextExtraSmallHead text="Living in" />
        <TextExtraSmallHeadBold text="Denver." />
      </LayoutImageProfileTitle>
      {/* ICON HAT */}
      <LayoutImageProfileTitle>
        <ImageProfileExtraSmall url="/school.png" alt="somethings" />
        <TextExtraSmallHead text="Went to" />
        <TextExtraSmallHeadBold text="Edgar High School." />
      </LayoutImageProfileTitle>
      {/* ICON BAG  */}
      <LayoutImageProfileTitle>
        <ImageProfileExtraSmall url="/work.png" alt="somethings" />
        <TextExtraSmallHead text="Works at" />
        <TextExtraSmallHeadBold text="Apple Inc." />
      </LayoutImageProfileTitle>
      {/* ICON LINK  */}
      <LayoutTwoColumnBetween>
        <LayoutImageProfileTitle>
          <ImageProfileExtraSmall url="/link.png" alt="somethings" />
          <span className="text-blue-600 text-sm font-semibold">lama.dev</span>
        </LayoutImageProfileTitle>
        <LayoutImageProfileTitle>
          <ImageProfileExtraSmall url="/date.png" alt="somethings" />
          <TextExtraSmallHead text="Joined November 2024" />
        </LayoutImageProfileTitle>
      </LayoutTwoColumnBetween>
      {/* Button  */}
      <ButtonDefault text="Following" />
      <span className="self-end text-sm text-gray-500 cursor-pointer">Block User</span>
    </LayoutCard>
  );
}
