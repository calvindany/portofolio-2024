"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

import { ChakraPetch, Poppins } from "@/components/Fonts";

const Hero = ({ title, description, website, github, thumbnail }) => {
  return (
    <>
      <Box className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center lg:flex-2 min-h-[100vh] gap-10">
        <Box className="flex flex-col justify-between w-[50%]">
          <Typography
            variant="h1"
            className={`${ChakraPetch.ChakraPetchBold.className} text-vlarge text-highlight mb-4`}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            className={`${Poppins.PoppinsNormal.className} text-medium text-default`}
          >
            {description}
          </Typography>
          <Box className="flex gap-10 mt-4">
            <Link
              href={website}
              className={`${
                Poppins.PoppinsNormal.className
              } text-default flex items-center gap-2 ${
                website == "" || website == null
                  ? "pointer-events-none opacity-50"
                  : ""
              } `}
            >
              <LanguageIcon className="text-default" /> Website
            </Link>
            <Link
              href={website}
              className={`${
                Poppins.PoppinsNormal.className
              } text-default flex items-center gap-2 ${
                website == "" || website == null
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            >
              <GitHubIcon className="text-default" /> Github
            </Link>
          </Box>
        </Box>
        <Box>
          <Image
            src={thumbnail.path}
            alt={thumbnail.alt}
            width={429}
            height={241}
            className="border border-highlight rounded-md"
            style={{
              width: thumbnail.width,
              height: thumbnail.height,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
