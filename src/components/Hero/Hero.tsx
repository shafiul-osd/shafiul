import React from "react";
import { HeroEffectBox } from "../ui/HeroEffectBox";
import { LightEffect } from "../LightEffect/LightEffect";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-Effect";

const Hero = () => {
  return (
    <div className="  w-screen relative h-screen flex items-center justify-center">
      <div className=" relative flex flex-col items-center justify-center ">
        <div className="w-[80vw] absolute inset-0 h-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="  w-[80vw] relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src="/images/avatar.webp"
              height={220}
              width={220}
              alt="avatar"
              className="mx-auto bg-white-100 rounded-full"
            />
            <div className="">
              <TextGenerateEffect
                words="Md. Ajijul Islam (Coder)"
                className="text-2xl"
              />
            </div>
          </div>

          <HeroEffectBox number={50} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
