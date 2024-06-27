import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../ui/Spotlight";


export function LightEffect() {
  return (
    <div className="h-[40rem] w-screen rounded-md flex md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    </div>
  );
}
