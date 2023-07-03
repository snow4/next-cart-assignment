/** @format */

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllProducts } from "../../src/actions";
import ProductCard from "../../src/hoc/ProductCard";
import ProductDetailsPopup from "../../src/components/Products/ProductDetailsPopup";
import EmptyData from "../../src/hoc/emptyData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const styles = {
  wrapper: {
    padding: "3em",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "10px",
    columnGap: "10px",
    marginTop: "2em",
    justifyContent: "center",
  },
  productsBox: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "10px",
    columnGap: "16px",
    marginTop: "2em",
    justifyContent: "flex-start",
  },
};

const ProductDetail = () => {
  const router = useRouter();

  const [allProducts, setAllProducts] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  const id = router.query.subCategoryId;

  useEffect(() => {
    if (id) {
      getAllProducts({ subCategory_id: id }).then((pro) => {
        setAllProducts(pro);
      });
    }
  }, [id]);

  const toggleDrawer = ({ product }) => {
    setSelectedProduct(product);
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ArrowBackIcon
          onClick={() => router.push("/")}
          sx={{ cursor: "pointer", fontSize: "1.9em" }}
        />
        <Typography variant="h5">All Products</Typography>
      </Box>
      <Box sx={styles.container}>
        {allProducts.length > 0 ? (
          <Box sx={styles.productsBox}>
            {allProducts?.map((product, index) => (
              <ProductCard
                product={product}
                key={index}
                toggleDrawer={toggleDrawer}
              />
            ))}
          </Box>
        ) : (
          <EmptyData />
        )}
      </Box>
      <ProductDetailsPopup
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        product={selectedProduct}
      />
    </Box>
  );
};

export default ProductDetail;
