import Image from "next/image";

import { Box, Typography } from "@mui/material";

import { ChakraPetch } from "@/components/Fonts";

const ProjectOverview = ({ galery }) => {
  return (
    <>
      <Box className="flex flex-col items-center justify-center gap-4 min-h-[100vh]">
        <Typography
          className={`${ChakraPetch.ChakraPetchBold.className} text-large text-highlight`}
        >
          Project Overview
        </Typography>
        <Box className="flex flex-col flex-wrap justify-center  gap-10 md:flex-row">
          {galery.map((image, index) => (
            <Image
              src={image.path}
              alt={image.alt}
              width={450}
              height={209}
              style={{ width: image.width, height: image.height }}
              key={index}
              className="border border-highlight rounded-md"
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectOverview;
