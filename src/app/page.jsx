"use client";
import { Box } from "@mui/material";

import Experience from "./_parts/experience";
import Hero from "./_parts/hero";
import Projects from "./_parts/projects";
import TechStack from "./_parts/techstack";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="py-32" id="techskills">
        <TechStack />
      </div>
      <div className="py-32" id="experience" >
        <Experience />
      </div>
      <div className="py-32" id="projects">
        <Projects />
      </div>
      <Box className="mb-32"></Box>
    </>
  );
};

export default Home;
