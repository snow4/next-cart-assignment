/** @format */

import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";
import theme from "../theme";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideMenu from "./SideMenu";
import Modal from "@mui/material/Modal";
import CartList from "../Products/cartList";
import Cart from "./Cart";
import CloseIcon from "@mui/icons-material/Close";
const styles = {
  wrapper: {
    background: theme.palette.grey.white,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    // height: "4em",
    padding: "1em 10px",
  },
  resposive: { display: { xs: "block", sm: "none" } },
  iconsBox: {
    display: "flex",
    justifyContent: "space-between",
  },
};
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconsBox}>
        <MenuIcon sx={styles.resposive} onClick={() => toggleDrawer()} />
        <ShoppingCartIcon
          sx={styles.resposive}
          onClick={() => setOpenCart(true)}
        />
      </Box>
      <Drawer anchor={"left"} open={openDrawer} onClose={() => toggleDrawer()}>
        <SideMenu />
      </Drawer>
      <Modal
        open={openCart}
        onClose={() => setOpenCart(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ background: theme.palette.grey.white, height: "100%" }}>
          <Box sx={{ textAlignLast: "right", padding: "10px 10px 0 0" }}>
            <CloseIcon onClick={() => setOpenCart(false)} />
          </Box>
          <Cart />
        </Box>
      </Modal>
    </Box>
  );
};

export default Header;
