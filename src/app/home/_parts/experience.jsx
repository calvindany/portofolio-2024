import { Box } from "@mui/material";

import { SectionHeader, ExperienceCard } from "@/components/Features";

const Experience = () => {
  const datas = [
    {
      company: "Kedaireka",
      role: "Research Assistant",
      monthStart: "Sep 2022",
      monthEnd: "Dec 2022",
      description:
        "Creating an informational system that provides learning resources about various types of flora ",
      hide: false,
      highlight: false,
    },
    {
      company: "Bangkit Academy",
      role: "Cloud Computing Student",
      monthStart: "Feb 2023",
      monthEnd: "Jul 2023",
      description:
        "Creating an informational system that provides learning resources about various types of flora ",
      hide: false,
      highlight: false,
    },
    {
      company: "LepKom",
      role: "Laboratory Assistant",
      monthStart: "Mar 2022",
      monthEnd: "Present",
      description:
        "Creating an informational system that provides learning resources about various types of flora ",
      hide: false,
      highlight: false,
    },
    {
      company: "Taldio",
      role: "Engineer",
      monthStart: "Nov 2023",
      monthEnd: "Present",
      description:
        "Creating an informational system that provides learning resources about various types of flora ",
      hide: false,
      highlight: true,
    },
    {
      company: "Coding.ID",
      role: "Coach Assistant",
      monthStart: "Feb 2023",
      monthEnd: "Jan 2024",
      description:
        "Creating an informational system that provides learning resources about various types of flora ",
      hide: false,
      highlight: true,
    },
  ];
  return (
    <>
      <Box className="h-[100vh] flex flex-col justify-center">
        <SectionHeader title="Experience" className="mb-12">
          Throughout my life journey, I have participated in various events that
          have provided me with opportunities to develop myself in terms of both
          hard skills and soft skills. These experiences have contributed
          significantly to my personal and professional growth.
        </SectionHeader>
        <Box>
          <ExperienceCard datas={datas} />
        </Box>
      </Box>
    </>
  );
};

export default Experience;
