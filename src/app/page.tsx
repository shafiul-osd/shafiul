"use client";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import { LightEffect } from "@/components/LightEffect/LightEffect";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { Background } from "@/components/ui/Background";
import { TextGenerateEffect } from "@/components/ui/text-generate-Effect";
import { motion } from "framer-motion";
import { IoSettingsOutline } from "react-icons/io5";
import * as React from "react";

import { useTheme } from "next-themes";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main className="relative overflow-hidden" id="home">
      <Background className="">
        <div className="rounded-md flex items-center justify-center absolute left-0 top-0">
          <LightEffect />
        </div>

        <Hero />
        <About />
        <div className="fixed left-5 md:left-20 top-14">
          <a
            className=" text-xl md:text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-r from-green-500 via-blue-500 to-purple font-bold"
            href="#home"
          >
            Azizul Haque
          </a>
        </div>
        <div
          className="fixed right-5 md:right-20 top-14 text-2xl animate-spin"
          onClick={() => setTheme("dark")}
        >
          <IoSettingsOutline />
        </div>

        <a className="bottom-16 right-10 fixed animate animate-bounce" href="#home">
          <button className="w-10 h-10 rounded-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] p-4 text-3xl flex items-center justify-center bg-[#0070f3] text-white font-light transition duration-200 ease-linear">
            <div>
            <IoIosArrowRoundUp />
            </div>
          </button>
        </a>
      </Background>
    </main>
  );
}
