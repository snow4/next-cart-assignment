/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import DefaultImage from "../../public/assets/defaultImage.png";
import theme from "../components/theme";

const styles = {
  cardWrapper: {
    cursor: "pointer",
    padding: "10px 12px",
    borderRadius: "10px",
  },
};
const CategoryCard = ({
  categoryName,
  categoryImageURL,
  categoryId,
  changeCategoryHandler,
  selectedCategory,
}) => {
  return (
    <Box
      onClick={() => {
        changeCategoryHandler({ categoryId: categoryId });
      }}
      sx={{
        border:
          selectedCategory.categoryId === categoryId
            ? `3px solid ${theme.palette.status.errorDark}`
            : `3px solid #eee`,
        ...styles.cardWrapper,
      }}
    >
      <Box sx={{ height: "110px", overflowX: "hidden" }}>
        <Image
          src={categoryImageURL || DefaultImage}
          width={120}
          height={100}
          alt="Picture"
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="p">{categoryName}</Typography>
      </Box>
    </Box>
  );
};

export default CategoryCard;
