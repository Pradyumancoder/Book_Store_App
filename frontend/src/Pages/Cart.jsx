import React from "react";
import CartLists from "../Components/CartLists";
import {  useSelector } from "react-redux";
import Loading from "../Components/Loading";
import EmptyCard from "../Components/EmptyCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  // Get cart data from the Redux store
  const { cartData } = useSelector((store) => store.cart);

    // Initialize the navigation hook from react-router-dom
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/checkout");
  };

    // Render appropriate UI based on the cart data

  if (!cartData) return <Loading />;
  if (cartData.length < 1) return <EmptyCard name={"cart"} />;

    // Render the CartLists component with cart items and order handling

  return <CartLists cartItems={cartData} handleOrder={handleOrder}/>;
};

export default Cart;
