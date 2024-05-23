import React from "react";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
};

export default Home;
