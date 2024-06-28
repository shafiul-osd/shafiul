"use client";
import Hero from "@/components/Hero/Hero";
import { LightEffect } from "@/components/LightEffect/LightEffect";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Background, Highlight } from "@/components/ui/Background";
import { TextGenerateEffect } from "@/components/ui/text-generate-Effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-[40rem] w-full rounded-md flex items-center justify-center absolute left-0 top-0">
        <LightEffect />
     
      </div>
      <Hero />
    </main>
  );
}
