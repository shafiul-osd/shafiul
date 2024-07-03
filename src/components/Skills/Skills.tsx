import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import {MovingCards} from "@/components/ui/moving-card"
import { Boxbg } from "../ui/boxBg";

const Skills = () => {
  return (
    <div className="my-20">
      <div className="my-20">
        <SectionTitle title="Skills" />
      </div>
      <div>
      <MovingCards
      
        pauseOnHover={false}
        items={skills}
        direction="right"
        speed="fast"
      
      />
      </div>
      
    </div>
  );
};

export default Skills;

const skills = [
  {
    title : "React",
    icon : "/images/skills/react.svg"
  },
  {
    title : "Express",
    icon : "/images/skills/express.svg"
  },
  {
    title : "Node",
    icon : "/images/skills/node.svg"
  },
  {
    title : "Mongo",
    icon : "/images/skills/mongo.svg"
  },
  {
    title : "Tailwind",
    icon : "/images/skills/tailwind.svg"
  },
  {
    title : "Material ui",
    icon : "/images/skills/material.svg"
  },
  {
    title : "HTML",
    icon : "/images/skills/html.svg"
  },
  {
    title : "JavaScript",
    icon : "/images/skills/js.svg"
  },
  {
    title : "Css",
    icon : "/images/skills/css.svg"
  },
    

];