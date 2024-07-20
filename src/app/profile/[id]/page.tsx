import ProfileCardMediumWidget from "@/app/layout/widget/profile_card_medium_widget";
import Feed from "@/components/feed";
import LeftMenu from "@/components/left_menu";
import RightMenu from "@/components/right_menu";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <ProfileCardMediumWidget
            coverImage="https://images.pexels.com/photos/19730924/pexels-photo-19730924.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            coverAlt="profile"
            profileImage="https://images.pexels.com/photos/23325663/pexels-photo-23325663.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            profileAlt="profile"
            posts="210"
            follower="213"
            following="123"
            name="Nell Abbott"
          />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
}
