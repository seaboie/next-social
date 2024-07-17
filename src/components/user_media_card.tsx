import LayoutCard from "@/app/layout/layout/layout_card";
import LayoutTwoColumnBetween from "@/app/layout/layout/layout_two_column_between";
import TextBaseHead from "@/app/layout/text/text_base_head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserMediaCard({ userId }: { userId: string }) {
  return (
    <LayoutCard>
      {/* TOP HEAD */}
      <LayoutTwoColumnBetween>
        <TextBaseHead text="User Media" />
        <Link href={`/`} className="text-blue-500 text-xs">
          See all
        </Link>
      </LayoutTwoColumnBetween>
      {/* BOTTOM  */}
      <div className="flex justify-evenly gap-2 flex-wrap">
        {/* 1 */}
        {/* <div className="relative w-1/5 h-24"> */}
        <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
          <Image
            src={
              "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* 2 */}
        <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
          <Image
            src={
              "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* 3 */}
        <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
          <Image
            src={
              "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* 4 */}
        <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
          <Image
            src={
              "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* 5 */}
        <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
          <Image
            src={
              "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* 6 */}
        <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
          <Image
            src={
              "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* 7 */}
        <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
          <Image
            src={
              "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* 8 */}
        <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
          <Image
            src={
              "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </LayoutCard>
  );
}
