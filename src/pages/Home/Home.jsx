import React from "react";
import { HeroSection } from "./HeroSection";
import Navbar from "../../components/Navbar";
import { Section_2 } from "./Section_2";

export const Home = () => {
  return (
    <div className="w-full h-full bg-[url(/assets/images/hero-bg.webp)]">
        <Navbar />
        <HeroSection />
        <Section_2 />
    </div>
  );
};
