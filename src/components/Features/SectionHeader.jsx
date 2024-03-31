import { Box, Typography } from "@mui/material";

import { ChakraPetch } from "@/components/Fonts";

const SectionHeader = ({ title, className, children }) => {
  return (
    <>
      <Box className={className}>
        <Typography
          variant="h2"
          className={`${ChakraPetch.ChakraPetchBold.className} text-highlight text-large text-center mb-[10px]`}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          className={`${ChakraPetch.ChakraPetchMedium.className} text-default text-medium text-center`}
        >
          {children}
        </Typography>
      </Box>
    </>
  );
};

export default SectionHeader;
