import ButtonDefault from "@/app/layout/button/button_default";
import ImageContentFill from "@/app/layout/image/image_content_fill";
import LayoutCard from "@/app/layout/layout/layout_card";
import TextExtraLargeSemiBold from "@/app/layout/text/text_extra_large_semi_bold";
import TextExtraSmallHead from "@/app/layout/text/text_extra_small_head";
import TextSmallHead from "@/app/layout/text/text_small_head";
import ProfileCardWidget from "@/app/layout/widget/profile_card_widget";
import Image from "next/image";
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
