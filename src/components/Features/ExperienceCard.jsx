"use client";

import React from "react";
import { Card, CardContent, Typography, Box, Pagination } from "@mui/material";

import { ChakraPetch } from "../Fonts";

const ExperienceCard = ({ datas = [] }) => {
  const renderData = datas.length > 0 ? datas : [];
  const sortedData = [...datas].sort((a, b) => b.highlight - a.highlight);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 2;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box className="grid grid-cols-2 justify-items-center gap-8 px-32 bg-transparent mb-12">
        {currentItems.map((data, index) => (
          <Card
            className="p-1 border-2 border-highlight rounded-xl"
            key={index}
            sx={{ background: "transparent" }}
          >
            <CardContent className="flex flex-col gap-4 rounded-xl">
              <Typography
                variant="h3"
                className={`${ChakraPetch.ChakraPetchMedium.className} text-medium text-default`}
              >
                {data.company} - {data.role}
              </Typography>
              <Typography
                variant="h4"
                className={`${ChakraPetch.ChakraPetchMedium.className} text-small text-default mb-4`}
              >
                {data.monthStart} - {data.monthEnd}
              </Typography>
              <Typography
                variant="body1"
                className={`${ChakraPetch.ChakraPetchMedium.className} text-small text-default`}
              >
                {data.description}{" "}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box className="flex justify-center">
        <Pagination
          count={Math.ceil(renderData.length / itemsPerPage)}
          onChange={handlePageChange}
          className="text-default"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", // customize the color of pagination items
            },
            "& .Mui-selected": {
              backgroundColor: "#FFA500", // customize the background color of the selected pagination item
            },
          }}
        />
      </Box>
    </>
  );
};

export default ExperienceCard;
