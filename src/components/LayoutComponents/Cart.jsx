/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartList from "../Products/cartList";

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  const data = useSelector((state) => state.cart);
  useEffect(() => {
    console.log("store", data);
  }, [data.cartItems]);

  return (
    <div>
      <CartList data={data.cartItems} />
    </div>
  );
};

export default Cart;
