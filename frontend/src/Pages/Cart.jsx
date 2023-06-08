import React from "react";
import CartLists from "../Components/CartLists";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading";
import EmptyCard from "../Components/EmptyCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartData } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/checkout");
  };

  if (!cartData) return <Loading />;
  if (cartData.length < 1) return <EmptyCard name="cart" />;

  return <CartLists cartItems={cartData} handleOrder={handleOrder} />;

};

export default Cart;
