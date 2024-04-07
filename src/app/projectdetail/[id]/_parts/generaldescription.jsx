import { Box, Typography } from "@mui/material";

import { ChakraPetch, Poppins } from "@/components/Fonts";
import { DescriptionRounded } from "@mui/icons-material";

const GeneralDescription = ({ description1, description2, tech }) => {
  return (
    <>
      <Box className="grid grid-cols-1 min-h-[100vh] items-center">
        <Box class="grid grid-cols-2 items-start gap-32">
          <Box className="grid grid-cols-1 gap-4">
            <Typography
              variant="h2"
              className={`${ChakraPetch.ChakraPetchBold.className} text-large text-highlight`}
            >
              General Description
            </Typography>
            <Typography
              variant="body1"
              className={`${Poppins.PoppinsMedium.className} text-medium text-default`}
            >
              {description1}
            </Typography>
            <Typography
              variant="h2"
              className={`${Poppins.PoppinsMedium.className} text-medium text-default`}
            >
              {description2}
            </Typography>
          </Box>
          <Box className="grid grid-cols-1 gap-4">
            <Typography
              variant="h2"
              className={`${ChakraPetch.ChakraPetchBold.className} text-large text-highlight`}
            >
              Technology Used
            </Typography>
            <Box className="flex flex-wrap gap-x-10 gap-y-5">
              {tech.map((techname, index) => (
                <Box
                  className={`${ChakraPetch.ChakraPetchBold.className} w-fit bg-[#243881] p-2 text-default text-medium rounded-md`}
                >
                  {techname}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GeneralDescription;
