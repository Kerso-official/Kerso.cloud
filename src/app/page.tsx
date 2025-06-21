"use client";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import MySkills from "@/components/sections/MySkills";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MySkills />
      <Projects />
      <Footer />
    </main>
  );
}