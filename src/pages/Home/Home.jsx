import React from "react";
import { HeroSection } from "./HeroSection";
import Navbar from "../../components/Navbar";

export const Home = () => {
  return (
    <div className="w-full h-full bg-[url(/assets/images/hero-bg.webp)]">
        <Navbar />
        <HeroSection />
    </div>
  );
};
