/** @format */

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import React from "react";

const Loader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size="10rem" />
    </Box>
  );
};

export default Loader;
