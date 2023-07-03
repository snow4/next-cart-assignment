/** @format */

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { sideMenuItem } from "../constant";
import { useRouter } from "next/router";
import ProductDetailsPopup from "../Products/ProductDetailsPopup";
import { getCategories } from "../../actions";
import { useSelector } from "react-redux";

const styles = {
  wrapper: {
    padding: "10px",
  },
};
const SideMenu = () => {
  const router = useRouter();

  const data = useSelector((state) => state.cart);

  useEffect(() => {
    // console.log("store", data);
  }, [data]);

  return (
    <Box sx={styles.wrapper}>
      <Box>
        <Typography variant="h6">A T INKS</Typography>
      </Box>
      <List>
        {sideMenuItem.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <DashboardIcon />
                ) : (
                  <ProductionQuantityLimitsIcon />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                onClick={() => getRoutes({ text, router })}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideMenu;

const getRoutes = ({ text, router }) => {
  if (text === "All Products") {
    return router.push("/");
  }
};
