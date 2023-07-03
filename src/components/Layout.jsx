/** @format */

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./LayoutComponents/Header";
import SideMenu from "./LayoutComponents/SideMenu";
import theme from "./theme";
import Cart from "./LayoutComponents/Cart";
import Loader from "../hoc/Loader";
import { useSelector } from "react-redux";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1em",
    background: theme.palette.background,
    height: "100vh",
    position: "relative",
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: "1em",
    padding: { xs: "12px", sm: "1em" },
  },
  commonBoxStyles: {
    background: theme.palette.grey.white,
    borderRadius: "10px",
  },
  sideMenuContainer: {
    display: { xs: "none", md: "block" },
    flex: 1,
  },
  bodyWrapper: {
    flex: 3,
    overflowY: "hidden",
  },
  cartContainer: {
    flex: 1,
    display: { xs: "none", md: "block" },
  },
  loaderBox: {
    position: "absolute",
    top: "40vh",
    left: { xs: "28vw", sm: "40vw" },
    zIndex: 99,
  },
};

const Layout = ({ children }) => {
  const [showLoader, setShowLoader] = useState(false);

  const data = useSelector((state) => state.cart);
  useEffect(() => {
    console.log("store", data.cart);
    setShowLoader(data.loader);
  }, [data.loader]);

  return (
    <Box sx={styles.wrapper}>
      <Header />
      <Box sx={styles.bodyContainer}>
        <Box sx={{ ...styles.sideMenuContainer, ...styles.commonBoxStyles }}>
          <SideMenu />
        </Box>
        <Box sx={{ ...styles.bodyWrapper, ...styles.commonBoxStyles }}>
          {children}
        </Box>
        <Box sx={{ ...styles.cartContainer, ...styles.commonBoxStyles }}>
          <Cart />
        </Box>
      </Box>
      {showLoader && (
        <Box sx={styles.loaderBox}>
          <Loader />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
