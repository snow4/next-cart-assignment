/** @format */

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCategories, getSubCategories } from "../../actions";
import CategoryCard from "../../hoc/categoryCard";
import SubCategoryCard from "../../hoc/subCategoryCard";
import ProductDetailsPopup from "../Products/ProductDetailsPopup";
import EmptyData from "../../hoc/emptyData";

const styles = {
  categoryBox: {
    scrollbarWidth: "thin",
    display: "flex",
    width: "100%",
    columnGap: "16px",
    overflow: "auto",
  },
  subCategoryBox: {
    borderTop: "2px solid #eee",
    marginTop: "16px",
    padding: "2em 0",
  },
};
const Body = () => {
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubCategory, setselectedSubCategory] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const data = useSelector((state) => state.cart);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response);
        setSelectedCategory(response[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (selectedCategory?.categoryId) {
      getSubCategories({ category_id: selectedCategory?.categoryId })
        .then((subcat) => {
          setSubCategory(subcat);
        })
        .catch((e) => console.log(e));
    }
  }, [selectedCategory?.categoryId]);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const changeCategoryHandler = (category) => {
    setSelectedCategory(category);
  };

  const changeSubCategoryHandler = (category) => {
    setselectedSubCategory(category);
  };
  return (
    <Box sx={{ padding: "1.4em" }}>
      <Typography variant="h6">Print Heads</Typography>
      <Box sx={{ padding: "2em 10px" }}>
        <Box>
          {categories.length > 0 ? (
            <Box sx={styles.categoryBox}>
              {categories?.map((cat, i) => {
                return (
                  <CategoryCard
                    {...cat}
                    key={i}
                    changeCategoryHandler={changeCategoryHandler}
                    selectedCategory={selectedCategory}
                  />
                );
              })}
            </Box>
          ) : (
            <EmptyData />
          )}
        </Box>
        <Box>
          <Box sx={styles.subCategoryBox}>
            {subCategory.length > 0 ? (
              subCategory?.map((subCat, i) => (
                <SubCategoryCard
                  {...subCat}
                  key={i}
                  toggleDrawer={toggleDrawer}
                  changeSubCategoryHandler={changeSubCategoryHandler}
                />
              ))
            ) : (
              <EmptyData />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
