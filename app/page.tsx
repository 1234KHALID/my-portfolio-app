import React from "react";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
