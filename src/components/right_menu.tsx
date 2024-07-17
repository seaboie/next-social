import React from "react";
import FriendRequests from "./friend_requests";
import BirthDay from "./birth_day";
import Ad from "./ad";
import UserInfoCard from "./user_info_card";
import UserMediaCard from "./user_media_card";

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
    </div>
  );
}
