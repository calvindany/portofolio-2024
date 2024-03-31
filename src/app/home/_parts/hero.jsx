"use client";

import { Box, Typography } from "@mui/material";
import { ChakraPetch } from "@/components/Fonts";

const Hero = () => {
  return (
    <>
      <Box className="flex flex-col justify-center h-[100vh]">
        <Typography
          variant="h1"
          className={`${ChakraPetch.ChakraPetchBold.className} text-large text-default`}
        >
          Hi! I'm, <span className="text-highlight">Calvin Danyalson</span>
        </Typography>
        <Typography variant="p" className="text-medium text-default">
          A <span className="text-highlight">Web Developer</span> and willing to
          learn something new when if it is comes to software engineer
        </Typography>
      </Box>
    </>
  );
};

export default Hero;
