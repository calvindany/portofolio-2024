"use client";

import { Box, Typography, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import { ChakraPetch, Poppins } from "@/components/Fonts";

const Hero = () => {
  return (
    <>
      <Box
        id="introduction"
        className="flex flex-col gap-[10px] justify-center min-h-[100vh]"
      >
        <Typography
          variant="h1"
          className={`${ChakraPetch.ChakraPetchBold.className} text-large text-default`}
        >
          Hi! I&apos;m, <span className="text-highlight">Calvin Danyalson</span>
        </Typography>

        <Typography
          variant="p"
          className={`${Poppins.PoppinsMedium.className} text-medium text-default`}
        >
          A <span className="text-highlight">Web Developer</span> and willing to
          learn something new when if it is comes to software engineer
        </Typography>

        <Box className="flex gap-8">
          <Link
            href="https://www.linkedin.com/in/calvin-danyalson-a87295234/"
            className={`${Poppins.PoppinsMedium.className} text-default flex items-center gap-2`}
          >
            <LinkedInIcon className="text-default" /> Calvin Danyalson
          </Link>

          <Link
            href="mailto:calvindanyalson@gmail.com"
            className={`${Poppins.PoppinsMedium.className} text-default flex items-center gap-2`}
          >
            <EmailIcon className="text-default" /> calvindanyalson@gmail.com
          </Link>

          <Link
            href="https://github.com/calvindany"
            className={`${Poppins.PoppinsMedium.className} text-default flex items-center gap-2`}
          >
            <GitHub className="text-default" /> calvindany
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
