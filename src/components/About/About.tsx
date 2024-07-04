import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Background } from "../ui/Background";
import { AboutBg } from "../ui/about-bg";
import { HeroEffectBox } from "../ui/HeroEffectBox";
import { LinkPreview } from "../ui/link-preview";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-Effect";
import { Button } from "../ui/moving-border-button";
import { LightEffect } from "../LightEffect/LightEffect";

const About = () => {
  return (
    <div className="w-[95vw] mx-auto relative my-32" id="about">
      <SectionTitle title="About me" />

      <div className="grid lg:grid-cols-3 my-12 md:gap-20  dark:bg-zinc-900 backdrop-blur-[1px] border border-[rgba(255,255,255,0.1)] md:p-5 rounded-[10px]">
        <div className="absolute">
          <LightEffect color="white" position="-top-24 -right-60" />
        </div>
        <div className="">
          <Image
            src="/images/ajijul.png"
            width="400"
            height="400"
            className="rounded-lg w-full"
            alt="ajijul.png"
          />
        </div>
        <div className="pb-10 md:pb-0 px-2 lg:col-span-2 flex flex-col items-start justify-between md:justify-around gap-y-2">
          <h2 className=" text-xl md:text-2xl my-10">
            <TextGenerateEffect words="Want to Know About Me?" />
          </h2>
          <p className="">
            My name is Ajijul Islam, and I am a junior MERN stack developer with
            a passion for creating dynamic and responsive web applications.
            Since starting my journey in web development, I have honed my skills
            in MongoDB, Express.js, React.js, and Node.js. I am dedicated to
            writing clean, efficient, and maintainable code, always striving to
            enhance the user experience.
          </p>
          <p className="">
            My enthusiasm for technology drives me to continuously learn and
            adopt the latest tools and frameworks. I am excited about building
            innovative solutions and contributing to projects that make a
            difference in the digital world.
          </p>
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
