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
      <TechStack />
      <Experience />
      <Projects />
      <Box className="mb-8"></Box>
    </>
  );
};

export default Home;
