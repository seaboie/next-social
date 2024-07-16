import Link from "next/link";
import MobileMenu from "./mobile_menu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[50%] md:w-[20%] ">
        <Link href="/" className="font-bold text-xl text-blue-600">
          Kritbovorn Social
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        {/* LINKS  */}
        <div className="flex gap-6 text-gray-600">
          <Link href={`/`} className="flex items-center gap-2">
            <Image
              src={`/home.png`}
              alt="Homepage"
              width={4}
              height={4}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href={`/`} className="flex items-center gap-2">
            <Image
              src={`/friends.png`}
              alt="friends"
              width={4}
              height={4}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href={`/`} className="flex items-center gap-2">
            <Image
              src={`/stories.png`}
              alt="Stories"
              width={4}
              height={4}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        <ClerkLoading>
          {/* <div className="inline-block w-4 h-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" /> */}
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={`/people.png`} alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src={`/messages.png`} alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src={`/notifications.png`} alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src={`/people.png`} alt="" width={20} height={20} />
              <Link href={`/sign-in`}>Login / Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
}
