import Image from "next/image";
import { Box } from "@mui/material";

import { SectionHeader } from "@/components/Features";
import { TechStack as ts } from "@/datas";

const TechStack = () => {
  return (
    <>
      <Box className="flex flex-col justify-center items-center">
        <SectionHeader title="Technology Stack" className="mb-12">
          This technology stack consists of a combination of programming
          languages, frameworks, libraries, and databases that collectively form
          the foundation of my development process
        </SectionHeader>
        <Box className="flex flex-wrap justify-center gap-12 items-center w-[70%]">
          {ts.map((image, index) => (
            <Image
              src={image.path}
              alt={`TechStack Image ${index}`}
              width={200}
              height={100}
              style={{
                width: image.width,
                height: image.height,
                borderRadius: image.radius ? image.radius : "",
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
