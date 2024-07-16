import React from 'react'
import FriendRequests from './friend_requests';
import BirthDay from './birth_day';
import Ad from './ad';

export default function RightMenu({userId}: {userId?: string}) {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequests />
      <BirthDay />
      <Ad size='md'/>
    </div>
  );
}
