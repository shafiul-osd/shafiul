"use client"
import { LightEffect } from "@/components/LightEffect/LightEffect";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Background ,Highlight} from "@/components/ui/Background";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen">
      <LightEffect/>
    </main>
  );
}
