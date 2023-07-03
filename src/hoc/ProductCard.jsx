/** @format */

import React from "react";
import Image from "next/image";
import DefaultImage from "../../public/assets/defaultImage.png";
import { Box, Typography } from "@mui/material";

const styles = {
  boxContainer: {
    border: "2px solid #eee",
    padding: "1em",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  cardWrapper: {
    cursor: "pointer",
  },
  container: {
    padding: "1em",
  },
  textStyle: {
    marginTop: "12px",
    // whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};
function ProductCard({ product, toggleDrawer }) {
  return (
    <Box sx={styles.boxContainer} onClick={() => toggleDrawer({ product })}>
      {/* <Box sx={styles.container}> */}
      <Image
        src={product.productImages?.[0] || DefaultImage}
        width={120}
        height={120}
        alt="Picture"
        style={styles.cardWrapper}
      />
      {/* </Box> */}
      {/* <Box> */}
      <Typography variant="span" sx={styles.textStyle}>
        {product.itemDescription}
      </Typography>
      {/* </Box> */}
    </Box>
  );
}

export default ProductCard;
