/** @format */

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DefaultImage from "../../../public/assets/defaultImage.png";
import theme from "../theme";

const styles = {
  wrapper: {
    flex: 2,
    // padding:"1em"
  },
  container: {
    padding: { xs: "1em", sm: "1.4em 1em 1.4em 2em" },
    display: "flex",
    flexDirection: "column",
    rowGap: "16px",
  },
  imageContainer: {
    padding: { xs: "unset", sm: "2em" },
    textAlignLast: "center",
  },
  colorBoxContainer: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "10px",
    columnGap: "10px",
  },
  colorBox: {
    padding: "10px",
    width: "fit-content",
    borderRadius: "5px",
    cursor: "pointer",
  },
  catalogue: {
    color: theme.palette.black.stoneSilver,
  },
  description: {
    fontWeight: 600,
    color: theme.palette.black.darkSeaBlack,
    fontSize: "18px",
  },
  saleDescription: {
    color: theme.palette.black.coolGrey,
    fontSize: "14px",
  },
  headerBody: {
    display: "flex",
    flexDirection: "column",
    rowGap: "16px",
  },
  buttonBox: { textAlignLast: "center", marginTop: "1em" },
  priceDetailsBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 2em 0 0",
  },
};

const ProductDetail = ({ data, setOrderList, orderList }) => {
  const [selectedColor, setSelectedColor] = useState(data?.variants[0]);
  const [selectedPackage, setSelectedPackage] = useState(data?.variants[0]);
  const [needUrgent, setNeedUrgent] = useState(false);
  const [quantity, setQuantity] = useState(12);

  useEffect(() => {
    setSelectedColor(data?.variants[0]);
    setSelectedPackage(data?.variants[0]);
  }, [data?.variants]);

  const colorSelectHandler = ({ item, type }) => {
    if (type === "color") {
      let getItem = data?.variants?.find(
        (box) => box.colorDescription === item
      );
      setSelectedColor(getItem);
      setSelectedPackage(getItem);
    } else {
      let getItem = data?.variants?.find(
        (box) => box.packingDescription === item
      );
      setSelectedColor(getItem);
      setSelectedPackage(getItem);
    }
  };

  const checkSelectedItemColor = ({ item, type }) => {
    if (
      (type === "color" && item === selectedColor?.colorDescription) ||
      (type === "package" && item === selectedPackage?.packingDescription)
    ) {
      return {
        border: `1px solid ${theme.palette.status.errorDark}`,
        background: theme.palette.status.errorLight,
        color: theme.palette.status.errorDark,
      };
    }
    return {
      border: "1px solid #eee",
    };
  };

  const handleCheckBoxChange = () => {
    setNeedUrgent(!needUrgent);
  };
  // uniqueId = catalognumber + colorCode + packageId
  function upsert(array, element) {
    // (1)
    const i = array.findIndex(
      (_element) => _element.uniqueId === element.uniqueId
    );
    if (i > -1) {
      array[i] = {
        ...element,
        quantity: Number(array[i].quantity) + Number(element.quantity),
      };
      return array;
    } // (2)
    else {
      array.push(element);
      return array;
    }
  }

  const addHandler = () => {
    let uniqueId =
      selectedColor.bpCatalogNumber +
      "-" +
      selectedColor.colorCode +
      "-" +
      selectedColor.packingCode;
    let dataAdded = {
      ...selectedColor,
      uniqueId,
      quantity,
      images: data?.productImages,
      name: data?.itemDescription,
      currency: data?.currency,
    };
    let newList = [...upsert(orderList, dataAdded)];
    setOrderList(newList);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Typography variant="h6">{data?.itemDescription}</Typography>
        <Box sx={styles.imageContainer}>
          <Image
            src={data?.productImages?.[0] || DefaultImage}
            width={100}
            height={100}
            sizes="100vw"
            alt="Picture"
            style={styles.cardWrapper}
          />
        </Box>
        <Typography sx={styles.catalogue}>
          #{selectedColor?.bpCatalogNumber}
        </Typography>
        <Box sx={styles.priceDetailsBox}>
          <Typography variant="p" sx={styles.description}>
            {data?.itemDescription}
          </Typography>
          <Typography variant="p" sx={styles.description}>
            {data?.currency?.symbol}
            {selectedColor?.grossPrice}
          </Typography>
        </Box>
        <Typography sx={styles.saleDescription}>
          {selectedColor?.saleDescription}
        </Typography>
        <Box sx={styles.headerBody}>
          <Typography variant="h6">Please select Color Description</Typography>
          <Box sx={styles.colorBoxContainer}>
            {[
              ...new Set(data?.variants?.map((item) => item.colorDescription)),
            ].map((item) => {
              return (
                <Box
                  sx={{
                    ...styles.colorBox,
                    ...checkSelectedItemColor({ item, type: "color" }),
                  }}
                  onClick={() => colorSelectHandler({ item, type: "color" })}
                >
                  {item}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={styles.headerBody}>
          <Typography variant="h6">
            Please select Packaging Description
          </Typography>
          <Box sx={styles.colorBoxContainer}>
            {[
              ...new Set(
                data?.variants?.map((item) => item.packingDescription)
              ),
            ].map((item) => {
              return (
                <Box
                  sx={{
                    ...styles.colorBox,
                    ...checkSelectedItemColor({ item, type: "package" }),
                  }}
                  onClick={() => colorSelectHandler({ item, type: "package" })}
                >
                  {item}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={styles.headerBody}>
          <Typography variant="h6">Enter Quantity</Typography>
          <Box>
            <TextField
              type="number"
              InputProps={{
                inputProps: {
                  max: 100,
                  min: 12,
                },
              }}
              value={quantity}
              onKeyDown={(event) => {
                event.preventDefault();
              }}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Box>
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={needUrgent}
                onChange={handleCheckBoxChange}
                name="urgent-order"
              />
            }
            label="Need Urgent Order"
          />
        </Box>
        <Box sx={styles.buttonBox}>
          <Button
            variant="outlined"
            color="error"
            onClick={() => addHandler()}
            sx={{ width: "50%" }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
