/** @format */

import React, { useEffect, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box } from "@mui/material";
import ProductDetail from "./ProductDetail";
import OrderList from "./OrderList";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../theme";

const styles = {
  wrapper: {
    height: "100%",
    background: "#fff",
  },
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
  },
};

const ProductDetailsPopup = ({ toggleDrawer, openDrawer, product }) => {
  const [orderList, setOrderList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(setProductList);
  }, [orderList]);
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={openDrawer}
      onClose={() => toggleDrawer({ product })}
      onOpen={() => toggleDrawer({ product })}
      swipeAreaWidth={20}
      PaperProps={{
        sx: { width: { xs: "100%", sm: "70%" } },
      }}
    >
      <Box sx={styles.wrapper}>
        <Box sx={{ textAlignLast: "end", padding: "2em 2em 0 0" }}>
          <CloseIcon
            onClick={() => toggleDrawer({ product })}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Box sx={styles.container}>
          <Box
            sx={{ borderRight: `2px solid ${theme.palette.black.stoneSilver}` }}
          >
            <ProductDetail
              data={product}
              setOrderList={setOrderList}
              orderList={orderList}
            />
          </Box>
          <Box>
            <OrderList data={orderList} setOrderList={setOrderList} />
          </Box>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default ProductDetailsPopup;
