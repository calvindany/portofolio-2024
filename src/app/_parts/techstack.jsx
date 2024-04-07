import Image from "next/image";
import { Box } from "@mui/material";

import { SectionHeader } from "@/components/Features";
import { TechStack as ts } from "@/datas";

const TechStack = () => {
  return (
    <>
      <Box
        id="techskills"
        className="min-h-[100vh] flex flex-col justify-center"
      >
        <SectionHeader title="Technology Stack" className="mb-12">
          This technology stack consists of a combination of programming
          languages, frameworks, libraries, and databases that collectively form
          the foundation of my development process
        </SectionHeader>
        <Box className="flex flex-wrap justify-center gap-12 items-center w-full">
          {ts.map((image, index) => (
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
              key={index}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TechStack;
