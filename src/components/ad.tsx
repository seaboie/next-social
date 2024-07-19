import ButtonLearnMore from "@/app/layout/button/button_learn_more";
import ImageContentFill from "@/app/layout/image/image_content_fill";
import ImageProfileSmall from "@/app/layout/image/image_profile_small";
import LayoutCard from "@/app/layout/layout/layout_card";
import LayoutImageProfileTitle from "@/app/layout/layout/layout_image_profile_title";
import LayoutTwoColumnBetween from "@/app/layout/layout/layout_two_column_between";
import TextBaseHead from "@/app/layout/text/text_base_head";
import TextExtraSmallHead from "@/app/layout/text/text_extra_small_head";
import Image from "next/image";
import React from "react";

export default function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <LayoutCard>
      {/* TOP  */}
      <LayoutTwoColumnBetween>
        <TextBaseHead text="Sponsored Ads."></TextBaseHead>
        <Image src={"/more.png"} width={18} height={18} alt="" priority />
      </LayoutTwoColumnBetween>
      {/* BOTTOM  */}
      <div className={`flex flex-col ${size === "sm" ? "gap-2" : "gap-4"}`}>
        {/* Image  */}
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src={
              "https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            }
            fill
            alt=""
            priority
            className="object-cover cursor-pointer rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* SUB Content  */}
        <LayoutTwoColumnBetween>
          <LayoutImageProfileTitle>
            <ImageProfileSmall
              url="https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt="Profile"
            />
            <TextBaseHead text="BigChef Lounge." />
          </LayoutImageProfileTitle>
          <div className=""></div>
        </LayoutTwoColumnBetween>
        {/* DESCRIPTION  */}
        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          {size === "sm"
            ? "SM Lorem ipsum dolor sit amet maiores! dolor sit amet Molestiae,LG"
            : size === "md"
            ? "MD Lorem ipsum dolor sit amet Molestiae,LG Lorem ipsum dolor sit amet consectetur maiores! sit amet consectetur adipisicing elit. Molestiae, maiores!"
            : "LG Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores! MD Lorem ipsum dolor sit amet Molestiae,LG Lorem ipsum dolor sit amet consectetur maiores! sit amet consectetur adipisicing elit. Molestiae, maiores"}
        </p>
        {/* BUTTON  */}
        <ButtonLearnMore text="Learn more" />
      </div>

      <div className="flex flex-col">
        {/* Example ......... IMAGE  */}
        <ImageContentFill
          url="https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="kritbovorn"
        />
        {/* SUB HEAD  */}
        <div className="flex flex-col gap-4">
          <LayoutTwoColumnBetween>
            <LayoutImageProfileTitle>
              <ImageProfileSmall
                url="https://images.pexels.com/photos/27000642/pexels-photo-27000642.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt="Profile"
              />
              <TextBaseHead text="Leonard Elliott" />
            </LayoutImageProfileTitle>
            <div className=""></div>
          </LayoutTwoColumnBetween>
          {/* SUB DESCRIPTION  */}
          <TextExtraSmallHead
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            aliquam repudiandae beatae necessitatibus corporis quibusdam omnis
            aspernatur, accusamus voluptates blanditiis."
          />
          {/* BUTTON  */}
          <ButtonLearnMore text="Learn more" />
        </div>
      </div>
      {/* BOTTOM  */}
    </LayoutCard>
  );
}
