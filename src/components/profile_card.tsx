import ProfileCardWidget from "@/app/layout/widget/profile_card_widget";
import React from "react";

export default function ProfileCard() {
  return (
      <ProfileCardWidget
        coverImage="https://images.pexels.com/photos/26840789/pexels-photo-26840789.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        coverAlt="profile"
        profileImage="https://images.pexels.com/photos/23325663/pexels-photo-23325663.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        profileAlt="profile"
        followerCount="213"
        buttonTitle="My Profile"
        name="Nell Abbott"
      />
  );
}
