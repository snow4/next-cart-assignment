/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import DefaultImage from "../../public/assets/defaultImage.png";

const styles = {
  cardWrapper: {
    cursor: "pointer",
  },
  textStyle: {
    position: "absolute",
    bottom: "10px",
    left: "23px",
  },
  container: { position: "relative", display: "flex", flexDirection: "column" },
};

const SubCategoryCard = ({
  subCategoryName,
  subCategoryId,
  toggleDrawer,
  subCategoryImageURL,
}) => {
  const router = useRouter();

  return (
    <Box sx={styles.cardWrapper}>
      <Box sx={styles.container}>
        <Image
          src={subCategoryImageURL || DefaultImage}
          width={150}
          height={150}
          alt="Picture"
          onClick={() => router.push(`/products/${subCategoryId}`)}
        />
        <Box sx={styles.textStyle}>
          <Typography variant="p">{subCategoryName}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SubCategoryCard;
