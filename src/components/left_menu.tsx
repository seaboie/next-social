import React from "react";
import ProfileCard from "./profile_card";
import LayoutCard from "@/app/layout/layout/layout_card";
import Link from "next/link";
import LayoutImageProfileTitleMedium from "@/app/layout/layout/layout_image_profile_title_medium";
import ImageProfileSmall from "@/app/layout/image/image_profile_small";
import TextSmallHead from "@/app/layout/text/text_small_head";
import Ad from "./ad";
import ProfileCardMediumWidget from "@/app/layout/widget/profile_card_medium_widget";

export default function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" ? <ProfileCard /> : null}
      <LayoutCard>
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/posts.png" alt="Somethings" />
            <TextSmallHead text="My Posts" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
        {/* 2 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/activity.png" alt="Somethings" />
            <TextSmallHead text="Activities" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />

        {/* 3 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/market.png" alt="Somethings" />
            <TextSmallHead text="Marketplace" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />

        {/* 4 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/events.png" alt="Somethings" />
            <TextSmallHead text="Events" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />

        {/* 5 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/albums.png" alt="Somethings" />
            <TextSmallHead text="Albums" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />

        {/* 6 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/videos.png" alt="Somethings" />
            <TextSmallHead text="Videos" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />

        {/* 7 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/news.png" alt="Somethings" />
            <TextSmallHead text="News" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />

        {/* 8 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/courses.png" alt="Somethings" />
            <TextSmallHead text="Courses" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
        {/* 9 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/lists.png" alt="Somethings" />
            <TextSmallHead text="Lists" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
        {/* 10 */}
        <Link href={`/`} className="p-2 hover:bg-slate-100 rounded-lg">
          <LayoutImageProfileTitleMedium>
            <ImageProfileSmall url="/settings.png" alt="Somethings" />
            <TextSmallHead text="Settings" />
          </LayoutImageProfileTitleMedium>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
      </LayoutCard>
      <Ad size={"sm"} />
    </div>
  );
}
