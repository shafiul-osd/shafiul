"use client";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import { LightEffect } from "@/components/LightEffect/LightEffect";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { Background} from "@/components/ui/Background";
import { TextGenerateEffect } from "@/components/ui/text-generate-Effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative">
      <Background className="">
        <div className="rounded-md flex items-center justify-center absolute left-0 top-0">
          <LightEffect />
        </div>

        <Hero />
        <About />
      </Background>
    </main>
  );
}
