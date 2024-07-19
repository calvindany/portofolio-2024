import { Box } from "@mui/material";

import { SectionHeader, ExperienceCard } from "@/components/Features";
import { Experiences } from "@/datas";

const Experience = () => {
  return (
    <>
      <Box
        id="experience"
        className="my-32 flex flex-col justify-center"
      >
        <SectionHeader title="Experience" className="mb-12">
          Throughout my life journey, I have participated in various events that
          have provided me with opportunities to develop myself in terms of both
          hard skills and soft skills. These experiences have contributed
          significantly to my personal and professional growth.
        </SectionHeader>
        <Box>
          <ExperienceCard datas={Experiences} />
        </Box>
      </Box>
    </>
  );
};

export default Experience;
