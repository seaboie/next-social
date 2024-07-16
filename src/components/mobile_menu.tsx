"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={`ease-in-out duration-500 w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left`}></div>
        <div className={`ease-in-out duration-500 w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""}`}></div>
        <div className={`ease-in-out duration-500 w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left`}></div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-24 w-full bottom-0 bg-white flex items-center justify-center font-medium text-xl z-10">
          <div className="flex flex-col items-center justify-center gap-8">
            <Link href="">Home</Link>
            <Link href="">Friends</Link>
            <Link href="">Groups</Link>
            <Link href="">Stories</Link>
            <Link href="">Login</Link>
          </div>
        </div>
      )}
    </div>
  );
}
