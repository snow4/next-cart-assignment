/** @format */

import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EmptyData from "../../hoc/emptyData";
import theme from "../theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { clearWholeCart } from "../../actions";
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

const styles = {
  wrapper: {
    flex: 1,
    padding: "1em",
  },
  instruction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1em",
    background: theme.palette.background,
  },
  cartButtons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column-reverse", md: "row" },
    marginTop: "2em",
    rowGap: "10px",
  },
  purchaseBox: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
  },
};

const CartList = ({ data }) => {
  const clearCart = () => {
    clearWholeCart();
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
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        {data?.length ? (
          <Box>
            <Box sx={styles.instruction}>
              <Typography variant="p">Other Instructions</Typography>
              <Button
                variant="text"
                size="small"
                color="error"
                endIcon={<ArrowForwardIosIcon />}
              >
                Add
              </Button>
            </Box>
            <Box sx={styles.purchaseBox}>
              <Typography variant="p">Purchase order number</Typography>
              <Box
                sx={{ background: theme.palette.background, padding: "10px" }}
              >
                123456
              </Box>
            </Box>
            <Box sx={styles.cartButtons}>
              <Button
                variant="outlined"
                size="small"
                color="error"
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>
              <Button size="small" variant="contained" color="error">
                Place Order
              </Button>
            </Box>
          </Box>
        ) : (
          <EmptyData />
        )}
      </Box>
    </Box>
  );
};

export default CartList;
