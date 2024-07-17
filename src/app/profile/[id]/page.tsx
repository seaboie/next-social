import Feed from "@/components/feed";
import LeftMenu from "@/components/left_menu";
import RightMenu from "@/components/right_menu";
import React from "react";

export default function ProfilePage() {
  return (
    <div className="flex gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
}
