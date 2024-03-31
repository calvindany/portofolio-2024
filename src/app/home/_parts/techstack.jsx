import Image from "next/image";
import { Box } from "@mui/material";

import { SectionHeader } from "@/components/Features";

const TechStack = () => {
  const images = [
    {
      path: "/image 1.png",
      width: "96.97px",
      height: "80px",
    },
    {
      path: "/image 2.png",
      width: "69.83px",
      height: "80px",
    },
    {
      path: "/image 3.png",
      width: "80px",
      height: "80px",
    },
    {
      path: "/image 4.png",
      width: "100px",
      height: "80px",
    },
    {
      path: "/image 5.png",
      width: "80px",
      height: "90px",
    },
    {
      path: "/image 6.png",
      width: "141px",
      height: "51px",
    },
    {
      path: "/image 7.png",
      width: "89px",
      height: "85px",
    },
  ];

  return (
    <>
      <Box className="h-[100vh] flex flex-col justify-center">
        <SectionHeader title="Technology Stack" className="mb-12">
          This technology stack consists of a combination of programming
          languages, frameworks, libraries, and databases that collectively form
          the foundation of my development process
        </SectionHeader>
        <Box className="flex flex-wrap justify-center gap-12 items-center w-full">
          {images.map((image, index) => (
            <>
              <Image
                src={image.path}
                alt={`TechStack Image ${index}`}
                width={200}
                height={100}
                style={{
                  width: image.width,
                  height: image.height,
                }}
                priority
              />
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TechStack;
