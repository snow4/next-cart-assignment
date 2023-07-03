/** @format */

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import DefaultImage from "../../../public/assets/defaultImage.png";
import { styled } from "@mui/material/styles";
import EmptyData from "../../hoc/emptyData";
import theme from "../theme";
import { useDispatch } from "react-redux";
import { addToCartStore } from "../../actions";

const styles = {
  wrapper: {
    flex: 1,
    padding: "1em 1em 1em 2em",
  },
  buttonContainer: {
    textAlignLast: "center",
    marginTop: "3em",
  },
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.black.stoneSilver,
    color: theme.palette.black.darkSeaBlack,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const header = ["Products", "Quantity", "Price"];

const OrderList = ({ data, setOrderList }) => {
  const removeHanlder = (item) => {
    let newArray = [...data];
    data.map((order, i) => {
      if (order.uniqueId === item.uniqueId) {
        newArray.splice(i, 1);
      }
    });
    setOrderList(newArray);
    alert("Item removed successfully");
  };

  const addToCart = () => {
    addToCartStore({ data });
    alert("All items added to cart successfully");
    setOrderList([]);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.table}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Products</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row?.currency?.symbol}
                    {row?.quantity * row?.grossPrice}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    sx={{ cursor: "pointer", color: "red" }}
                    onClick={() => removeHanlder(row)}
                  >
                    X
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={styles.buttonContainer}>
        {data?.length ? (
          <Button variant="contained" color="error" onClick={() => addToCart()}>
            Add to Cart
          </Button>
        ) : (
          <EmptyData />
        )}
      </Box>
    </Box>
  );
};

export default OrderList;
