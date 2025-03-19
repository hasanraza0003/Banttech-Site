import React from "react";
import { HeroSection } from "./HeroSection";
import Navbar from "../../components/Navbar";
import { Creativity } from "./Creativity";
import { Revenue } from "./Revenue";
import { Glance } from "./Glance";
import {MakeIdea } from "./MakeIdea";
import {Vision } from "./Vision";
import {BlogSec } from "./BlogSec";

export const Home = () => {
  return (
    <div className="w-full h-full bg-[url(/assets/images/hero-bg.webp)]">
        <Navbar />
        <HeroSection />
        <Creativity />
        <Revenue />
        <Glance />
        <MakeIdea />
        <Vision />
        <BlogSec />
    </div>
  );
};
