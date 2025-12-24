"use client";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import MySkills from "@/components/sections/MySkills";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
// Snowfall effect for winter time
import Snowfall from "react-snowfall";


export default function HomePage() {
  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1000 }}>
        <Snowfall />
      </div>
      <Hero />
      <AboutMe />
      <MySkills />
      <Projects />
      <Footer />
    </main>
  );
}