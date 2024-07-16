import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="w-full h-[calc(100vh-96px)] flex items-center justify-center">
      <SignIn />
    </div>
  );
}
