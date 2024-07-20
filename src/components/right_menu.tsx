import React from "react";
import FriendRequests from "./friend_requests";
import BirthDay from "./birth_day";
import Ad from "./ad";
import UserInfoCard from "./user_info_card";
import UserMediaCard from "./user_media_card";
import ProfileCard from "./profile_card";
import ProfileCardMediumWidget from "@/app/layout/widget/profile_card_medium_widget";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <BirthDay />
      <Ad size="md" />
      <ProfileCard />
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
    </div>
  );
}
