"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "About me",
      link: "#about",
    },
    {
      name: "Reviews",
      link: "/reviews",
    },
    {
      name: "Contact",
      link: "/contacts",
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    
    </div>
  );
}
