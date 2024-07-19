"use client";

import React from "react";
import { Card, CardContent, Typography, Box, Pagination } from "@mui/material";

import { ChakraPetch } from "../Fonts";
import { useScreenDetector } from "@/hooks";

const ExperienceCard = ({ datas = [] }) => {
  const { isTablet } = useScreenDetector();
  // const renderData = datas.length > 0 ? datas : [];

  const [displayData, setDisplayData] = React.useState([]);

  React.useEffect(() => {
    setDisplayData([...datas].sort((a, b) => a.order - b.order));
  }, [])

  // const [currentPage, setCurrentPage] = React.useState(1);
  // const itemsPerPage = isTablet() ? 1 : 2;
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Box className="grid lg:grid-cols-2 justify-items-center gap-8 md:px-36 lg:px-32 bg-transparent mb-12 w-full">
        {displayData.map((data, index) => (
          <Card
            className="p-1 border-4 border-highlight rounded-xl shadow-lg"
            key={index}
            sx={{ background: "transparent" }}
          >
            <CardContent className="flex flex-col gap-4 rounded-xl">
              <Typography
                variant="h3"
                className={`${ChakraPetch.ChakraPetchMedium.className} text-medium text-default`}
              >
                <span className="text-highlight">{data.company}</span> - {data.role}
              </Typography>
              <Typography
                variant="h4"
                className={`${ChakraPetch.ChakraPetchMedium.className} text-small text-default mb-4`}
              >
                {data.monthStart} - <span className={`${data.monthEnd == "Present" ? "text-highlight" : "text-default"}`}>{data.monthEnd}</span>
              </Typography>
              <Typography
                variant="body1"
                className={`${ChakraPetch.ChakraPetchMedium.className} text-small text-default pl-4`}
              >
                <ol className={`${ChakraPetch.ChakraPetchMedium.className} list-circle text-small text-default`}>
                  {data.description.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ol>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ExperienceCard;
