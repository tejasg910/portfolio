"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Github",
    designation: "Visit Github",
    link:"https://github.com/tejasg910", 
    image:
      "https://images.unsplash.com/photo-1654277041218-84424c78f0ae?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Linkedin",
    designation: "Visit Linkedin",
    link:"https://www.linkedin.com/in/tejas-giri", 
    image:
      "https://images.unsplash.com/photo-1704382002666-5dc4fbb522c0?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Email",
    designation: "Mail to tejasgiri910@gmail.com",
    link:"mailto:tejasgiri910@gmail.com", 
    image:
      "https://images.unsplash.com/photo-1637593992672-ed85a851fdc3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
