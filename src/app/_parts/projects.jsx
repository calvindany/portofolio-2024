
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Box, Backdrop, CircularProgress } from "@mui/material";

import { SectionHeader } from "@/components/Features";
import { Projects as p } from "@/datas";

const Projects = () => {
  const [open, setOpen] = React.useState(false);

  const handleLoading = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 5000)
  }

  return (
    <>
      <Backdrop
          sx={{ color: '#fff', zIndex: "9999"}}
          open={open}
        >
          <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        className="flex flex-col justify-center items-center"
      >
        <SectionHeader title="Projects" className="mb-10">
          During my progression as a web developer, I&apos;ve crafted a number
          of web-based applications. Below is a compilation of the applications
          I&apos;ve worked on in the past.
        </SectionHeader>
        <Box className="flex items-center flex-col md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-8 w-full">
          {p.map((project, index) => (
            <Link
              href={project.navigation}
              aria-label={project.alt}
              key={index}
              className="w-fit"
              onClick={handleLoading}
            >
              <Image
                src={project.path}
                alt={project.alt}
                width={550}
                height={309.38}
                className="rounded-lg"
                sx={{
                  height: project.height,
                  width: project.height,
                }}
              />
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
