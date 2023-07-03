/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";

const styles = {
  wrapper: { textAlign: "center", margin: "2em 0" },
};
const EmptyData = () => {
  return (
    <Typography variant="h4" sx={styles.wrapper}>
      Data not available
    </Typography>
  );
};

export default EmptyData;
